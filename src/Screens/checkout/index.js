import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import {
  AntDesign,
  Fontisto,
  EvilIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Button from "../../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../redux/reducers/cartTotalReducers";
import { useStripe } from "@stripe/stripe-react-native";
import { Alert } from "react-native";
import axios from "axios";
import { clear } from "../../redux/reducers/cardReducers";
import { saveUserAddress } from "../../redux/actions/auth";

const Checkout = ({ navigation, route }) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const [isloading, setIsloading] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const checkboxId = useSelector((state) => state.checkboxReduce.addressId);
  const { stateAddress } = useSelector((state) => state.addressReduce);
  const totalPrice = useSelector(cartTotalPriceSelector);
  let cart = route.params.paramKey;
  const productId = checkboxId.join("");
  const address = stateAddress.find((item) => item.id == productId);

  useEffect(() => {
    getUserAddress();
  }, []);

  const getUserAddress = () => {
    AsyncStorage.getItem("Address")
      .then((address) => {
        const parsedAddress = JSON.parse(address);
        if (parsedAddress && typeof parsedAddress === "object") {
          dispatch(saveUserAddress(parsedAddress));
        }
      })
      .catch((err) => console.log(err));
  };
  if (isloading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );

  if (address) {
    var fromdata = {
      customer_id: userData.login.user.databaseId,
      email: address.data.email,
      phone: address.data.Phone,
      first_name: address.data.first_name,
      last_name: address.data.last_name,
      address_1: address.data.address,
      carts: cart.carts,
    };
  }

  const name = userData.login.user.username;
  const total = totalPrice.toFixed(2);
  const subscrice = async () => {
    try {
      // sending request
      const response = await fetch("http://192.168.1.18:8080/payment-sheet", {
        method: "POST",
        body: JSON.stringify({ name, total }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: name,
      });
      if (initSheet.error) return Alert.alert(initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });
      if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      Alert.alert("Payment complete, thank you!");
      axios({
        url: `http://192.168.1.18/wordpress/wp-json/wc/v2/payment`,
        method: "POST",
        data: fromdata,
      })
        .then(function (response) {
          console.log("send", response);
        })
        .catch(function (error) {
          console.log(error);
        });
      dispatch(clear());
      navigation.navigate("DoneCheckout");
    } catch (error) {
      console.log(error);
      Alert.alert("Something went wrong, try again later!");
    }
  };

  // console.log(idcheck);
  return (
    <SafeAreaView style={styles.container}>
      {/* {/ screen /} */}
      <View style={styles.body} className="">
        {/* {/ header /} */}
        <View className="flex-row items-center h-16 justify-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-4 pr-3"
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="text-lg font-bold">Check out</Text>
          </View>
        </View>
        {/* {/ top body /} */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="pl-5 pr-5">
            <View className="mt-3">
              <View className="flex-row h-7 items-center justify-between">
                <Text className="text-base  text-gray-500">
                  Shipping address
                </Text>
                <TouchableOpacity
                  className="h-full"
                  onPress={() => navigation.navigate("ShippingAdd")}
                >
                  <Image
                    resizeMode="contain"
                    className="h-full w-10"
                    source={require("../../../assets/img/pen.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* {/ name, address /} */}
            {address == undefined ? (
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  // marginBottom: 10,
                  elevation: 1.5,
                }}
                className="h-20 mt-2 bg-white items-center justify-center"
              >
                <Text className="text-base font-bold">
                  No user address yet...
                </Text>
              </View>
            ) : (
              <View style={styles.boxAdd}>
                <View className="border-b ml-3 mr-3 pt-2 pb-2 border-b-gray-400">
                  <Text className="text-base font-bold">
                    {address.data.first_name + address.data.last_name}
                  </Text>
                </View>
                <View className=" ml-3 mr-3 pt-3 pb-3">
                  <Text className="text-gray-400 text-sm">
                    {"Sdt : " +
                      address.data.Phone +
                      ", " +
                      "Email : " +
                      address.data.email +
                      ", " +
                      "Address : " +
                      address.data.address}
                  </Text>
                </View>
              </View>
            )}
            {/* {/ payment method /} */}
            <View className="mt-3">
              <View className="flex-row h-7 items-center justify-between">
                <Text className="text-base text-gray-500">Payment</Text>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    className="h-full w-10"
                    source={require("../../../assets/img/pen.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxAdd}>
              <View className=" h-20  flex-row items-center ml-3 mr-3 ">
                <TouchableOpacity style={styles.card}>
                  <Fontisto name="mastercard" size={25} color="black" />
                </TouchableOpacity>
                <View>
                  <Text className="pl-5">*** *** *** ***</Text>
                  <Text className="pl-5">3121</Text>
                </View>
              </View>
            </View>
            {/* {/ delivery method /} */}
            <View className="mt-3">
              <View className="flex-row h-7 items-center justify-between">
                <Text className="text-base text-gray-500">Delivery method</Text>
                <TouchableOpacity>
                  <Image
                    resizeMode="contain"
                    className="h-full w-10"
                    source={require("../../../assets/img/pen.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxAdd}>
              <View className=" flex-row h-20 items-center ml-3 mr-3  ">
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
                <Text className="pl-5 text-base font-bold">Fast (2-3days)</Text>
              </View>
            </View>
            {/* {/ total price /} */}
            <View className="mt-4 mb-3">
              <View style={styles.boxTotal}>
                <View className=" flex-row items-center ml-3 mr-3 mt-4 justify-between ">
                  <Text className="text-base">Order</Text>
                  <Text className="text-base">${totalPrice.toFixed(2)}</Text>
                </View>
                <View className=" flex-row items-center ml-3 mr-3 mt-7 justify-between ">
                  <Text className="text-base ">Delivery</Text>
                  <Text className="text-base">$10.00</Text>
                </View>
                <View className=" flex-row items-center ml-3 mr-3 mt-7 justify-between ">
                  <Text className="text-lg">Total</Text>
                  <Text className="text-base font-bold">
                    ${(totalPrice + 10.0).toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className="items-center">
        <Button
          title={"Submit order"}
          textStyle={{
            marginTop: 20,
            color: "#fff",
            fontSize: 20,
            fontFamily: "Poppins-Regular",
          }}
          onPress={() => {
            subscrice();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Checkout;

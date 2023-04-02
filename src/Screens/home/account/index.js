import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/button";
import actions from "../../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveDataOder, saveUserAddress } from "../../../redux/actions/auth";
import axios from "axios";
import { setOrder } from "../../../Async";

const Account = () => {
  const userData = useSelector((state) => state.auth.userData);
  const { stateAddress } = useSelector((state) => state.addressReduce);
  const review = useSelector((state) => state.reviewReduce.review);
  const address = useSelector((state) => state.addressReduce.stateAddress);
  const customerId = userData.login.user.databaseId;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(stateAddress);
  }, [stateAddress]);

  useEffect(() => {
    const wait = navigation.addListener("focus", () => {
      getUserAddress();
      setLoading(true);
      axios
        .get(
          `http://192.168.1.18/wordpress/wp-json/wc/v2/orders?customer_id=${customerId}`
        )
        .then(function (response) {
          const data_Order = response.data;
          setData(data_Order);
          setLoading(false);
          setOrder(data_Order).then(() => {
            saveDataOder(data_Order);
          });
        })
        .catch(function (error) {
          setLoading(false);
          console.log("error", error);
        });
    });
    return wait;
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );

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

  const onLogoutAlert = () => {
    Alert.alert(
      "Logout",
      "Are you sure, you want to logout from this device",
      [{ text: "Yes", onPress: logout }, { text: "No" }],
      { cancelable: true }
    );
  };
  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      actions.logout();
    }, 2000);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.body}>
          <View className="items-center h-16 justify-center">
            <Text className="text-lg font-bold">Profile</Text>
          </View>
          {/* {/ avatar + email + name /} */}
          <View className="flex-row pl-5 pr-5 items-center">
            <View>
              <Image
                source={require("../../../../assets/img/chatgpt.png")}
                style={styles.avatar}
              />
            </View>
            <View className="ml-5">
              <Text className="text-lg font-bold">
                {userData.login.user.name}
              </Text>
              <Text className="text-gray-400">{userData.login.user.email}</Text>
            </View>
          </View>
          {/* boxitem order*/}
          <View className="ml-5 mr-5 h-full ">
            <TouchableOpacity
              className="flex-row justify-between items-center pl-4 pr-4"
              style={styles.boxItem}
              onPress={() => navigation.navigate("Order")}
            >
              <View>
                <Text className="text-base font-bold">My orders</Text>
                <Text className="text-xs text-gray-400">
                  Already have {data.length} orders
                </Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
            {/* {/ boxitem shipping /} */}
            <TouchableOpacity
              className="flex-row justify-between items-center pl-4 pr-4"
              style={styles.boxItem}
              onPress={() => {
                navigation.navigate("ShippingAdd");
              }}
            >
              <View>
                <Text className="text-base font-bold">Shipping Addresses</Text>
                <Text className="text-xs text-gray-400">
                  {address.length} Addresses
                </Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
            {/* {/ boxitem payment /} */}
            <TouchableOpacity
              className="flex-row justify-between items-center pl-4 pr-4"
              style={styles.boxItem}
            >
              <View>
                <Text className="text-base font-bold">Payment Method</Text>
                <Text className="text-xs text-gray-400">You have 2 cards</Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
            {/* {/ boxitem reviews /} */}
            <TouchableOpacity
              className="flex-row justify-between items-center pl-4 pr-4"
              style={styles.boxItem}
              onPress={() => {
                navigation.navigate("MyReview");
              }}
            >
              <View>
                <Text className="text-base font-bold">My reviews</Text>
                <Text className="text-xs text-gray-400">
                  Reviews for {review.length} items
                </Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
            {/* {/ boxitem setting /} */}
            <TouchableOpacity
              className="flex-row justify-between items-center pl-4 pr-4"
              style={styles.boxItem}
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              <View>
                <Text className="text-base font-bold">Setting</Text>
                <Text className="text-xs text-gray-400">
                  Notification, Password, FAQ, Contact
                </Text>
              </View>
              <View>
                <AntDesign name="right" size={20} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View className="items-center">
          <Button title="Log Out" onPress={onLogoutAlert} />
        </View>
      </SafeAreaView>
      {/* {/ {isLoading ? <LogoutLoading /> : null} /} */}
    </>
  );
};

export default Account;

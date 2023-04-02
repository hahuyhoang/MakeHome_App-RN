import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeItem,
} from "../../redux/reducers/cardReducers";
import { cartTotalPriceSelector } from "../../redux/reducers/cartTotalReducers";
import { MotiView } from "moti";

const Cart = () => {
  const navigation = useNavigation();
  const dataCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  const tax = 2;
  const carts = [];
  const [cart, setCart] = useState([]);
  const total = (totalPrice + tax).toFixed(2);
  useEffect(() => {
    dataCart.forEach((element) => {
      carts.push({
        product_id: element.databaseId,
        quantity: element.quantity,
      });
      let myArray = {
        carts,
      };
      setCart(myArray);
    });
  }, [dataCart]);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        {/* {/ main /} */}
        <View className="flex-1">
          {/* {/ header /} */}
          <View className="items-center ml-3 mr-3 h-16 justify-center  flex-row">
            <TouchableOpacity
              className="absolute left-0 pr-3 pt-3 pb-3"
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold ">My cart</Text>
          </View>
          {/* {/ body /} */}
          {dataCart.length == 0 ? (
            <View className="justify-center items-center flex-1">
              <View className="w-full h-full">
                <Image
                  resizeMode="contain"
                  className="w-full h-full"
                  source={{
                    uri: "https://588773510-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-Lz7UFvjOB-fzWNJ7GjT%2F-M6qLK-SWrk1gacEZduR%2F-M6qQ58_Pzi3bE2enWer%2Fimage.png?alt=media&token=d5d18a42-bb5b-426e-83cf-a703508b3eb8",
                  }}
                />
              </View>
            </View>
          ) : (
            <View className="flex-1 ml-3 mr-3">
              <ScrollView
                style={styles.flex1}
                showsVerticalScrollIndicator={false}
              >
                {dataCart.map((item, index) => {
                  return (
                    <MotiView
                      from={{ opacity: 0, translateY: 50 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ delay: index * 200 }}
                      style={styles.card}
                      key={item.id}
                      className="flex-row mb-3 pb-3"
                    >
                      <TouchableOpacity
                        className="flex-1 flex-row"
                        onPress={() => {
                          navigation.navigate("Detail", {
                            itemID: item.id,
                          });
                        }}
                      >
                        {/* {/ img /} */}
                        <View className="w-24 h-24">
                          <Image
                            style={{
                              width: "100%",
                              height: "100%",
                              resizeMode: "stretch",
                              borderRadius: 6,
                            }}
                            source={{
                              uri: item.image.mediaItemUrl.replace(
                                "localhost",
                                "192.168.1.18"
                              ),
                            }}
                          />
                        </View>
                        {/* {/ info product & price /} */}
                        <View className="pl-5 " style={{ width: "60%" }}>
                          <View className="h-16 w-11/12">
                            <Text className="text-sm">{item.name}</Text>
                            <Text className="font-bold text-sm">
                              {item.price}
                            </Text>
                          </View>
                          {/* {/ tang giam san pham /} */}
                          <View className=" flex-row items-center">
                            <TouchableOpacity
                              onPress={() => {
                                dispatch(increment(item.id));
                              }}
                              className="w-7 h-7 justify-center items-center rounded-lg bg-gray-200"
                            >
                              <AntDesign name="plus" size={20} color="black" />
                            </TouchableOpacity>
                            <Text className="text-base pl-3 pr-3">
                              {item.quantity}
                            </Text>
                            <TouchableOpacity
                              onPress={() => {
                                if (item.quantity === 1) {
                                  dispatch(removeItem(item.id));
                                  return;
                                } else {
                                  dispatch(decrement(item.id));
                                }
                              }}
                              className="w-7 h-7 justify-center items-center rounded-lg bg-gray-200"
                            >
                              <AntDesign name="minus" size={20} color="black" />
                            </TouchableOpacity>
                          </View>
                        </View>
                        {/* {/ button right /} */}
                        <View
                          className=" items-center "
                          style={{ width: "20%" }}
                        >
                          <TouchableOpacity
                            className="right-2"
                            onPress={() => {
                              dispatch(removeItem(item.id));
                            }}
                          >
                            <AntDesign
                              name="closecircleo"
                              size={22}
                              color="black"
                            />
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    </MotiView>
                  );
                })}
              </ScrollView>
              {/* {/ promo code /} */}
              <View className="">
                <View className="flex-row justify-center mt-2 items-center">
                  <TextInput
                    style={styles.promoCode}
                    placeholder="Enter your promo code..."
                  />
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: 50,
                      backgroundColor: "#000",
                      width: 50,
                      borderRadius: 10,
                      position: "absolute",
                      right: 0,
                    }}
                    onPress={() => console.log("enter promo code")}
                  >
                    <AntDesign name="right" size={20} color="white" />
                  </TouchableOpacity>
                </View>
                <View className="pt-3 pb-3">
                  <View className="flex-row justify-between">
                    <Text className="text-lg font-bold">Total: </Text>
                    <Text className="text-lg">${totalPrice.toFixed(2)}</Text>
                  </View>
                </View>
              </View>
              {/* {/ btn checkout /} */}
              <View className="justify-center items-center ">
                <TouchableOpacity
                  style={{
                    width: "100%",
                    height: 60,
                    backgroundColor: "#000",
                    marginBottom: 10,
                    borderRadius: 12,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() =>
                    navigation.navigate("Checkout", {
                      paramKey: cart,
                    })
                  }
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontFamily: "Poppins-Regular",
                    }}
                  >
                    Check out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Cart;

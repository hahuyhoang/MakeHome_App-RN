import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./style";
import Button from "../../../components/button";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DoneCheckout = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 0.97}}>
        <View className="items-center justify-center mt-5">
          <Text className="text-xl font-bold">SUCCESS!</Text>
          <Image
            className="w-40 h-40"
            source={require("../../../assets/img/icons8-coffee-table-80.png")}
          />
        </View>
        <View className=" items-center justify-center">
          <Text className="text-base text-gray-500">
            Your order will be delivered soon.
          </Text>
          <Text className="text-base text-gray-500">
            Thank you for choosing our app!
          </Text>
        </View>
      </View>
      <View
        
        className="items-center justify-center"
      >
        <View className="items-center w-full">
          <Button
            title={"Track your orders"}
            textStyle={{
              marginTop: 20,
              color: "#fff",
              fontSize: 20,
              fontFamily: "Poppins-Regular",
            }}
            onPress={() => navigation.navigate("Order")}
          />
        </View>
        <View className="items-center w-full">
          <Button
            title={"Back to home"}
            textStyle={{
              marginTop: 20,
              color: "#fff",
              fontSize: 20,
              fontFamily: "Poppins-Regular",
            }}
            onPress={() => navigation.navigate("MyTabs")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoneCheckout;

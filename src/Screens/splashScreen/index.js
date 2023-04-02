import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import React from "react";
import Button from "../../../components/button";
import styles from "./style";
import { MotiView } from "moti";

const Getstarted = ({ navigation }) => {
  return (
    <View className="">
      <ImageBackground
        className="w-full h-full"
        source={require("../../../assets/img/boarding.png")}
      >
        <View className="flex-1 ml-6 mr-6 mb-6 mt-14">
          <View className="flex-1">
            <MotiView
              from={{ opacity: 0, translateX: 150 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: -300 }}
              className="mb-9"
            >
              <Text style={styles.regula} className="text-3xl">
                MAKE YOUR
              </Text>
              <Text style={styles.regula} className="text-3xl font-bold ">
                HOME BEAUTIFUL
              </Text>
            </MotiView>
            <MotiView
              from={{ opacity: 0, translateX: -150 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: -300 }}
            >
              <Text className="text-lg text-gray-500">
                The best simple place where you discover most wonderful
                furnitures and make your home beautiful
              </Text>
            </MotiView>
          </View>
          <MotiView
            from={{ opacity: 0, translateX: -150 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: -300 }}
            className="items-center"
          >
            <Button
              title={"Get Started"}
              textStyle={{
                marginTop: 20,
                color: "#fff",
                fontSize: 20,
              }}
              onPress={() => navigation.navigate("Login")}
            />
          </MotiView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Getstarted;

import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./style";

const Noti = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View className="items-center h-16 justify-center">
          <Text className="text-lg font-semibold">Notification</Text>
        </View>
        <View className="flex-row border-b pb-3 border-gray-100">
          <View>
            <Image
              source={require("../../../../assets/img/spaceX.jpg")}
              className=" w-16 h-16 rounded-lg"
            />
          </View>
          <View style={{ width: "80%" }} className=" ml-4 mr-6 ">
            <View>
              <Text style={styles.textOrder}>
                Your ordeer #123456789 has been shipped successfully
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text style={styles.textNoti}>New</Text>
            </View>
          </View>
        </View>
        <View className="flex-row border-b pb-3 mt-4 border-gray-100">
          <View>
            <Image
              source={require("../../../../assets/img/spaceX.jpg")}
              className=" w-16 h-16 rounded-lg"
            />
          </View>
          <View style={{ width: "80%" }} className=" ml-4 mr-6 ">
            <View>
              <Text style={styles.textOrder}>
                Your ordeer #123456789 has been shipped successfully
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>
              <Text style={styles.textHot}>Hot</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Noti;

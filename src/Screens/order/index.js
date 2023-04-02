import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import MainStack from "./navigator/stack";

const Order = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* main */}
      <View className="ml-3 mr-3 h-16 justify-center">
        {/* header */}
        <View
          className="items-center justify-center  flex-row"
          style={styles.flex01}
        >
          <TouchableOpacity
            className="absolute left-0 pr-3 pt-3 pb-3"
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold ">My orders</Text>
        </View>
      </View>
      <View className="flex-1 mt-3">
        <MainStack />
      </View>
    </SafeAreaView>
  );
};

export default Order;

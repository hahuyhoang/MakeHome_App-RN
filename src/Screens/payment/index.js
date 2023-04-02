import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import styles from "./style";
import CheckBox from "expo-checkbox";

const Payment = () => {
  const [checkboxState, setCheckboxState] = useState(true);
  const [checked, setChecked] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* main */}
      <View className="ml-3 mr-3">
        {/* header */}
        <View className="items-center justify-center  flex-row">
          <TouchableOpacity
            className="absolute left-0 pr-3 pt-3 pb-3"
            // onPress={() => navigation.goBack()}
          >
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold ">Payment method</Text>
        </View>
      </View>
      <View className="ml-4 mr-4 mt-6">
        <View style={styles.boxAdd}>
          
        </View>
        <View className="flex-row items-center mt-3">
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
            color={toggleCheckBox ? "#000" : undefined}
            className="mr-3"
          />
          <Text style={styles.fontText}>Use as default payment method</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.absolute}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
      {/* done shipping add */}
    </SafeAreaView>
  );
};

export default Payment;

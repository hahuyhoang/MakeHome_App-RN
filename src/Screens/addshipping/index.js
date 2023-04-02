import {
  View,
  Text,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import Button from "../../../components/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveUserAddress } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";

const AddShipping = ({ navigation }) => {
  const { stateAddress, addressId } = useSelector(
    (state) => state.addressReduce
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    first_name: "",
    last_name: "",
    Phone: "",
    address: "",
  });
  const { email, first_name, last_name, Phone, address } = state;
  const updateState = (data) =>
    setState(() => ({
      ...state,
      ...data,
    }));
  const setUserAddress = () => {
    if (
      state.email == "" &&
      state.first_name == "" &&
      state.last_name == "" &&
      state.Phone == ""
    ) {
      Alert.alert("Warning!", "Please write your address .");
    } else {
      try {
        var user_address = {
          id: addressId,
          data: state,
        };
        const index = stateAddress.findIndex((item) => item.id === addressId);
        let newAddress = [];
        if (index > -1) {
          newAddress = [...stateAddress];
          newAddress[index] = user_address;
        } else {
          newAddress = [...stateAddress, user_address];
        }
        AsyncStorage.setItem("Address", JSON.stringify(newAddress))
          .then(() => {
            dispatch(saveUserAddress(newAddress));
            Alert.alert("Success!", "Address saved successfully.");
            navigation.goBack();
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView className="flex-1">
          <View className="flex-row h-12 mt-1 items-center justify-center">
            <TouchableOpacity
              className="absolute left-5 "
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="left" size={24} color="black" />
            </TouchableOpacity>
            <View>
              <Text className="text-lg font-bold">Add shipping address</Text>
            </View>
          </View>
          <View style={styles.bodyInput} className="pl-5 pr-5">
            {/*input label */}
            <View className="">
              <View className="pb-3 pt-5">
                <TextInput
                  style={styles.input}
                  onChangeText={(email) => updateState({ email })}
                  value={email}
                  mode="outlined"
                  label="Email"
                />
              </View>
              <View className="pb-3">
                <TextInput
                  style={styles.input}
                  value={first_name}
                  onChangeText={(first_name) => updateState({ first_name })}
                  mode="outlined"
                  label="First Name"
                />
              </View>
              <View className="pb-3">
                <TextInput
                  style={styles.input}
                  value={last_name}
                  onChangeText={(last_name) => updateState({ last_name })}
                  mode="outlined"
                  label="Last Name"
                />
              </View>
              <View className="pb-3">
                <TextInput
                  style={styles.input}
                  value={Phone}
                  onChangeText={(Phone) => updateState({ Phone })}
                  mode="outlined"
                  label="Phone Number"
                />
              </View>
              <View className="pb-3">
                <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={(address) => updateState({ address })}
                  mode="outlined"
                  label="Address"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="items-center">
          <Button
            title={"Save address"}
            textStyle={{
              marginTop: 20,
              color: "#fff",
              fontSize: 20,
              fontFamily: "Poppins-Regular",
            }}
            onPress={setUserAddress}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddShipping;

import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";

import { useMutation } from "@apollo/react-hooks";
import { REGISTER_USER } from "../../graphQL/graphql";
import { showSuccess, showError } from "../../utils/helperFunction";
import { showMessage } from "react-native-flash-message";
import validator from "../../../components/validate/Validations";
import Button from "../../../components/button";
import Input from "../../../components/textInput";

const SignUp = ({ navigation }) => {
  const [registerUser, { error, data }] = useMutation(REGISTER_USER);
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isLoading: false,
  });
  const { email, password, username, confirmPassword, isLoading } = state;
  const updateState = (data) =>
    setState(() => ({
      ...state,
      ...data,
    }));
  const isValidData = () => {
    const error = validator({
      username,
      email,
      password,
      confirmPassword,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };
  const handleRegister = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      if (confirmPassword !== undefined && password !== confirmPassword) {
        showError("entered wrong password");
      } else {
        updateState({ isLoading: true });
        try {
          const { data } = await registerUser({
            variables: {
              email,
              password,
              username,
            },
          });
          updateState({ isLoading: false });
          navigation.navigate("Login");
          showSuccess("Account registration successful");
        } catch (e) {
          showError("Registered account");
          console.log("register that bai ", e);
          updateState({ isLoading: false });
        }
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.loginBox} className="ml-5 mr-5 ">
              <View className="justify-between flex-row">
                <View className="border-b border-gray-500 w-32 h-8" />
                <View className="border rounded-full w-16 h-16 items-center justify-center">
                  <Image
                    className="w-12 h-12"
                    source={require("../../../assets/img/lamp.png")}
                  />
                </View>
                <View className="border-b border-gray-500 w-32 h-8 " />
              </View>
              {/* text welcomeback */}
              <View className="items-center pt-4 pb-4 ">
                <Text style={styles.textWelcome}>WELCOME</Text>
              </View>
              {/* top */}
              {/* textinput */}
              <View
                className="w-full justify-center items-center "
                style={{ height: "75%" }}
              >
                <View style={{ width: "100%", backgroundColor: "#fff" }}>
                  {/* input label */}
                  <View className="items-center pt-4">
                    <View style={styles.emailBox}>
                      <Input
                        style={styles.email}
                        mode="outlined"
                        label="Name/Username"
                        onChangeText={(username) => updateState({ username })}
                        autoCorrect={false}
                      />
                    </View>
                    <View style={styles.emailBox}>
                      <Input
                        style={styles.email}
                        label="Email"
                        onChangeText={(email) => updateState({ email })}
                        keyboardType="email-address"
                      />
                    </View>
                    <View style={styles.emailBox}>
                      <Input
                        style={styles.email}
                        secureTextEntry={true}
                        label="Password"
                        onChangeText={(password) => updateState({ password })}
                      />
                    </View>
                    <View style={styles.emailBox}>
                      <Input
                        style={styles.email}
                        secureTextEntry={true}
                        label="Password Confirm"
                        onChangeText={(confirmPassword) =>
                          updateState({ confirmPassword })
                        }
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                  </View>
                  {/* button */}
                  <View className="items-center w-full pt-5">
                    <Button
                      textColor="#fff"
                      buttonColor="#000"
                      labelStyle={{
                        fontSize: 18,
                        fontFamily: "Poppins-Regular",
                      }}
                      onPress={handleRegister}
                      title={"Sign up"}
                    ></Button>
                  </View>
                  <View className="items-center mb-4">
                    <View className="flex-row items-center">
                      <Text className="text-base text-gray-400 mr-1">
                        Already have account?
                      </Text>
                      <TouchableOpacity
                        labelStyle={{
                          fontSize: 18,
                          fontFamily: "Poppins-Semi",
                          color: "#000",
                          marginTop: 14,
                        }}
                        onPress={() => navigation.navigate("Login")}
                        className=""
                      >
                        <Text classname="font-bold text-base">Sign in</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

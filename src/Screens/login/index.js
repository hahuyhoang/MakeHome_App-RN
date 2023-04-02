import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { TextInput } from "react-native-paper";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../../graphQL/graphql";
import { setUserData } from "../../Async";
import { saveUserData } from "../../redux/actions/auth";
import Button from "../../../components/button";
import { showError } from "../../utils/helperFunction";
import validator from "../../../components/validate/Validations";
import HomeLoading from "./../../../components/loading/homeLoading";
import Input from "../../../components/textInput";

const Login = ({ navigation }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    isSecure: true,
  });
  const { username, password, isSecure } = state;
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updateState = (data) =>
    setState(() => ({
      ...state,
      ...data,
    }));
  const [loginMutation] = useMutation(LOGIN_MUTATION, {
    onError: (error) => {
      showError("Incorrect account or password");
      setIsLoading(false);
      console.log(error);
    },
    onCompleted: (data) => {
      setUserData(data).then(() => {
        saveUserData(data);
      });
      setIsLoading(false);
    },
  });

  const handleLogin = () => {
    const checkValid = isValidData();
    setIsLoading(false);
    setTimeout(() => {
      if (checkValid) {
        setIsLoading(true);
        try {
          loginMutation({
            variables: {
              username: username,
              password: password,
            },
          });
        } catch (error) {
          console.log("adad", error);
          setIsLoading(false);
        }
      }
    }, 100);
  };
  const isValidData = () => {
    const error = validator({
      username,
      password,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.loginBox}>
          {/* top */}
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
          <View className="items-center pt-5">
            <Text style={styles.textHello}>Hello!</Text>
            <Text style={styles.textWelcome}>WELCOME BACK</Text>
          </View>
          <View className=" items-center pt-6">
            {/* textinput */}
            <View className="justify-center" style={styles.bodyInput}>
              {/*input label */}
              <View className="items-center mt-5">
                <View style={styles.emailBox}>
                  <Input
                    style={styles.email}
                    value={username}
                    onChangeText={(username) => updateState({ username })}
                    label="User Name"
                  />
                </View>
                <View style={styles.emailBox}>
                  <Input
                    style={styles.email}
                    secureTextEntry={true}
                    label="Password"
                    value={password}
                    onChangeText={(password) => updateState({ password })}
                  />
                </View>
              </View>
              {/* fotgot text */}
              <TouchableOpacity
                className="items-center pt-3"
                onPress={() => navigation.navigate("Forgot")}
              >
                <Text style={styles.textForgot}>Forgot Password</Text>
              </TouchableOpacity>
              {/* button */}
              <View className="mt-4 items-center">
                {isLoading ? (
                  <ActivityIndicator
                    style={{
                      width: "92%",
                      height: 60,
                      backgroundColor: "#000",
                      marginBottom: 20,
                      borderRadius: 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    color="#fff"
                  />
                ) : (
                  <Button
                    title={"Login"}
                    textStyle={{
                      color: "#000",
                      fontSize: 20,
                      fontFamily: "Poppins-Regular",
                    }}
                    onPress={handleLogin}
                  ></Button>
                )}
              </View>
              <View className="items-center">
                <TouchableOpacity
                  style={{
                    width: "92%",
                    height: 40,
                    marginBottom: 20,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text className="text-black text-lg">Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

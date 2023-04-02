import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Button, TextInput } from "react-native-paper";
import { FORGOT_PASSWORD } from "../../graphQL/graphql";
import { useMutation } from "@apollo/react-hooks";
import { showSuccess } from "../../utils/helperFunction";

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [forgotPassword, { loading, error, data }] =
    useMutation(FORGOT_PASSWORD);
  const handleForgotPassword = async () => {
    await forgotPassword({ variables: { email } });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        {/* top */}
        <View className="justify-between flex-row">
          <View className="border-b border-gray-500 w-32 h-8" />
          <View className="border rounded-full w-16 h-16 items-center justify-center">
            <Text>Ecomere</Text>
          </View>
          <View className="border-b border-gray-500 w-32 h-8 " />
        </View>
        {/* text welcomeback */}
        <View className="items-center pt-6">
          <Text style={styles.textHello}>Hello!</Text>
          <Text style={styles.textWelcome}>WELCOME BACK</Text>
        </View>
        <View className=" items-center pt-3">
          {/* textinput */}
          <View style={styles.bodyInput}>
            {/* input label */}
            <View className="items-center">
              <View className="pb-5 pt-5">
                <TextInput
                  style={styles.email}
                  onChangeText={(value) => setEmail(value)}
                  mode="outlined"
                  label="Email"
                />
              </View>
            </View>

            {/* button */}
            <View className="items-center pt-4">
              <Button
                style={styles.button}
                textColor="#fff"
                buttonColor="#000"
                labelStyle={{ fontSize: 18, fontFamily: "Poppins-Regular" }}
                onPress={handleForgotPassword}
              >
                Send Email
              </Button>
            </View>
            <View className="items-center pt-4">
              <View className="items-center">
                <Text className="text-base text-gray-400">
                  Already have account?{" "}
                </Text>
                <Button
                  labelStyle={{
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#000",
                  }}
                  onPress={() => navigation.navigate("Signup")}
                >
                  Sign up
                </Button>
                <Text className="text-base">or</Text>
                <Button
                  labelStyle={{
                    fontSize: 18,
                    fontFamily: "Poppins-Regular",
                    color: "#000",
                  }}
                  onPress={() => navigation.navigate("Login")}
                >
                  Sign in
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forgot;

import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import Button from "../../../components/button";
import { showError } from "../../utils/helperFunction";

const Setting = ({ navigation }) => {
  const userData = useSelector((state) => state.auth.userData);
  const [isSwitchSaleOn, setIsSwitchSaleOn] = React.useState(false);
  const onToggleSwitchSale = () => setIsSwitchSaleOn(!isSwitchSaleOn);
  const [isSwitchArrivalOn, setIsSwitchArrivalOn] = React.useState(false);
  const onToggleSwitchArrival = () => setIsSwitchArrivalOn(!isSwitchArrivalOn);
  const [isSwitchDelyOn, setIsSwitchDelyOn] = React.useState(false);
  const onToggleSwitchDely = () => setIsSwitchDelyOn(!isSwitchDelyOn);
  const [ischeck, setIscheck] = useState(false);
  const [ischeckEmail, setIscheckEmail] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");

  const update_user = {
    user_id: userData.login.user.databaseId,
    first_name: first_name,
    last_name: last_name,
    email: email,
  };
  const handleSubmit = () => {
    if (
      (update_user !== null, first_name !== "", last_name !== "", email !== "")
    ) {
      axios({
        url: `https://192.168.1.18/wordpress/wp-json/wp/v2/update_user`,
        method: "POST",
        data: update_user,
      })
        .then(function (response) {
          console.log("send", response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      showError("Enter input");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {/ header /} */}
      <View className="flex-row items-center h-16 justify-center">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute left-4 pr-3"
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text className="text-lg font-bold">Setting</Text>
        </View>
      </View>
      <ScrollView className="mb-4">
        {/* {/ body /} */}
        <View className="ml-5 mr-5">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-gray-400">
                Personal information
              </Text>
              <TouchableOpacity
                className=" items-center justify-center h-7 w-7"
                onPress={() => setIscheck(!ischeck)}
              >
                <Image
                  resizeMode="contain"
                  className="h-full"
                  source={require("../../../assets/img/pen.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              {ischeck ? (
                <View>
                  <View style={styles.box}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your first name..."
                      onChangeText={(value) => setFirst_name(value)}
                    />
                  </View>
                  <View style={styles.box}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your last name..."
                      onChangeText={(value) => setLast_name(value)}
                    />
                  </View>
                </View>
              ) : (
                <View>
                  <View style={styles.box}>
                    <Text style={styles.title}>First Name</Text>
                    <View style={styles.info}>
                      <Text className="text-sm text-gray-400">
                        {userData.login.user.firstName}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.title}>Last Name</Text>
                    <View style={styles.info}>
                      <Text className="text-sm text-gray-400">
                        {userData.login.user.lastName}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        {/* {/ Pass /} */}
        <View className="ml-5 mr-5 mt-5">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-gray-400">Email</Text>
              <TouchableOpacity
                className=" items-center justify-center h-7 w-7"
                onPress={() => setIscheckEmail(!ischeckEmail)}
              >
                <Image
                  resizeMode="contain"
                  className="h-full"
                  source={require("../../../assets/img/pen.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              {ischeckEmail ? (
                <View style={styles.box}>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email..."
                    onChangeText={(value) => setEmail(value)}
                  />
                </View>
              ) : (
                <View style={styles.box}>
                  <Text style={styles.title}>Email</Text>
                  <View style={styles.info}>
                    <Text className="text-sm text-gray-400">
                      {userData.login.user.email}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>
        {/* {/ Notification /} */}
        <View className="ml-5 mr-5 mt-5">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-gray-400">Notification</Text>
            </View>
            <View>
              <View
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base ml-3 font-normal">Sales</Text>
                <Switch
                  className="mr-3"
                  color={"green"}
                  value={isSwitchSaleOn}
                  onValueChange={onToggleSwitchSale}
                />
              </View>
            </View>
            <View>
              <View
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base ml-3 font-normal">New arrivals</Text>
                <Switch
                  className="mr-3"
                  color={"green"}
                  value={isSwitchArrivalOn}
                  onValueChange={onToggleSwitchArrival}
                />
              </View>
            </View>
            <View>
              <View
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base ml-3 font-normal">
                  Delivery status changes
                </Text>
                <Switch
                  className="mr-3"
                  value={isSwitchDelyOn}
                  color={"green"}
                  onValueChange={onToggleSwitchDely}
                />
              </View>
            </View>
          </View>
        </View>
        {/* {/ help center /} */}
        <View className="m-5 ">
          <View>
            <View className="flex-row items-center justify-between">
              <Text className="text-base text-gray-400">Help center</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base font-bold ml-3">FAQ</Text>
                <View className="mr-3">
                  <AntDesign name="right" size={20} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base font-bold ml-3">Contact Us</Text>
                <View className="mr-3">
                  <AntDesign name="right" size={20} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.boxNoti}
                className=" flex-row justify-between items-center"
              >
                <Text className="text-base font-bold ml-3">
                  Privacy & Terms
                </Text>
                <View className="mr-3">
                  <AntDesign name="right" size={20} color="black" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="items-center w-full">
        <Button title="Save Setting" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

export default Setting;

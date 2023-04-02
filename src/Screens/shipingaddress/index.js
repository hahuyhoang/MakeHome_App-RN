import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import {
  saveCheckboxId,
  saveUserAddress,
  saveUserAddressId,
} from "../../redux/actions/auth";

const ShippingAdd = ({ navigation, props }) => {
  const [multiple, setMultiple] = useState(false);
  const { stateAddress } = useSelector((state) => state.addressReduce);
  const [check, setCheck] = useState([]);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserAddress();
    const getCheckedValue = async () => {
      const storedValue = await AsyncStorage.getItem("isChecked");
      if (storedValue !== null) {
        setCheck(JSON.parse(storedValue));
      }
    };
    getCheckedValue();
  }, []);

  useEffect(() => {
    setData(stateAddress);
  }, [stateAddress]);

  const getUserAddress = () => {
    AsyncStorage.getItem("Address")
      .then((address) => {
        const parsedAddress = JSON.parse(address);
        if (parsedAddress && typeof parsedAddress === "object") {
          dispatch(saveUserAddress(parsedAddress));
        }
      })
      .catch((err) => console.log(err));
  };

  const onChangeValue = (item) => {
    const index = check.findIndex((i) => i === i.id);
    var selected = [...check];
    if (index !== -1) {
      selected.splice(index, 1);
    } else {
      multiple ? selected.push(item) : (selected = [item.id]);
    }
    setCheck(selected);
    saveCheckboxId(selected);
    AsyncStorage.setItem("isChecked", JSON.stringify(selected));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* {/ main /} */}
      <View className="flex-1">
        <View className="ml-3 mr-3 h-16 justify-center ">
          {/* {/ header /} */}
          <View className="items-center justify-center  flex-row">
            <TouchableOpacity
              className="absolute left-0 pr-3 pt-3 pb-3"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={20} color="black" />
            </TouchableOpacity>
            <Text className="text-xl font-bold ">Shipping Address</Text>
          </View>
        </View>
        <ScrollView className=" flex-1 " showsVerticalScrollIndicator={false}>
          <View className=" flex-1 mb-5">
            {data.map((item, index) => {
              return (
                <View className="ml-4 mr-4 mt-6" key={index}>
                  <View className="flex-row items-center">
                    <TouchableOpacity
                      className="flex-row"
                      onPress={() => {
                        onChangeValue(item);
                      }}
                    >
                      <View
                        style={{
                          width: 20,
                          height: 20,
                          justifyContent: "center",
                          alignItems: "center",
                          borderWidth: 1,
                          backgroundColor:
                            check.findIndex((i) => i === item.id) !== -1
                              ? "#000"
                              : null,
                        }}
                      >
                        {check.findIndex((i) => i === item.id) !== -1 ? (
                          <Entypo name="check" size={17} color={"white"} />
                        ) : null}
                      </View>
                      <Text style={styles.fontText}>
                        Use as the shipping address
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.boxAdd}>
                    <View className="border-b ml-3 mr-3 pt-2 pb-2 border-b-gray-400">
                      <Text className="text-base font-bold">
                        {item.data.first_name + item.data.last_name}
                      </Text>
                    </View>
                    <View className=" m-3">
                      <Text className="text-gray-400 text-sm">
                        {"sdt : " + item.data.Phone + ", " +
                          "email : " + 
                          item.data.email + ", " +
                          "address : " +
                          item.data.address}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.absolute}
          onPress={() => {
            dispatch(saveUserAddressId(stateAddress.length + 1));
            navigation.navigate("AddShipping");
          }}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
        {/* {/ done shipping add /} */}
      </View>
    </SafeAreaView>
  );
};

export default ShippingAdd;

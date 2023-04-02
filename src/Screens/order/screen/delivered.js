import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import OrderEmpty from "../../../../components/loading/orderempty";
import { setOrder } from "../../../Async";
import { saveDataOder } from "../../../redux/actions/auth";

const Delivered = ({}) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const customerId = userData.login.user.databaseId;
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://192.168.1.18/wordpress/wp-json/wc/v2/orders?customer_id=${customerId}`
      )
      .then(function (response) {
        const data_Order = response.data;
        setData(data_Order);
        setLoading(false);
        setOrder(data_Order).then(() => {
          saveDataOder(data_Order);
        });
      })
      .catch(function (error) {
        setLoading(false);
        console.log("error", error);
      });
  }, []);

  if (loading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );

  return (
    <SafeAreaView style={styles.container} className="bg-white flex-1">
      <ScrollView className="flex-1">
        {data == "" ? (
          <View className="justify-center items-center ">
            <OrderEmpty className="w-full h-80" />
            <Text className="w-full h-full"></Text>
          </View>
        ) : (
          <View>
            {data.map((item, index) => {
              return (
                <View
                  style={styles.boxAdd}
                  className="ml-4 mb-4 mr-4"
                  key={index}
                >
                  <View className="border-b ml-3 mr-3 pt-2 pb-2 border-b-gray-400 flex-row items-center justify-between">
                    <Text className="text-base font-bold">
                      Order ID# {Math.floor(Math.random() * 1000)}
                    </Text>
                    <Text>{item.date_created.date}</Text>
                  </View>
                  <View className=" ml-3 mr-3 pt-3 pb-3 flex-row items-center justify-between">
                    <Text style={styles.fontRegular} className="ml-auto">
                      Total Amount: ${item.total_bill}
                    </Text>
                  </View>
                  <View className=" flex-row items-center justify-between">
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("DetailOrder", {
                            paramKey: item,
                          });
                        }}
                        className="w-24 h-9 items-center justify-center rounded-tr-lg rounded-br-lg bg-black"
                      >
                        <Text className="text-white" style={styles.fontRegular}>
                          Detail
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View className="mr-3">
                      {item.status == "pending" ? (
                        <Text
                          className=" text-yellow-400"
                          style={styles.fontRegular}
                        >
                          {item.status}
                        </Text>
                      ) : null}
                      {item.status == "completed" ? (
                        <View className="mr-3 flex-row items-center">
                          <MaterialIcons
                            name="access-time"
                            size={20}
                            color="black"
                          />
                          <Text
                            className="text-green-600 ml-1"
                            style={styles.fontRegular}
                          >
                            {item.status}
                          </Text>
                        </View>
                      ) : null}
                      {item.status == "cancelled" ? (
                        <Text
                          className="text-red-600"
                          style={styles.fontRegular}
                        >
                          {item.status}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Delivered;

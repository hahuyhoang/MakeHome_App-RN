import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Processing = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const order = useSelector((state) => state.orderReduce.prdOrder);
  const [newData, setNewData] = useState([]);
  const arry = [];

  useEffect(() => {
    if (order !== "") {
      order.map((item) => {
        if (item.status == "completed") {
          arry.push(item);
          setNewData(arry);
        }
      });
    }
  }, [order]);

  return (
    <SafeAreaView style={styles.container} className="bg-white flex-1">
      <ScrollView className="flex-1">
        {newData.map((item, index) => {
          return (
            <View className="ml-4 mr-4" style={styles.boxAdd} key={index}>
              <View className="border-b ml-3 mr-3 pt-2 pb-2 border-b-gray-400 flex-row items-center justify-between">
                <Text className="text-base font-bold">
                  Order ID#{Math.floor(Math.random() * 1000)}
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
                <View className="mr-3 flex-row items-center">
                  <MaterialIcons name="access-time" size={20} color="black" />
                  <Text
                    className="text-green-600 ml-1"
                    style={styles.fontRegular}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Processing;

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import DataProduct from "../../../config/Recipes";
import { useNavigation } from "@react-navigation/native";

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} horizontal>
      {DataProduct.map((item, index) => {
        return (
          <View style={styles.card} key={index}>
            <TouchableOpacity
              style={styles.productCard}
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "stretch",
                  borderRadius: 10,
                }}
                source={item.image}
              />
              <TouchableOpacity
                className="absolute bottom-2 bg-slate-500 right-2 p-2 rounded"
                onPress={() => console.log("add to card")}
              >
                <Feather name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-base text-gray-500 mt-2">{item.name}</Text>
            </TouchableOpacity>
            <Text className="text-base font-bold">$ {item.price}.00</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default ProductCard;

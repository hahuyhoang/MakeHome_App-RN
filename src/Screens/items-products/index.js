import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./style";
import DataProduct from "../../../config/Recipes";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { PRODUCT_QUERY } from "../../graphQL/graphql";
import { useQuery } from "@apollo/react-hooks";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cardReducers";
import { showMessage } from "react-native-flash-message";

const ItemProducts = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  let { loading, error, data } = useQuery(PRODUCT_QUERY);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setProducts(data.products.edges);
    }
  }, [data]);
  if (loading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );
  return (
    <View className="flex-1 ">
      <View style={styles.cardITEM}>
        {products.map((items, index) => {
          const item = items.node;
          return (
            <View style={styles.card} key={index}>
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  navigation.navigate("Detail", { itemID: items.node.id });
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                    borderRadius: 10,
                  }}
                  source={{
                    uri: item.image.mediaItemUrl.replace(
                      "localhost",
                      "192.168.1.18"
                    ),
                  }}
                />
                <TouchableOpacity
                  className="absolute bottom-2 bg-gray-300 right-2 p-2 rounded"
                  onPress={() => {
                    dispatch(addToCart(item));
                    showMessage({
                      message: "Add to cart successfully",
                      description: "Go to check Cart",
                      // icon: (props) => (
                      //   <Image
                      //     source={require("../accsets/images/iconn.png")}
                      //     {...props}
                      //   />
                      // ),
                      type: "success",
                    });
                  }}
                >
                  <Feather name="shopping-bag" size={24} color="black" />
                </TouchableOpacity>
              </TouchableOpacity>
              <View className="ml-2">
                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 15, paddingTop: 2 }}
                    className="text-gray-500 "
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <Text className="text-base font-bold">{item.price}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ItemProducts;

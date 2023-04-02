import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from "react-native-vector-icons";
import { SEARCH_PRODUCT_QUERY } from "../../../../graphQL/graphql";
import { useQuery } from "@apollo/client";
import styles from "./style";

export default function DetailOrder({ route, navigation }) {
  let itemProduct = route.params.paramKey;
  let [products, setProducts] = useState([]);
  let { loading, error, data } = useQuery(SEARCH_PRODUCT_QUERY);
  const productIds = [];
  const images = [];

  useEffect(() => {
    if (data) {
      const newData = data.products.edges;
      setProducts(newData);
    }
  }, [data]);

  itemProduct.items_order.forEach((element) => {
    productIds.push(element.product_id);
  });
  const selectedProducts = products.filter((id) =>
    productIds.includes(id.node.databaseId)
  );
  if (selectedProducts.length > 0) {
    selectedProducts.map((product) => images.push(product.node.image));
  }
  const newData = itemProduct.items_order.map((item, index) => {
    return Object.assign({}, item, images[index]);
  });

  if (loading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-3">
          <View>
            {newData.map((item, index) => {
              return (
                <View key={index} className="flex-1 pl-5 pr-5 mt-3">
                  <View style={styles.item_order}>
                    <View style={styles.heading_order}>
                      <Image
                        style={styles.img_product}
                        source={{
                          uri:
                            item.mediaItemUrl == undefined
                              ? "https://bizweb.dktcdn.net/100/212/791/products/tra-ng-tron-95bb4305-e012-404a-97b4-ac4447cd0742.jpg?v=1623418648000"
                              : item.mediaItemUrl.replace(
                                  "localhost",
                                  "192.168.1.18"
                                ),
                        }}
                      />
                    </View>
                    <View style={styles.total_order}>
                      <View className="h-16">
                        <Text style={[styles.name_product]}>
                          {item.product_name}
                        </Text>
                        <View className="flex-row pt-1 pb-1  items-center">
                          <View style={styles.dot}></View>
                          <Text style={styles.time_order}>
                            Quantity : {item.item_quantity}
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row justify-between  items-center">
                        <Text style={[styles.price_product]}>
                          Total : ${item.item_total}.00
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { EvilIcons } from "@expo/vector-icons";
import { useQuery } from "@apollo/react-hooks";
import { CATEGORY_QUERY } from "../../../graphQL/graphql";
import { ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import ProductList from "../../../../components/productsList";

const HomeScreen = ({ navigation }) => {
  let { loading, error, data } = useQuery(CATEGORY_QUERY);
  const [activeCategory, setActiveCategory] = useState(0);
  const datas = useSelector((state) => state.cartReducer);
  const [category, setCategory] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (data) {
      const products = data.productCategories.edges;
      setCategory(products);
    }
  }, [data]);

  if (category[index] !== undefined) {
    var categoryId = category[index].node.databaseId;
  }

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
      <View style={styles.container} className="pl-4 pr-4">
        {/* header */}
        <View style={styles.header}>
          <TouchableOpacity
            className=" w-12 h-14 items-center justify-center"
            onPress={() => navigation.navigate("Search")}
          >
            <EvilIcons name="search" size={35} color="black" />
          </TouchableOpacity>

          <>
            <View style={styles.textHeader}>
              <Text style={styles.textTop}>MAKE HOME</Text>
              <Text style={styles.textBeauty}> BEAUTYFUL</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              className=" w-12 h-14 items-center justify-center"
            >
              <View className="absolute top-1 right-0 bg-red-600 w-5 items-center rounded-full">
                <Text className="text-white">{datas.length}</Text>
              </View>
              <EvilIcons name="cart" size={35} color="black" />
            </TouchableOpacity>
          </>
        </View>

        {/* category */}
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {category.map((category, index) => {
              console.log();
              return (
                <TouchableHighlight
                  key={index}
                  className="mr-5 w-16 h-20 justify-center items-center"
                  onPress={() => [setActiveCategory(index), setIndex(index)]}
                  underlayColor="#fff"
                >
                  <View className="items-center">
                    <View
                      className=" w-10 h-10 mb-2 justify-center items-center rounded-xl"
                      style={[
                        {
                          backgroundColor: "#F5F5F5",
                        },
                        activeCategory === index && {
                          backgroundColor: "#000",
                        },
                      ]}
                    >
                      <Image
                        style={{
                          width: "50%",
                          height: "50%",
                          resizeMode: "contain",
                          // backgroundColor: "white",
                        }}
                        source={{
                          uri: category.node.image.mediaItemUrl.replace(
                            "localhost",
                            "192.168.1.18"
                          ),
                        }}
                      />
                    </View>
                    <Text
                      className=" bottom-1"
                      style={[
                        {
                          fontSize: 14,
                          fontWeight: "500",
                          color: "gray",
                        },
                        activeCategory === index && {
                          color: "black",
                          fontWeight: "600",
                          fontSize: 14,
                        },
                      ]}
                    >
                      {category.node.name}
                    </Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
        </View>
        {/* {/ body /} */}
        <View className="flex-1 ">
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductList categoryId={categoryId} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

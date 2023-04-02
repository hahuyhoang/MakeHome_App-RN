import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/redux/reducers/cardReducers";
import { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";
import { PRODUCTS_BY_CATEGORY } from "../src/graphQL/graphql";
import { useQuery } from "@apollo/react-hooks";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cardWidth = windowWidth / 2.3;
import { MotiView } from "moti";

const ProductList = ({ categoryId, setMessages, messages }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const categoryIdInt = parseInt(categoryId);
  const { loading, error, data } = useQuery(PRODUCTS_BY_CATEGORY, {
    variables: { categoryIdInt },
  });

  useEffect(() => {
    if (data) {
      const product = data.products.edges;
      const Products = [...product];
      setProducts(Products);
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
    <View className="flex-1">
      <View style={styles.cardITEM}>
        {products.map((items, index) => {
          const item = items.node;
          return (
            <MotiView
              from={{ opacity: 0, translateY: 50 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: index * 200 }}
              style={styles.card}
              key={index}
            >
              <TouchableOpacity
                style={styles.productCard}
                onPress={() => {
                  navigation.navigate("Detail", {
                    itemID: items.node.id,
                  });
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
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
                  style={styles.icon}
                  onPress={() => {
                    dispatch(addToCart(item));
                    showMessage({
                      message: "Add to cart successfully",
                      description: "Go to check Cart",
                      type: "success",
                      backgroundColor: "#2596be",
                      color: "#fff",
                    });
                  }}
                >
                  {/* <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/img/shopping-bag.png")}
                  /> */}
                  <Entypo name="shopping-bag" size={20} color="black" />
                </TouchableOpacity>

                <View>
                  <Text style={styles.tesxt}>{item.name}</Text>
                </View>
                <Text style={styles.textPrice} className="text-base font-bold">
                  {item.price}
                </Text>
              </TouchableOpacity>
            </MotiView>
          );
        })}
      </View>
    </View>
  );
};

export default ProductList;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    alignItems: "center",
  },
  textBeauty: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  searchBar: {
    width: windowWidth / 1.25,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "gray",
  },
  close: {
    position: "absolute",
    right: 5,
  },
  categoryIcons: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    width: "100%",
    height: "75%",
  },
  card: {
    width: cardWidth,
    marginTop: 10,
    height: 297,
    borderRadius: 11,
  },
  cardITEM: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tesxt: {
    fontSize: 15,
    lineHeight: 20,
    marginTop: 8,
    color: "gray",
    marginLeft: 5,
    marginBottom: 7,
  },
  icon: {
    position: "absolute",
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderRadius: 10,
    right: 4,
    bottom: 4,
  },
  textPrice: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 5,
  },
});

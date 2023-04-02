import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { PRODUCT_QUERY } from "../../graphQL/graphql";
import { ActivityIndicator } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { addToCart } from "../../redux/reducers/cardReducers";
import { showMessage } from "react-native-flash-message";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cardWidth = windowWidth / 2.3;
import { MotiView } from "moti";
import { setProduct } from "../../Async";
import { saveProduct } from "../../redux/actions/auth";
const Search = ({ navigation }) => {
  const [searchItem, setSearchItem] = useState("");
  let [products, setProducts] = useState([]);
  const [olData, setOlaData] = useState();
  const dispatch = useDispatch();
  let { loading, error, data } = useQuery(PRODUCT_QUERY);

  useEffect(() => {
    if (data) {
      const newData = data.products.edges;
      setProducts(newData);
      setOlaData(newData);
      setProduct(newData).then(() => {
        saveProduct(newData);
      });
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

  const onSearch = (text) => {
    if (text == "") {
      setProducts(olData);
    } else {
      let tempList = products.filter((item) => {
        return item.node.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setProducts(tempList);
    }
  };
  return (
    <SafeAreaView style={styles.container} className=" flex-1">
      <View className="flex-row pt-3  items-center">
        <TouchableOpacity
          className="ml-4 mr-2"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          value={searchItem}
          onChangeText={(text) => {
            onSearch(text);
            setSearchItem(text);
          }}
          placeholder="Search"
          style={styles.searchBar}
        />
      </View>
      <View className="flex-1 pl-4 pr-4 pt-2">
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          className="flex-1"
        >
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
                    style={styles.image}
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
                      className="absolute bottom-2 bg-gray-300 right-2 p-2 rounded"
                      onPress={() => {
                        // navigation.navigate("Cart")
                        dispatch(addToCart(item));
                        showMessage({
                          message: "Add to cart successfully",
                          description: "Go to check Cart",
                          backgroundColor: "#2596be",
                          type: "success",
                        });
                      }}
                    >
                      <Feather name="shopping-bag" size={24} color="black" />
                    </TouchableOpacity>
                  </TouchableOpacity>
                  <Text
                    style={{ fontSize: 15 }}
                    className=" text-gray-500 mt-1"
                  >
                    {item.name}
                  </Text>
                  <Text className="text-base font-bold">{item.price}</Text>
                </MotiView>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "gray",
    borderRadius: 12,
  },
  card: {
    width: cardWidth,
    marginTop: 10,
    height: 300,
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
  image: {
    width: "100%",
    height: "75%",
  },
});

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRODUCT_DETAIL_QUERY, REVIEW_QUERY } from "../../graphQL/graphql";
import { useQuery } from "@apollo/react-hooks";
import RenderHTML from "react-native-render-html";
import { useDispatch, useSelector } from "react-redux";
import { showMessage } from "react-native-flash-message";
import { addToCartFavorite } from "../../redux/reducers/cardFavorite";
import {
  addToCart,
  decrement,
  increment,
  removeItem,
} from "../../redux/reducers/cardReducers";

const windowWidth = Dimensions.get("window").width;
const Detail = ({ route }) => {
  const [select, setSelector] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let itemId = route.params.itemID;
  const { loading, error, data } = useQuery(PRODUCT_DETAIL_QUERY, {
    variables: { id: itemId },
  });
  const { data: reviewData } = useQuery(REVIEW_QUERY, {
    variables: { id: itemId },
  });
  const review = reviewData?.product || [];

  if (review == "") {
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );
  }

  if (loading)
    return (
      <ActivityIndicator
        className="flex-1 justify-center items-center"
        size="small"
        color="#9775FA"
      ></ActivityIndicator>
    );
  const object = {
    quantity: "1",
  };
  const newdata = data.product;
  var item = { ...newdata, ...object };
  const newDataReview = { ...newdata, ...review };
  return (
    <View style={styles.container}>
      {/* header */}
      <View className="flex-1 ">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="flex-1 h-full mb-16 ">
            <View>
              {/* box img right */}
              <View style={styles.boxImg} className="ml-auto">
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderBottomLeftRadius: 35,
                  }}
                  source={{
                    uri: item.galleryImages.nodes[select].mediaItemUrl.replace(
                      "localhost",
                      "192.168.1.18"
                    ),
                  }}
                />
              </View>
              {/* left button */}
              <View style={styles.leftBtn}>
                <TouchableOpacity
                  className="w-10 h-10 mt-5 bg-gray-100 justify-center items-center rounded-lg"
                  onPress={() => navigation.goBack()}
                >
                  <AntDesign name="left" size={20} color="black" />
                </TouchableOpacity>
                <View style={styles.leftBtnColor}>
                  <View
                    style={{
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,
                      elevation: 6,
                      backgroundColor: "#fff",
                      borderWidth: 0.5,
                      borderColor: "#ccc",
                      width: 60,
                      borderRadius: 25,
                    }}
                    className=" h-48 mt-1 shadow-lg justify-center items-center "
                  >
                    <View className="">
                      <View
                        style={{ backgroundColor: "#909090" }}
                        className="w-8 h-8 rounded-full justify-center items-center"
                      >
                        <TouchableOpacity
                          className="w-6 h-6 bg-white rounded-full"
                          onPress={() => setSelector(0)}
                        />
                      </View>
                      <View
                        className="w-8 h-8 mt-6 justify-center items-center mb-6 rounded-full "
                        style={{ backgroundColor: "#f0f0f0" }}
                      >
                        <TouchableOpacity
                          className="w-6 h-6  rounded-full"
                          onPress={() => setSelector(1)}
                          style={{ backgroundColor: "#b4906c" }}
                        />
                      </View>
                      <View
                        style={{ backgroundColor: "#f0f0f0" }}
                        className="w-8 h-8 justify-center items-center rounded-full "
                      >
                        <TouchableOpacity
                          className="w-6 h-6 bg-orange-300 rounded-full"
                          onPress={() => setSelector(2)}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* leftbutton color */}
            </View>
            {/* body */}
            <View className=" ml-5 mr-5 mt-5 h-full">
              {/* text name */}
              <View>
                <Text className="text-xl font-bold">{item.name}</Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-base font-bold">{item.price}</Text>
                  <View className="flex-row absolute right-0 items-center">
                    <TouchableOpacity
                      onPress={() => {
                        setQuantity(quantity + 1);
                        dispatch(increment(item.id));
                      }}
                      className="w-8 h-8 items-center justify-center bg-gray-300 rounded-lg"
                    >
                      <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>
                    <Text className="ml-3 mr-3">{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(removeItem(item.id));
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="w-8 h-8 items-center justify-center bg-gray-300 rounded-lg"
                    >
                      <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* star review */}
              <View className="top-4">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Review", {
                      paramKey: newDataReview,
                    });
                  }}
                  className="flex-row items-center"
                >
                  <Entypo name="star" size={20} color="#f2c94b" />
                  <Text className="left-1 text-base">4.5</Text>
                  <Text className="left-3 text-gray-400">
                    ({review.reviews.edges.length} reviews)
                  </Text>
                </TouchableOpacity>
              </View>
              {/* description */}
              <View className="top-8">
                <RenderHTML
                  contentWidth={windowWidth}
                  source={{ html: item.content }}
                />
              </View>
              {/* btn add */}
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        className=" flex-row ml-5 mr-5 mb-5 bg-white"
        style={styles.btnAddtoCard}
      >
        {/* btn add bookmark */}
        <TouchableOpacity
          className="bg-gray-300 items-center justify-center"
          style={styles.btnAddfavorite}
          onPress={() => [
            dispatch(addToCartFavorite(item)),
            showMessage({
              message: "Add to favorite done!",
              description: "Go to check now",
              // icon: (props) => (
              //   <Image
              //     source={require("../../../accsets/images/iconn.png")}
              //     {...props}
              //   />
              // ),
              type: "success",
              backgroundColor: "#2596be",
            }),
          ]}
        >
          <Feather name="bookmark" size={30} color="gray" />
        </TouchableOpacity>
        {/* btn add to card */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            borderRadius: 8,
            backgroundColor: "#000",
            width: "78%",
            left: 25,
          }}
          onPress={() => [
            dispatch(addToCart(item)),
            showMessage({
              message: "Add to cart done!",
              description: "Go to check now",
              type: "success",
              backgroundColor: "#2596be",
            }),
          ]}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Add to card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;

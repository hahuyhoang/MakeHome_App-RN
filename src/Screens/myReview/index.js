import {
  View,
  Text,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/react-hooks";
import { MY_REVIEW, PRODUCT_QUERY } from "../../graphQL/graphql";
import RenderHtml from "react-native-render-html";
import { setReview } from "../../Async";
import { saveReview } from "../../redux/actions/auth";
import { useSelector } from "react-redux";

const MyReview = () => {
  const navigation = useNavigation();
  const userData = useSelector((state) => state.auth.userData);
  const userEmail = userData.login.user.email;
  const { loading, error, data } = useQuery(MY_REVIEW, {
    variables: { userEmail },
  });
  const [allProductId, setAllProductId] = useState("");
  const [dataReview, setDataReview] = useState([]);
  const { data: product } = useQuery(PRODUCT_QUERY);
  const { width } = useWindowDimensions();
  const products = product?.products || [];
  var productId = [];
  var review = [];
  var array = [0, 0, 0, 0, 0];

  useEffect(() => {
    if (data) {
      const array = data.products.edges;
      var newArray = array.filter((item) => item.node.reviews.edges.length > 0);
      newArray.map(async (item) => {
        productId.push(item.node.id);
        review.push(item.node.reviews.edges);
        setDataReview(review);
        setAllProductId(productId);
      });
    }
  }, [data]);

  if (products.edges !== undefined) {
    var filteredProducts = products.edges.filter((product) =>
      allProductId.includes(product.node.id)
    );
    var newData = filteredProducts.map((item, index) => {
      return Object.assign({}, item, dataReview[index]);
    });
    setReview(newData).then(() => {
      saveReview(newData);
    });
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
    <SafeAreaView style={styles.container}>
      <View className="flex-row items-center h-16  justify-center">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute left-3 pr-3"
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text className="text-lg font-bold">My Review</Text>
        </View>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="mt-2 items-center">
          {newData !== undefined ? (
            <View className="w-full ">
              {newData.map((item, index) => {
                return (
                  <View className="ml-4 mr-4" key={index} style={styles.boxAdd}>
                    <View className="flex-row items-center mt-3 ml-3">
                      <Image
                        className="w-24 h-24 rounded-lg"
                        source={{
                          uri: item.node.image.mediaItemUrl.replace(
                            "localhost",
                            "192.168.1.18"
                          ),
                        }}
                      />
                      <View className="ml-5 w-4/6">
                        <Text className="mb-1 font-medium text-lg ">
                          {item.node.name}
                        </Text>
                        <Text className=" font-medium text-lg">
                          {item.node.price}
                        </Text>
                      </View>
                    </View>
                    <View className=" flex-row items-center ml-3 mr-3 mt-3 justify-between ">
                      <View className="mr-3 flex-row">
                        {array.map((en, i) => (
                          <AntDesign
                            name={
                              i < Math.floor(item[0].rating) ? "star" : "staro"
                            }
                            size={12}
                            color="#FF981F"
                          />
                        ))}
                      </View>
                      <Text className="text-base text-gray-400">
                        {item[0].node.date}
                      </Text>
                    </View>
                    <View className=" m-4">
                      <RenderHtml
                        contentWidth={width}
                        source={{ html: item[0].node.content }}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
// pending review
export default MyReview;

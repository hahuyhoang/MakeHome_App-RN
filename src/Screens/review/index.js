import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./style";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Button from "../../../components/button";
import RenderHtml from "react-native-render-html";

const Review = ({ navigation, route }) => {
  let item = route.params.paramKey;
  const { width } = useWindowDimensions();
  let array = [0, 0, 0, 0, 0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body} className="">
        {/* header */}
        <View className="flex-row h-16 ml-4 mr-4 items-center justify-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute left-0 pr-3"
          >
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <Text className="text-lg font-bold">Rating & Review</Text>
          </View>
        </View>
        {/* img review */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mt-2 flex-row ml-4 mr-4">
            <Image
              style={styles.imgReview}
              source={{
                uri: item.image.mediaItemUrl.replace(
                  "localhost",
                  "192.168.1.18"
                ),
              }}
            />
            <View className="ml-4 justify-between mt-3 mb-3">
              <Text className="text-base">{item.name}</Text>
              {item.reviews.edges == "" ? (
                <View className=" flex-row items-center">
                  <AntDesign name="star" size={20} color="#FF981F" />
                  <Text className="pl-2 text-xl font-bold">0</Text>
                </View>
              ) : (
                <View className=" flex-row items-center">
                  <AntDesign name="star" size={20} color="#FF981F" />
                  <Text className="pl-2 text-xl font-bold">
                    {item.reviews.edges[0].rating}.5
                  </Text>
                </View>
              )}

              <Text className="text-base font-medium">
                {item.reviews.edges.length} reviews
              </Text>
            </View>
          </View>
          <View className="mt-7 ml-4 mr-4">
            {item.reviews.edges.map((item, index) => {
              return (
                <View style={styles.boxAdd} key={index}>
                  <View style={styles.avtReview}>
                    <Image
                      className="w-8 h-8 rounded-full"
                      source={require("../../../assets/img/spaceX.jpg")}
                    />
                  </View>
                  <View className=" flex-row items-center ml-3 mr-3 mt-7 justify-between ">
                    <Text className="text-base">
                      {item.node.author.node.name}
                    </Text>
                    <Text className="text-base text-gray-400">
                      {item.node.date}
                    </Text>
                  </View>
                  <View className="flex-row ml-3 mr-3 ">
                    {array.map((en, i) => (
                      <AntDesign
                        name={i < Math.floor(item.rating) ? "star" : "staro"}
                        size={12}
                        color="#FF981F"
                      />
                    ))}
                  </View>
                  <View className=" ml-3 mr-3 mt-4">
                    <RenderHtml
                      contentWidth={width}
                      source={{ html: item.node.content }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <View className="items-center">
        <Button
          title={"Write a review"}
          textStyle={{
            fontSize: 20,
            fontFamily: "Poppins-Regular",
          }}
          onPress={() => {
            navigation.navigate("AddReview", {
              paramKey: item.databaseId,
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Review;

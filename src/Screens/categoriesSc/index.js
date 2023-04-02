import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CATEGORY_QUERY } from "../../graphQL/graphql";
import { ActivityIndicator } from "react-native";

const Category = () => {
  let { loading, error, data } = useQuery(CATEGORY_QUERY);
  const [activeCategory, setActiveCategory] = useState(0);
  let [category, setCategory] = useState([]);
  useEffect(() => {
    if (data) {
      setCategory(data.productCategories.edges);
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
    <View className="h-20">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        className=" ml-3"
      >
        {category.map((category, index) => {
          const item = category.node;
          // const image = item.image.mediaItemUrl;
          // var images = image.replace("localhost", "192.168.1.18");
          return (
            <TouchableOpacity
              key={index}
              className="mr-5 w-16 h-20 justify-center items-center"
              onPress={() => [
                setActiveCategory(index),
                console.log(item.databaseId),
              ]}
            >
              <View
                className=" w-10 h-10 mb-2 justify-center items-center rounded-xl"
                style={[
                  {
                    backgroundColor: "#F5F5F5",
                  },
                  activeCategory === index && {
                    backgroundColor: "gray",
                  },
                ]}
              >
                <Image
                  style={{
                    width: "40%",
                    height: "50%",
                    resizeMode: "contain",
                    // bottom: 10,
                    padding: 10,
                  }}
                  // source={{ uri: images }}
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
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Category;

import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./style";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/reducers/cardReducers";
import { clear, removeItem } from "../../../redux/reducers/cardFavorite";
import { MotiView } from "moti";
import Button from "./../../../../components/button";

const Favorite = () => {
  const navigation = useNavigation();
  const data = useSelector((state) => state.cartFavorite);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      {/* {/ main /} */}
      <View className=" flex-1">
        {/* {/ header /} */}
        <View className="items-center " style={styles.flex01}>
          <Text className="text-xl font-bold">Favorites</Text>
        </View>
        {/* {/ body /} */}
        {data.length == 0 ? (
          <View className="justify-center items-center flex-1">
            <View className="w-full h-full">
              <Image
                resizeMode="contain"
                className="w-full h-full"
                source={{
                  uri: "https://static.oxinis.com/healthmug/image/healthmug/empty-wishlist.webp",
                }}
              />
            </View>
          </View>
        ) : (
          <View className="flex-1">
            <View className="flex-1 pl-4 pr-4 ">
              {data.map((item, index) => {
                return (
                  <MotiView
                    from={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: index * 200 }}
                    style={styles.card}
                    key={index}
                    className="flex-row  border-b mb-3 pb-3 border-gray-200"
                  >
                    {/* {/ img /} */}
                    <TouchableOpacity
                      className="flex-1 flex-row"
                      onPress={() => {
                        navigation.navigate("Detail", {
                          itemID: item.id,
                        });
                      }}
                    >
                      <View className="w-24 h-24">
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "stretch",
                            borderRadius: 6,
                          }}
                          source={{
                            uri: item.image.mediaItemUrl.replace(
                              "localhost",
                              "192.168.1.18"
                            ),
                          }}
                        />
                      </View>
                      {/* {/ info product & price /} */}
                      <View className="pl-4 w-3/5 ">
                        <Text className="text-sm">{item.name}</Text>
                        <Text className="font-bold text-sm">{item.price}</Text>
                      </View>
                      {/* {/ button right /} */}
                      <View className="absolute right-0">
                        <TouchableOpacity
                          className="right-2"
                          onPress={() => {
                            dispatch(removeItem(item.id));
                          }}
                        >
                          <AntDesign
                            name="closecircleo"
                            size={20}
                            color="black"
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          className="
                        top-16 border
                      border-gray-100
                        rounded-lg
                        absolute
                        right-0 
                        bg-gray-300 
                        w-8
                        h-8
                        items-center
                        justify-center"
                          onPress={() => {
                            data.forEach(
                              (item) => dispatch(addToCart(item)),
                              dispatch(clear())
                            );
                          }}
                        >
                          <Entypo name="shopping-bag" size={20} color="black" />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </MotiView>
                );
              })}
            </View>
            <View className="justify-center items-center  w-full ">
              <Button
                onPress={() => {
                  data.forEach(
                    (item) => dispatch(addToCart(item)),
                    dispatch(clear())
                  );
                }}
                title="Add all to cart"
              ></Button>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

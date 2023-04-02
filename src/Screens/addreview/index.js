import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { useMutation } from "@apollo/client";
import { REVIEW_PRODUCT } from "../../graphQL/graphql";
import { Ionicons } from "react-native-vector-icons";
import Button from "../../../components/button";
import { showSuccess } from "../../utils/helperFunction";
import { useSelector } from "react-redux";

export default function AddReview({ navigation, route }) {
  const [rating, setRating] = useState();
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  let ratingId = parseInt(rating);
  let productId = route.params.paramKey;
  const userData = useSelector((state) => state.auth.userData);
  const [writeReview, { loading, error }] = useMutation(REVIEW_PRODUCT);
  const handleSubmit = () => {
    writeReview({
      variables: {
        rating: ratingId,
        author,
        content,
        commentOn: productId,
      },
    })
      .then(() => {
        showSuccess("Review submitted successfully!");
        navigation.goBack();
      })
      .catch((e) => {
        console.log(`Error submitting review: ${e.message}`);
      });
  };
  return (
    <KeyboardAvoidingView className="flex-1 bg-white">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 bg-white">
          <View className="pl-5 flex-1 pr-5">
            <View className="h-16 mt-6 justify-center">
              <View className="justify-center items-center">
                <Text style={styles.heading}>Add Reviews</Text>
              </View>
              <TouchableOpacity
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Ionicons name="arrow-back" size={20} />
              </TouchableOpacity>
            </View>
            <View>
              <Text className="pt-3 pb-3" style={styles.heading}>
                Name
              </Text>
              <TextInput
                placeholder="Type your name"
                placeholderTextColor="#8F959E"
                onChangeText={(text) => setAuthor(text)}
                value={author}
                style={styles.input}
              ></TextInput>
            </View>
            <View>
              <Text className="pt-3 pb-3" style={styles.heading}>
                How was your experience ?
              </Text>
              <TextInput
                placeholderTextColor="#8F959E"
                onChangeText={(text) => setContent(text)}
                placeholder="Describe your experience?"
                style={[styles.TextInput]}
              />
            </View>
            <View>
              <Text className="pt-3 pb-3" style={styles.heading}>
                Star
              </Text>
            </View>
            <View>
              <View className="flex-row pl-1 items-center justify-center">
                <Text style={styles.number_star}>{rating}</Text>
                <Slider
                  style={{ width: "100%", height: 40 }}
                  minimumValue={0}
                  maximumValue={5}
                  minimumTrackTintColor="#9775FA"
                  onValueChange={(value) => setRating(value.toFixed(1))}
                />
              </View>
            </View>
          </View>
          <View className="justify-center items-center">
            <Button title="Submit Review" onPress={handleSubmit} />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#eeeee4",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  heading: {
    fontSize: 17,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#eeeee4",
    borderRadius: 10,
    paddingLeft: 10,
  },
  TextInput: {
    width: "100%",
    height: 200,
    backgroundColor: "#eeeee4",
    borderRadius: 12,
    paddingLeft: 10,
  },
  number_star: {
    fontSize: 14,
    fontWeight: "600",
  },
});

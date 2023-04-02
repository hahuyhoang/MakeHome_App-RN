import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const HomeLoading = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={{
          uri: "https://assets8.lottiefiles.com/packages/lf20_58vkk48j.json",
        }}
        autoPlay
        loop
      />
    </View>
  );
};

export default HomeLoading;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 1,
  },
});

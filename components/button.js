import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
export default function Button({ title, onPress, isLoading }) {
  return (
    <TouchableOpacity className="flex-row" style={styles.btn} onPress={onPress}>
      {!!isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.textBtn}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: "92%",
    height: 60,
    backgroundColor: "#000",
    marginBottom: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

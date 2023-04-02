import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "white",
  },
  body: {
    marginHorizontal: 20,
  },
  textOrder: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
  textNoti: {
    top: 19.8,
    right: 40,
    color: "green",
  },

  textHot: {
    top: 19.8,
    right: 40,
    color: "red",
  },
});
export default styles;

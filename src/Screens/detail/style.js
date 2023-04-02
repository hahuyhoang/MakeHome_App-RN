import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  boxImg: {
    width: "88%",
    height: windowHeight / 1.9,
  },
  leftBtn: {
    left: 20,
    top: windowHeight / 50,
    position:"absolute",
    justifyContent:"center",
    alignItems:"center"
  },
  leftBtnColor: {
    top: windowHeight / 20,
    left:0
  },
  btnAddtoCard: {
    bottom: 10,
  },
  btnAddfavorite: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  flex01: {
    flex: 1,
    backgroundColor: "green",
  },
  flex05: {
    flex: 1,
  },
});
export default styles;

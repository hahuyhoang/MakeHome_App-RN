import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  boxItem: {
    backgroundColor: "#FFF",
    height: windowHeight / 12,
    borderRadius: 8,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 4.65,
    elevation: 2,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  body: {
    flex: 1,
  },
});
export default styles;

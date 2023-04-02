import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
  box: {
    backgroundColor: "#fff",
    height: windowHeight / 12,
    marginTop: 12,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    justifyContent: "center",
  },
  title: {
    left: 15,
    color: "gray",
  },
  info: {
    top: 3,
    left: 15,
  },
  boxNoti: {
    backgroundColor: "#fff",
    height: windowHeight / 13,
    marginTop: 12,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 15,
  },
});

export default styles;

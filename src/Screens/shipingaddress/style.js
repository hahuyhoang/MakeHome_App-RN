import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  fontText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    paddingLeft:6
  },
  boxAdd: {
    backgroundColor: "#fff",
    height: 130,
    marginTop: 10,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    elevation: 0.5,
    position: "relative",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  flex1: {
    flex: 1,
  },
  absolute: {
    position: "absolute",
    bottom: 25,
    right: 20,
    width: 55,
    height: 55,
    backgroundColor: "#f5f5f5",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;

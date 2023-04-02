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
  flex1: {
    flex: 1,
  },
  button: {
    borderWidth: 1,
    width: 300,
    borderColor: "#000",
    borderRadius: 10,
    height: 65,
    justifyContent: "center",
  },
  promoCode: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.65,
    elevation: 2,
    backgroundColor: "#FFF",
  },
  Cart_Empty: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  card: { borderBottomWidth: 1, borderColor: "#F0F0F0", width: "100%" },
});
export default styles;

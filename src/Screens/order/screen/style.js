import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  boxAdd: {
    backgroundColor: "#fff",
    height: Platform.OS === "android" ? windowHeight / 5.5 : 140,
    marginTop: 10,
    borderColor: "#fff",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: "relative",
  },
  fontRegular: {
    fontFamily: "Poppins-Regular",
    fontWeight: "800",
  },
});
export default styles;

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
  imgReview: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  boxAdd: {
    backgroundColor: "#fff",
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
    marginBottom: 10,
  },
  body: {
    flex: 1,
  },
});

export default styles;

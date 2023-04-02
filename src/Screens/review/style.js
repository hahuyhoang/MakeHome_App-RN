import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#F5F5F5",
  },
  imgReview: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  boxAdd: {
    backgroundColor: "#fff",
    marginTop: 10,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 0.5,
    position: "relative",
    marginBottom: 10,
  },
  body: {
    flex: 1,
  },
  avtReview: {
    position: "absolute",
    left: "45%",
    top: -15,
  },
});

export default styles;

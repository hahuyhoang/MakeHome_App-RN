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
  body: {
    flex: 1,
  },
  boxAdd: {
    backgroundColor: "#fff",
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
    justifyContent: "center",
  },
  boxTotal: {
    backgroundColor: "#fff",
    height: windowHeight / 4.3,
    marginTop: 10,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    position: "relative",
  },
  card: {
    width: 60,
    height: 40,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
export default styles;

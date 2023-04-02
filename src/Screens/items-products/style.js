import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cardWidth = windowWidth / 2.3;
const styles = StyleSheet.create({
  productCard: {
    width: windowWidth / 2.3,
    height: windowHeight / 3.4,
  },
  card: {
    width: cardWidth ,
    marginTop: 10,
    height: 300,
  },
  cardITEM: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
export default styles;

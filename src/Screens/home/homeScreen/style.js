import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const cardWidth = windowWidth / 2.12;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHeader: {
    alignItems: "center",
  },
  textBeauty: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
  },
  searchBar: {
    width: windowWidth / 1.25,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "gray",
  },
  close: {
    position: "absolute",
    right: 5,
  },
  categoryIcons: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    width: windowWidth / 2.3,
    height: windowHeight / 3.4,
  },
  card: {
    width: cardWidth - 13,
    marginTop: 10,
    height: 280,
    marginRight: 11,
  },
  cardITEM: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: windowHeight,
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 330,
    marginLeft: 5,
  },
  category: {
    backgroundColor: "#000",
    padding: 10,
  },
  categoryPressed: {
    backgroundColor: "#fff",
  },
});
export default styles;

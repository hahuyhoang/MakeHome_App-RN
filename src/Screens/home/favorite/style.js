import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  flex01: {
    flex: 0.1,
  },
  button: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#000",
    borderRadius: 10,
    height: 65,
    justifyContent: "center",
  },
});
export default styles;

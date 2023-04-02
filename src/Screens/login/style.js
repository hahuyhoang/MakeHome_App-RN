import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  loginBox: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginHorizontal: 10,
  },
  textHello: {
    // fontFamily: 'Poppins-Regular',
    fontSize: 25,
  },
  textWelcome: {
    fontSize: 35,
    fontFamily: "Poppins-Semi",
  },
  bodyInput: {
    borderWidth: 1,
    borderColor: "#fff",
    width: windowWidth / 1.1,
    height: windowHeight / 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // marginBottom: 10,
    elevation: 0.5,
    position: "relative",
  },
  email: {
    width: "96%",
    height: 35,
    backgroundColor: "#fff",
  },
  textForgot: {
    fontFamily: "Poppins-Regular",
  },
  button: {
    borderWidth: 1,
    width: 300,
    borderColor: "#000",
    borderRadius: 10,
    height: 65,
    justifyContent: "center",
  },
  containerAlert: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  okButton: {
    backgroundColor: "#007aff",
    borderRadius: 8,
    padding: 8,
  },
  okButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  emailBox: {
    borderWidth: 1,
    width: "90%",
    height: 61,
    backgroundColor: "#fff",
    borderRadius: 3,
    borderColor: "gray",
    marginTop: 18,
    alignItems: "center",
  },
});
export default styles;

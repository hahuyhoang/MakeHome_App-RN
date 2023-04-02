import { Platform, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  loginBox: {
    flex: 1,
    alignItems: "center",
  },
  textHello: {
    // fontFamily: 'Poppins-Regular',
    fontSize: 25,
    paddingBottom: 10,
  },
  textWelcome: {
    fontSize: 35,
    fontFamily: "Poppins-Semi",
  },
  bodyInput: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "100%",
    height: "85%",
    backgroundColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // marginBottom: 10,
    elevation: 0.5,
    position: "relative",
  },
  email: {
    width: "96%",
    height: "100%",
    backgroundColor: "#fff",
  },
  textForgot: {
    fontFamily: "Poppins-Regular",
  },
  button: {
    borderWidth: 1,
    width: "90%",
    borderColor: "#000",
    borderRadius: 10,
    height: 60,
    justifyContent: "center",
    marginTop: 20,
  },
  emailBox: {
    borderWidth: 1,
    width: "90%",
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 3,
    borderColor: "gray",
    marginTop: 18,
    alignItems: "center",
  },
});
export default styles;

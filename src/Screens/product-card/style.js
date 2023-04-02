import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        marginHorizontal: 10
    },
    productCard:{
        width: windowWidth / 2,
        height: windowHeight / 2.8,
    },
    card:{
        width: windowWidth / 2,
        height: windowHeight /2.3
    },
    imgCard:{
        width: 193,
        height: 280,
        // top: 
        // resizeMode: '',
        // position: 'absolute'
    }
});
export default styles;

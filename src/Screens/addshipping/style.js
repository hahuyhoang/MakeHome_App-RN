import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: '#F5F5F5'
    },
    bodyInput:{
        flex:1
    },
    input:{
        backgroundColor: '#fff',
        height: 60,
    },
    

});

export default styles;

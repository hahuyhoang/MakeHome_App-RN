import { Platform, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    loginBox: {
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        marginHorizontal: 10,
    },
    textHello: {
        // fontFamily: 'Poppins-Regular',
        fontSize: 25,
        paddingBottom: 10
    },
    textWelcome: {
        fontSize: 35,
        fontFamily: "Poppins-Semi"
    },
    bodyInput: {
        borderWidth: 1,
        borderColor: '#fff',
        width: windowWidth / 1.1,
        height: windowHeight / 1.7,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // marginBottom: 10,
        elevation: 0.5,
        position: 'relative',
    },
    email:{
        width: 300,
        height: 70,
        backgroundColor: '#fff',
    },
    textForgot:{
        fontFamily: 'Poppins-Regular'
    },
    button:{
        borderWidth: 1,
        width: 300,
        borderColor: '#000',
        borderRadius: 10,
        height: 65,
        justifyContent:'center',
        
    }
})
export default styles;
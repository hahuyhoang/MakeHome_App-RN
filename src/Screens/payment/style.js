import { Platform, StatusBar, StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    fontText:{
        fontFamily: 'Poppins-Regular',
        fontSize: 15
    },
    boxAdd:{
        height: windowHeight / 3.5,
        marginTop: 10,
        borderColor: '#fff',
        borderRadius: 10,
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // marginBottom: 10,
        elevation: 0.5,
        position: 'relative',
        
    },
    flex1:{
        flex: 1
    },
    absolute:{
        position:'absolute',
        bottom: 25,
        right: 20,
        width: 55,
        height: 55,
        backgroundColor: '#fff',
        borderRadius: 100,
        justifyContent:'center',
        alignItems: 'center'
    }
})
export default styles;
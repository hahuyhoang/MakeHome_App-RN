import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  back: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left:20
  },
  heading: {
    fontSize: 17,
    fontWeight: "600",
  },
  item_order: {
    width: "100%",
    height: 120,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: "#F8F8F8",
    padding: 10,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading_order: {
    width: "30%",
    height: "100%",
  },
  total_order: {
    paddingVertical: 15,
    width: "70%",
    paddingLeft: 4,
    marginRight:4
  },
  name_product: {
    fontSize: 15,
    fontWeight: "500",
  },
  time_order: {
    fontSize: 14,
    fontWeight: "400",
    color: "#CCC",
    paddingLeft: 4,
  },
  price_product: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    paddingVertical: 4,
  },
  view_order: {
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    backgroundColor: "#CCC",
    borderRadius: 20,
  },
  text_order: {
    fontSize: 14,
    fontWeight: "500",
    color: "#CCC",
  },
  img_product: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  delivery: {
    padding: 5,
    width: "35%",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text_delivery: {
    fontSize: 12,
    fontWeight: "400",
    color: "#CCC",
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
  In_delivery: {
    height: 100,
    width: "100%",
    justifyContent:"center",
    marginTop:20,
    alignItems:"center",
  },
  colum:{
    height:"100%",
    justifyContent:"center",
    marginHorizontal:10
  },
  dots: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#ccc",
    justifyContent:"center",
    alignItems:"center"
  },
  detail:{
    height: 65,
    width: "100%",
    justifyContent:"center",
    paddingLeft:"8%",
    width: "100%",
  },
  text_detail:{
    fontSize: 12,
    fontWeight: "400",
    color: "#CCC",
    marginRight:20
  },
  name_detail:{
    fontSize: 14,
    fontWeight: "500",
    paddingBottom:4
  },
  dot_time:{
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#FFF",
    justifyContent:"center",
    alignItems:"center",
  },
  line_dot:{
    height:270,
    borderLeftWidth:1,
  },
  dots_line:{
    height: 25,
    width: 25,
    borderRadius: 12,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    left:-12,
    borderWidth:3,
    borderColor:"#000",
    backgroundColor:"#000"
  },
  product_order:{
    height: 70,
    width:"100%",
    borderRadius:10,
    flexDirection:"row",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    backgroundColor: "#F8F8F8",
    marginBottom:10
  },
  text_stt:{
    width: 30,
    height:30,
    backgroundColor:"red",
    fontWeight:"500",
    fontSize:14,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
  }
  
});
export default styles;
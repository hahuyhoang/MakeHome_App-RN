import {
  MyTabs,
  Detail,
  Cart,
  Checkout,
  DoneCheckout,
  MyReview,
  Review,
  Order,
  ShippingAdd,
  AddShipping,
  Setting,
  ItemProducts,
  Category,
  Search,
  ProductList,
  AddReview,
} from "../Screens/index";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="DoneCheckout" component={DoneCheckout} />
      <Stack.Screen name="MyReview" component={MyReview} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="ShippingAdd" component={ShippingAdd} />
      <Stack.Screen name="AddShipping" component={AddShipping} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="ItemProducts" component={ItemProducts} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </>
  );
}

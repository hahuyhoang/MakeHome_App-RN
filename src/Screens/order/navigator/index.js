import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Canceled from "../screen/canceled";
import Delivered from "../screen/delivered";
import Processing from "../screen/processing";

const Tab = createMaterialTopTabNavigator();
function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Delivered"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontFamily: "Poppins-Bold" },
        tabBarStyle: { backgroundColor: "#fff" },
        scrollEnabled: true,
      }}
    >
      <Tab.Screen name="Delivered" component={Delivered} />
      <Tab.Screen name="completed" component={Processing} />
      <Tab.Screen name="Canceled" component={Canceled} />
    </Tab.Navigator>
  );
}
export default TopTabs;

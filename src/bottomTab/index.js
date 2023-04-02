import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Account from "../Screens/home/account";
import Noti from "../Screens/home/notifi";
import Favorite from "../Screens/home/favorite";
import HomeScreen from "../Screens/home/homeScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center relative">
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={26}
                color={focused ? "#000" : "gray"}
              />
            </View>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center relative">
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                size={26}
                color={focused ? "#000" : "gray"}
              />
            </View>
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center relative">
              <Ionicons
                name={focused ? "notifications" : "notifications-outline"}
                size={26}
                color={focused ? "#000" : "gray"}
              />
            </View>
          ),
        }}
        name="Noti"
        component={Noti}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center relative">
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={24}
                color={focused ? "#000" : "gray"}
              />
            </View>
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TopTabs from "./index";
import DetailOrder from "../screen/detailOrder/index";

const Stack = createNativeStackNavigator();
export default function MainStack() {
  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Stack.Screen name="TopTabs" component={TopTabs} />
          <Stack.Screen name="DetailOrder" component={DetailOrder} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

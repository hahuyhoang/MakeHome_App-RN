import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import MainStack from "./MainStack";
import { firebase } from "../../config";
const Stack = createNativeStackNavigator();

function Navigation() {
  const userData = useSelector((state) => state.auth.userData);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!!userData.login && userData?.login.user.jwtAuthToken
          ? MainStack(Stack)
          : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;

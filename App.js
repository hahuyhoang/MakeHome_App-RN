import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Navigation from "./src/Routes";
import FlashMessage from "react-native-flash-message";
import { StripeProvider } from "@stripe/stripe-react-native";
import {
  saveProduct,
  saveReview,
  saveUserData,
} from "./src/redux/actions/auth";
import { getReview, getUserData, getUserOrder } from "./src/Async";
import React, { useEffect } from "react";
export default function App() {
  useEffect(() => {
    (async () => {
      const userData = await getUserData();
      if (!!userData) {
        saveUserData(userData);
      }
    })();
    (async () => {
      const dataReview = await getReview();
      if (dataReview !== null) {
        saveReview(dataReview);
      }
    })();
  }, []);

  const client = new ApolloClient({
    uri: "http://192.168.1.18/wordpress/graphql",
    cache: new InMemoryCache(),
  });
  let [fontsLoaded] = useFonts({
    "Poppins-Semi": require("./assets/Font/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/Font/Poppins-Bold.ttf"),
    "Poppins-Italic": require("./assets/Font/Poppins-Italic.ttf"),
    "Poppins-Regular": require("./assets/Font/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <StripeProvider publishableKey="pk_test_51MFCsgGCXQDGwaNcbB8ZsUdoKYvEz2BxdmnWXmW9qOCzTQhAFPJRGLdtnWcD56tdDOdUztWrHQArvuIVE8AVN6fB008RuXJUrh">
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navigation />
          <FlashMessage position="top" />
          <StatusBar style="auto" />
        </Provider>
      </ApolloProvider>
    </StripeProvider>
    // <Setting />
  );
}

const styles = StyleSheet.create({});

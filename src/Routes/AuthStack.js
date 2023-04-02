import { Getstarted, Login, SignUp, Forgot } from "../Screens/index";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Onbording" component={Getstarted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </>
  );
}

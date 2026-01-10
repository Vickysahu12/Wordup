import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/auth/OnBoardingScreen";
import RegisterScreen from "./src/screens/auth/RegisterScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import HomeScreen from "./src/screens/Home/HomeScreen";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown:false,
      }}
      >
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
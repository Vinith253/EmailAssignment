import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";
import EmailScreen from "../screens/EmailScreen";
import OTPScreen from "../screens/OtpScreen";
import HomeScreen from "../screens/HomeScreen";
import DisplayScreen from "../screens/DisplayScreen";
import BottomTabs from "./BottomNavigator";

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="Main" component={BottomTabs}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Display" component={DisplayScreen}/>
    </Stack.Navigator>
  );
}
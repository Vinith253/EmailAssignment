import { createStackNavigator } from "@react-navigation/stack";
import DisplayScreen from "../screens/DisplayScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createStackNavigator();

export default function SettingsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Display" component={DisplayScreen}/>
    </Stack.Navigator>
  );
}
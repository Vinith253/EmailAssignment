import { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./style";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Email");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Email Application</Text>
    </View>
  );
}

export default SplashScreen;


import { View, Text, SafeAreaView } from "react-native";
import TabHeader from "../../components/CustomHeader";
import styles from "./style";

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TabHeader screenName="Home" {...props} />
      <View style={styles.mainContent}>
        <Text style={styles.text}>Welcome to Home!</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
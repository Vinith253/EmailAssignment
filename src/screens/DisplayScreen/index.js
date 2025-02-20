import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TabHeader from "../../components/CustomHeader";
import appStore from "../../store/appStore";
import styles from "./style";

const DisplayScreen = (props) => {
  const { email, otp, selectedSettings, selectedValues } = appStore;

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader backRequired screenName="Display Result" {...props} />

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.value}>{email || "-"}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>OTP:</Text>
          <Text style={styles.value}>{otp || "-"}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Selected Settings:</Text>
          <Text style={styles.value}>{selectedSettings}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Selected Values:</Text>
          {Object.entries(selectedValues).map(([key, value]) => (
            <Text style={styles.value} key={key}>
              {key}: {value}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DisplayScreen;
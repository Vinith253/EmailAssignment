import { View, Alert, SafeAreaView, Text } from "react-native";
import { observer } from "mobx-react-lite";
import appStore from "../../store/appStore";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import CustomTextInput from "../../components/CustomTextInput";
import { emailPattern } from "../../utils/validationConstants";
import TabHeader from "../../components/CustomHeader";
import EmailService from "../../services/EmailService";
import styles from "./style";

const EmailScreen = observer((props) => {
  const { navigation } = props;
  const [emailValue, setEmailValue] = useState("");

  useEffect(() => {
    return () => {
      setEmailValue("");
    };
  }, []);

  const handleButtonClick = () => {
    if (emailValue && emailValue.match(emailPattern)) {
      appStore.setEmail(emailValue);
      navigation.navigate("OTP");
      // Method called for the api integration and remove the above lines
      // handleintegration()
    } else {
      Alert.alert(
        "Invalid Email",
        "Enter an valid email",
        [{ text: "Ok", onPress: () => {} }],
        {
          cancelable: false,
        }
      );
    }
  };

  // Method while implements the api integration
  // const handleintegration = () => {
  //   let data = { email: emailValue };
  //   EmailService.validateEmail(data)
  //     .then((response) => {
  //       appStore.setEmail(emailValue);
  //       console.log({ response });
  //       Alert.alert(
  //         "Otp sent",
  //         "Otp sent to the EmailID",
  //         [
  //           {
  //             text: "Ok",
  //             onPress: () => {
  //               navigation.navigate("OTP");
  //             },
  //           },
  //         ],
  //         {
  //           cancelable: false,
  //         }
  //       );
  //     })
  //     .catch((err) => {
  //       console.log({ err });
  //     });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <TabHeader screenName="Email" {...props} />
      <View style={styles.mainContent}>
        <CustomTextInput
          placeholder="Enter your email"
          value={emailValue}
          onChangeText={(text) => setEmailValue(text)}
          keyboardType="email-address"
        />

        <View style={styles.textContainer}>
          <Text>Enter an email for the OTP verification</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Next" onPress={handleButtonClick} />
        </View>
      </View>
    </SafeAreaView>
  );
});

export default EmailScreen;


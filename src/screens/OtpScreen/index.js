import {
  View,
  Alert,
  SafeAreaView,
  Text,
} from "react-native";
import { observer } from "mobx-react-lite";
import appStore from "../../store/appStore";
import CustomButton from "../../components/CustomButton";
import { useEffect, useState } from "react";
import TabHeader from "../../components/CustomHeader";
import { OtpInput } from "react-native-otp-entry";
import { BlackColor } from "../../utils/colorCodes";
import EmailService from "../../services/EmailService";
import styles from "./style";

const OTPScreen = observer((props) => {
  const { navigation } = props;
  const [otpValue, setOtpValue] = useState();

  useEffect(() => {
    return () => {
      setOtpValue("");
    };
  }, []);

  const handleButtonClick = () => {
    if (otpValue && otpValue.length === 6) {
      appStore.setOTP(otpValue);
      navigation.navigate("Main");
      // Method called for the api integration and remove the above lines
      // handleintegration()
    } else {
      Alert.alert(
        "Invalid OTP",
        "Enter a valid OTP",
        [{ text: "Ok", onPress: () => {} }],
        {
          cancelable: false,
        }
      );
    }
  };

  // Method while implements the api integration
  // const handleintegration = () => {
  //   let data = { otp: otpValue };
  //   EmailService.validateOtp(data)
  //     .then((response) => {
  //       appStore.setOTP(otpValue);
  //       console.log({ response });
  //       Alert.alert(
  //         "Otp sent",
  //         "Otp sent to the EmailID",
  //         [
  //           {
  //             text: "Ok",
  //             onPress: () => {
  //               navigation.navigate("Main");
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
      <TabHeader backRequired screenName="Enter code" {...props} />
      <View style={styles.mainContent}>
        <View style={styles.otpContainer}>
          <OtpInput
            numberOfDigits={6}
            onTextChange={(text) => setOtpValue(text)}
            focusColor={BlackColor}
          />
        </View>

        <View style={styles.textContainer}>
          <Text>Enter the OTP send to the EmailID</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Next" onPress={handleButtonClick} />
        </View>
      </View>
    </SafeAreaView>
  );
});

export default OTPScreen;
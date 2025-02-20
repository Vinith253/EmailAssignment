import { StyleSheet } from "react-native";
import { BlackColor, WhiteColor } from "../../utils/colorCodes";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      padding: 20,
    },
    title: {
      fontWeight: "bold",
      marginBottom: 5,
      fontSize: 16,
    },
    value: {
      marginBottom: 12,
      fontSize: 14,
      fontWeight: "400",
    },
    card: {
      backgroundColor: WhiteColor,
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
      shadowColor: BlackColor,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 5,
    },
  });

  export default styles;
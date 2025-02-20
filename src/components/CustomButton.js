import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { BlackColor, WhiteColor } from "../utils/colorCodes";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: WhiteColor,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: BlackColor
  },
  text: {
    color: BlackColor,
    fontSize: 16,
    fontWeight: "bold",
  },
});
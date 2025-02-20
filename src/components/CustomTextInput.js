import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { BlackColor } from "../utils/colorCodes";

const CustomTextInput = ({ placeholder, value, onChangeText, keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType || "default"}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%", // Adjust width as needed
    alignSelf: "center", // Centers input in parent container
    borderBottomWidth: 1,
    borderBottomColor: BlackColor,
    marginVertical: 10,
  },
  input: {
    fontSize: 16,
    textAlign: "center", // Centers text
    paddingVertical: 10,
    color: BlackColor,
  },
});

export default CustomTextInput;
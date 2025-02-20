import { StyleSheet } from "react-native";
import { BlackColor, SelectionColor, WhiteColor } from "../../utils/colorCodes";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: WhiteColor,
    },
    listWrapper: {
      width: "100%",
      alignItems: "center",
      margin: 10,
      paddingHorizontal: 15,
    },
    listContainer: {
      flexDirection: "row",
      paddingVertical: 10,
    },
    tab: {
      backgroundColor: WhiteColor,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 10,
      marginLeft: 10,
      shadowColor: BlackColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
    },
    tabText: {
      fontSize: 16,
    },
    selectedTab: {
      fontWeight: "bold",
      borderBottomColor: BlackColor,
      backgroundColor: SelectionColor,
    },
    buttonWrapper: {
      width: "70%",
      alignSelf: "center",
      marginTop: 20,
    },
  });

  export default styles;
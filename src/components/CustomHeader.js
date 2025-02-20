import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import BackImage from "../assets/icons/arrow_back.png";

import {
  MainHeadText,
  ModalColor,
  PrimaryBackground,
  WhiteColor,
} from "../utils/colorCodes";

const TabHeader = (props) => {
  const { backRequired, navigation, screenName } = props;

  return (
    <View style={[styles.tabHeaderContainer, styles.tabHeaderBorderShadow]}>
      <View style={styles.leftView}>
        {backRequired && (
          <TouchableOpacity
            style={styles.backImageContainer}
            activeOpacity={1}
            onPress={() => navigation.goBack()}
          >
            <Image style={styles.backImage} source={BackImage} />
          </TouchableOpacity>
        )}
        <Text style={styles.textStyle} numberOfLines={1}>
          {screenName}
        </Text>
      </View>
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  tabHeaderContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: WhiteColor,
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: ModalColor,
    shadowRadius: 3,
    elevation: 5,
  },
  textStyle: {
    fontSize: 20,
    color: MainHeadText,
    fontWeight: "700",
  },
  leftView: {
    flexDirection: "row",
    alignItems: "center",
  },
  backImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  tabHeaderBorderShadow: {
    shadowColor: PrimaryBackground,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    // elevation: 3
  },
});

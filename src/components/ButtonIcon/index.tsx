import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/colors";
import { Icon } from "../Icon";

export const ButtonIcon = ({
  text,
  iconType,
  iconName,
  iconColor,
  iconSize,
  textColor,
  textSize,
  isBold,
  onPress,
  paddingHorizontal,
  paddingVertical,
  activeOpacity,
}: {
  text: String;
  iconType: String;
  iconName: String;
  iconColor: String;
  iconSize: number;
  textColor: String;
  textSize: number;
  isBold: boolean;
  onPress: any;
  paddingHorizontal: number;
  paddingVertical: number;
  activeOpacity: number;
}): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.5}
      onPress={() => {
        onPress !== undefined ? onPress() : console.log("Green Native");
      }}
      style={{
        paddingHorizontal: paddingHorizontal || 0,
        paddingVertical: paddingVertical || 0,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon
        type={iconType || "Ionicons"}
        name={iconName || "chevron-back"}
        size={iconSize || 26}
        color={iconColor || Colors.primaryColor}
      />
      <Text
        style={{
          marginLeft: 5,
          fontSize: textSize || 14,
          color: textColor || Colors.primaryColor,
          fontWeight: isBold ? "bold" : "normal" || "normal",
        }}
      >
        {text || ""}
      </Text>
    </TouchableOpacity>
  );
};

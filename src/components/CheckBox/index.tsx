import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "../Icon";
import { Colors } from "../../styles/colors";

export const CheckBox = ({
  checked,
  text,
  iconType,
  iconName,
  iconCheckedName,
  iconColor,
  iconCheckedColor,
  iconSize,
  textSize,
  textColor,
  onPress,
  activeOpacity,
}: {
  checked: boolean;
  text: string;
  iconType: string;
  iconName: string;
  iconCheckedName: string;
  iconColor: string;
  iconCheckedColor: string;
  iconSize: number;
  textSize: number;
  textColor: string;
  onPress: any;
  activeOpacity: number;
}): JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.5}
      onPress={() => {
        onPress !== undefined ? onPress() : console.log("Green Native");
      }}
      style={{ flexDirection: "row", alignItems: "center" }}
    >
      <Icon
        type={iconType || "MaterialCommunityIcons"}
        name={
          !checked
            ? iconName || "checkbox-blank-outline"
            : iconCheckedName || "checkbox-marked"
        }
        color={
          !checked
            ? iconColor || Colors.blueGrey
            : iconCheckedColor || Colors.primaryColor
        }
        size={iconSize || 30}
      />
      <Text
        style={{
          fontSize: textSize || 16,
          color: textColor || Colors.primaryColor,
          marginLeft: 5,
        }}
      >
        {text || ""}
      </Text>
    </TouchableOpacity>
  );
};

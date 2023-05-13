import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/colors";
import React from "react";

export const Button = ({
  text,
  width,
  height,
  background,
  textColor,
  textBold,
  fontSize,
  radius,
  boder,
  boderColor,
  isOutLine,
  isDark,
  isLight,
  onPress,
}: {
  text: string;
  width: number;
  height: number;
  background: string;
  textColor: string;
  textBold: boolean;
  fontSize: number;
  radius: number;
  boder: number;
  boderColor: string;
  isOutLine: boolean;
  isDark: boolean;
  isLight: boolean;
  onPress: any;
}): JSX.Element => {
  return (
    <View
      style={{
        backgroundColor: isDark
          ? Colors.black
          : isLight
            ? Colors.white
            : Colors.transparent,
        borderRadius: radius || 0,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          onPress !== undefined ? onPress() : console.log("cc");
        }}
        activeOpacity={0.5}
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          alignItems: "center",
          justifyContent: "center",
          width: width || undefined,
          height: height || undefined,
          borderRadius: radius || 0,
          backgroundColor: isOutLine
            ? Colors.transparent
            : background || Colors.black,
          borderWidth: isOutLine !== undefined ? boder || 1 : boder || 0,
          borderColor: boderColor || Colors.black,
        }}
      >
        <Text
          style={{
            color: isOutLine
              ? textColor || Colors.black
              : textColor || Colors.white || Colors.white,
            fontWeight: textBold ? "bold" : "normal" || "normal",
            fontSize: fontSize || 14,
            textAlign: "center",
          }}
        >
          {text || "BUTTON"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

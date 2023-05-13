import React from "react";
import { View, Animated, Text, TouchableOpacity } from "react-native";
import {
  animationPress,
  animationPressIn,
  animationPressInLarge,
  animationPressOut,
} from "./animation";

export const AnimationButton = ({
  text,
  color,
  height,
  width,
  fontSize,
  background,
  CustomComponents,
  radius,
  onPress,
  isBold,
  paddingHorizontal,
  paddingVertical,
  fontFamily,
  animation,
}: {
  text: string;
  color: string;
  height: any;
  width: any;
  fontSize: number;
  background: string;
  CustomComponents: any;
  radius: number;
  onPress: any;
  isBold: boolean;
  paddingHorizontal: number;
  paddingVertical: number;
  fontFamily: string;
  animation: string;
}): any => {
  let ANIM_PRESS = new Animated.Value(1);

  return (
    <Animated.View
      style={{
        transform: [{ scale: ANIM_PRESS }],
        borderRadius: radius || 0,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPressIn={() => {
          animation === "zoom-out"
            ? animationPressInLarge(ANIM_PRESS)
            : animationPressIn(ANIM_PRESS);
        }}
        onPressOut={() => {
          animationPressOut(ANIM_PRESS);
        }}
        onPress={() => {
          animationPress(ANIM_PRESS, animation, () => {
            onPress !== undefined ? onPress() : console.log("Green Native");
          });
        }}
      >
        {CustomComponents !== undefined ? (
          <CustomComponents />
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: width || undefined,
              height: height || undefined,
              backgroundColor: background || "#28C953",
              borderRadius: radius || 0,
              paddingHorizontal: paddingHorizontal || 5,
              paddingVertical: paddingVertical || 5,
            }}
          >
            <Text
              style={{
                fontSize: fontSize || 16,
                color: color || "#fff",
                fontWeight: isBold ? "bold" : "normal",
                fontFamily: fontFamily,
              }}
            >
              {text || "Green Native"}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

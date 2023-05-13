import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Colors } from "../../styles/colors";
import { windowWidth, windowHeight } from "../../config";

export const Spinner = ({
  type,
  transparent,
  width,
  height,
  color,
  size,
}: {
  type: string;
  transparent: boolean;
  width: number;
  height: number;
  color: string;
  size: number;
}): JSX.Element => {
  return (
    <View
      style={{
        width:
          type === "full" || type === "Full" || type === "fullscreen"
            ? windowWidth
            : width !== undefined && width !== undefined && width !== NaN
            ? width
            : "100%",
        height:
          type === "full" || type === "Full" || type === "fullscreen"
            ? windowHeight
            : height !== undefined && height !== undefined && height !== NaN
            ? height
            : "100%",
        backgroundColor:
          transparent === true ? Colors.transparent : Colors.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator
        size={size || "large"}
        color={
          color !== undefined && color !== undefined && color != "NaN"
            ? color
            : Colors.primaryColor
        }
      />
    </View>
  );
};

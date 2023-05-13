import { Animated } from "react-native";

export const animationPressIn = (animated: any): any => {
  Animated.timing(animated, {
    toValue: 0.7,
    useNativeDriver: true,
    duration: 1000,
  }).start();
};

export const animationPressInLarge = (animated: any): any => {
  Animated.timing(animated, {
    toValue: 1.3,
    useNativeDriver: true,
    duration: 1000,
  }).start();
};

export const animationPressOut = (animated: any): any => {
  Animated.timing(animated, {
    toValue: 1,
    useNativeDriver: true,
    duration: 500,
  }).start();
};

export const animationPress = async (
  animated: any,
  type: string,
  onPress: any
): Promise<any> => {
  if (type === "zoom-out") {
    Animated.timing(animated, {
      toValue: 1.1,
      useNativeDriver: true,
      duration: 100,
    }).start();
  } else {
    Animated.timing(animated, {
      toValue: 0.9,
      useNativeDriver: true,
      duration: 100,
    }).start();
  }

  await new Promise((a) => setTimeout(a, 100));

  Animated.timing(animated, {
    toValue: 1,
    useNativeDriver: true,
    duration: 100,
  }).start();

  await new Promise((a) => setTimeout(a, 100));

  onPress();
};

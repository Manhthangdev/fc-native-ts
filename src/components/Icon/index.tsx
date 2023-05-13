import * as React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Zocial from "react-native-vector-icons/Zocial";

const Icon = ({
  type,
  name,
  size,
  color,
}: {
  type: string;
  name: string;
  size: number;
  color: string;
}): JSX.Element => {
  return type === "AntDesign" || type === "antdesign" ? (
    <AntDesign
      name={name !== undefined && name !== null ? name : "smileo"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Entypo" || type === "entypo" ? (
    <Entypo
      name={name !== undefined && name !== null ? name : "hand-o-right"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "EvilIcons" || type === "evilIcons" ? (
    <EvilIcons
      name={name !== undefined && name !== null ? name : "hand-o-right"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Feather" || type === "feather" ? (
    <Feather
      name={name !== undefined && name !== null ? name : "hand-o-right"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "FontAwesome" || type === "fontAwesome" ? (
    <FontAwesome
      name={name !== undefined && name !== null ? name : "bomb"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "FontAwesome5" || type === "fontAwesome5" ? (
    <FontAwesome5
      name={name !== undefined && name !== null ? name : "star"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Fontisto" || type === "fontisto" ? (
    <Fontisto
      name={name !== undefined && name !== null ? name : "flask-sharp"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Foundation" || type === "foundation" ? (
    <Foundation
      name={name !== undefined && name !== null ? name : "flask-sharp"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Ionicons" || type === "ionicons" ? (
    <Ionicons
      name={name !== undefined && name !== null ? name : "eco"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "MaterialIcons" || type === "materialIcons" ? (
    <MaterialIcons
      name={name !== undefined && name !== null ? name : "eco"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "MaterialCommunityIcons" || type === "materialcommunityicons" ? (
    <MaterialCommunityIcons
      name={name !== undefined && name !== null ? name : "alpha-c-circle"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "Octicons" || type === "octicons" ? (
    <Octicons
      name={name !== undefined && name !== null ? name : "pin"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : type === "SimpleLineIcons" || type === "simpleLineIcons" ? (
    <SimpleLineIcons
      name={name !== undefined && name !== null ? name : "pin"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  ) : (
    <Zocial
      name={name !== undefined && name !== null ? name : "flask-sharp"}
      size={size !== undefined && size !== null ? size : 18}
      color={color !== undefined && color !== null ? color : "#28C953"}
    />
  );
};

export {
  Icon,
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
  Zocial
};
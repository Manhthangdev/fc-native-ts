import {
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "./src/config";
import { Colors } from "./src/styles/colors";
import { GreenStyles } from "./src/styles/greenStyles";
import { ErrorNotification } from "./src/components/ErrorNotification";
import { Icon } from "./src/components/Icon";
import { Button } from "./src/components/Button";
import { CheckBox } from "./src/components/CheckBox";
import { Spinner } from "./src/components/Spinner";
import { ButtonIcon } from "./src/components/ButtonIcon";
import { AnimationButton } from "./src/components/AnimationButton";
import {
  saveToStorage,
  getFromStorage,
  is18x9,
  isIOS,
  isNull,
  randomNonRepeat,
  PhoneCall,
  parseMoney,
} from "./src/function";
import { useKeyboard } from "./src/hook/useKeyboard";

export {
  Colors,
  ErrorNotification,
  screenWidth,
  screenHeight,
  windowWidth,
  windowHeight,
  Icon,
  Button,
  CheckBox,
  AnimationButton,
  saveToStorage,
  getFromStorage,
  is18x9,
  isIOS,
  isNull,
  randomNonRepeat,
  useKeyboard,
  Spinner,
  ButtonIcon,
  GreenStyles,
  PhoneCall,
  parseMoney,
};

import {
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "./src/config";
import { Colors } from "./src/styles/colors";
import { ErrorNotification } from "./src/components/ErrorNotification";
import { Icon } from "./src/components/Icon";
import { Button } from "./src/components/Button";
import { CheckBox } from "./src/components/CheckBox";
import { Spinner } from "./src/components/Spinner";
import { ButtonIcon } from "./src/components/ButtonIcon";
import { AnimationButton } from "./src/components/AnimationButton";
import { CustomStyles } from "./src/styles/CustomStyles";
import { TextInputMoney } from "./src/components/TextInputMoney";
import { TextInputZipCode } from "./src/components/TextInputZipCode";
import { Choose2Days } from "./src/components/Calendar";
import { PrimaryButton } from "./src/components/PrimaryButton";
import { PrimaryInput } from "./src/components/PrimaryInput";

import {
  formatDate,
  avatarOptions,
  parseToMoney,
  formatMoney,
  getVNDate,
  getVND,
  toast,
  randomNonRepeat,
  isIOS,
  isNull,
  is18x9,
  PhoneCall,
  parseMoney,
  convertHTML,
  isImageFile,
  wait,
  parseJwt,
  getIndex,
  checkStatus,
  isNumber,
  getPercent,
  handleRemoveSpace,
  checkUserNameVNese,
  checkImages
} from "./src/function";
import { useKeyboard } from "./src/hook/useKeyboard";
import {
  sz8,
  sz10,
  sz12,
  sz14,
  sz16,
  sz18,
  sz20,
  sz22,
  sz24,
  sz26,
  sz28,
  sz30,
  sz32,
  sz34,
  sz36,
  sz38,
  sz40,
  sz56,
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
} from "./src/components/responsive";

export {
  Colors,
  screenWidth,
  screenHeight,
  windowWidth,
  windowHeight,
  CustomStyles,
  formatDate,
  avatarOptions,
  parseToMoney,
  getVNDate,
  formatMoney,
  getVND,
  toast,
  Choose2Days,
  TextInputMoney,
  TextInputZipCode,
  Button,
  CheckBox,
  AnimationButton,
  ErrorNotification,
  Spinner,
  ButtonIcon,
  Icon,
  randomNonRepeat,
  isIOS,
  isNull,
  is18x9,
  PhoneCall,
  parseMoney,
  convertHTML,
  isImageFile,
  wait,
  parseJwt,
  getIndex,
  checkStatus,
  isNumber,
  getPercent,
  handleRemoveSpace,
  checkUserNameVNese,
  useKeyboard,
  checkImages,
  PrimaryButton,
  PrimaryInput,
  sz8,
  sz10,
  sz12,
  sz14,
  sz16,
  sz18,
  sz20,
  sz22,
  sz24,
  sz26,
  sz28,
  sz30,
  sz32,
  sz34,
  sz36,
  sz38,
  sz40,
  sz56,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener
};

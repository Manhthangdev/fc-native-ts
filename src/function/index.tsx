import { Platform, Dimensions, Linking } from "react-native";
import { Buffer } from 'buffer'
import SimpleToast from 'react-native-simple-toast';
import moment from 'moment';

const randomNonRepeat = (max: number): any => {
  var arrayFinal: any = [];
  for (let i = 0; i < max; i++) {
    var result: any = checkExist(arrayFinal, max);
    arrayFinal.push(result);
  }
  return arrayFinal;
};

const checkExist = (arrayFinal: any, max: number): any => {
  var arrayVirtual: any = arrayFinal;
  var rand: number = Math.floor(Math.random() * max);
  var flag: number = 0;
  for (var i = 0; i < arrayFinal.max; i++) {
    if (arrayVirtual[i] === rand) {
      flag = 1;
    }
  }
  if (flag === 0) {
    return rand;
  } else {
    //
  }
};

const isIOS = (): boolean => {
  return Platform.OS === "ios" ? true : false;
};

const isNull = (value: any): boolean => {
  if (value == "" || value == null || value == undefined || Number.isNaN(value)) {
    return true;
  } else {
    return false;
  }
};

const is18x9 = (): boolean => {
  const widthScreen: number = Dimensions.get("window").width;
  const heightScreen: number = Dimensions.get("window").height;
  if (heightScreen / widthScreen > 1.8) {
    return true;
  } else {
    return false;
  }
};

const PhoneCall = (phoneNumber: string): void => {
  console.log(phoneNumber);
  isIOS()
    ? Linking.openURL(`telprompt:${phoneNumber}`)
    : Linking.openURL(`tel:${phoneNumber}`);
};

const parseMoney = (value: string): any => {
  var temp: string = value + "";
  var response: string = "";
  var flag: number = 0;
  for (let index = temp.length - 1; index > -1; index--) {
    response = response + temp[index];
    if (flag == 2 && index > 0) {
      response = response + ".";
      flag = -1;
    }
    flag++;
  }
  let arrayText: any = response.split("");
  arrayText.reverse();
  arrayText.join("");
  return arrayText;
};

const parseToMoney = (value: any) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const getVND = (price: number | null, suffix: string = ' VNĐ') => {
  if (price === null) return 0;

  if (Number.isInteger(price)) {
    return (
      (price?.toString() || '0').replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix
    );
  }
  return price + suffix;
};

const toast = (text: string) => {
  SimpleToast.show(text, SimpleToast.LONG);
};

const convertHTML = (text: any) => {
  var strQuestion = text
    .replace(/<[^>]+>/g, '')
    .replace('&nbsp;', '')
    .replace(' > .', '');
  return strQuestion;
};

const isImageFile = (path: any) => {
  const allowedFormats = ['png', 'jpg', 'jpeg', 'gif'];
  const fileExtension = path?.split('.').pop();
  return allowedFormats.includes(fileExtension); // true flase
}

const getIndex = (data: any, item: any) => {
  return data.indexOf(item);
};

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

const parseJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const buf = Buffer.from(base64, 'base64').toString('utf-8')
  const payload = JSON.parse(buf)
  return {
    userInfo: JSON.parse(payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata']),
    exp: payload.exp,
  }
}

const checkStatus = (item: any, array: any) => {
  const statusObj = array[item?.Status?.toString()] || array["default"];
  return statusObj;
};

// kiểm tra có phải là số hay không
const isNumber = (val: string) => {
  if (val.match(/^-?[0-9]\d*([,.]\d+)?$/)) return true;
  return false;
};
// format phần trăm
const getPercent = (price: number, suffix: string = " %") =>
  (price?.toString() || "0") + suffix;

// xóa khoảng trắng
const handleRemoveSpace = (str: string) => {
  if (typeof str !== "string") return str;
  return str.replace(/\s/g, " ");
}

const checkUserNameVNese = (value: string) => {
  const template = [
    "á",
    "à",
    "ả",
    "ã",
    "ạ",
    "â",
    "ấ",
    "ầ",
    "ẩ",
    "ẫ",
    "ậ",
    "ă",
    "ắ",
    "ằ",
    "ẳ",
    "ẵ",
    "ặ",
    "đ",
    "é",
    "è",
    "ẻ",
    "ẽ",
    "ẹ",
    "ê",
    "ế",
    "ề",
    "ể",
    "ễ",
    "ệ",
    "í",
    "ì",
    "ỉ",
    "ĩ",
    "ị",
    "ó",
    "ò",
    "ỏ",
    "õ",
    "ọ",
    "ô",
    "ố",
    "ồ",
    "ổ",
    "ỗ",
    "ộ",
    "ơ",
    "ớ",
    "ờ",
    "ở",
    "ỡ",
    "ợ",
    "ú",
    "ù",
    "ủ",
    "ũ",
    "ụ",
    "ư",
    "ứ",
    "ừ",
    "ử",
    "ữ",
    "ự",
    "ý",
    "ỳ",
    "ỷ",
    "ỹ",
    "ỵ",
  ];
  const result = template.find((item) => value.includes(item));
  return result;
}

const checkImages = (image: any) => {
  let processedImage = image;

  if (!image.includes('https://') && !image.includes('http://') && !image.includes('http')) {
    processedImage = `https://${image}`;
  } else if (image.includes('http://')) {
    const split = image?.split('://');
    processedImage = `${split?.[0]}s://${split?.[1]}`;
  }

  processedImage = processedImage.replace('_.webp', '').replace('.jpg._web', '');
  processedImage = decodeURIComponent(processedImage);

  return processedImage;
}

const getVNDate = (date: Date, format: string = "DD/MM/YYYY HH:mm:ss") => {
  if (!date) return "--";
  return moment(date).format(format);
};

const avatarOptions: any = {
  mediaType: 'photo',
  quality: 1,
  maxWidth: 2000,
  maxHeight: 2000,
};

const formatDate = (date: any) => {
  let dArr = date.split('-'); // ex input "2010-01-18"
  return dArr[2] + '/' + dArr[1] + '/' + dArr[0]; //ex out: "18/01/10"
};

function formatMoney(number: any): string {
  const numero = String(number)
    .replace(/\D/g, "")
    .replace(/^0+/, "");

  let counter = 1;
  let isCommaFound = false;

  const formattedStringReversed = Array.from(numero.toString())
    .reverse()
    .reduce((acc, i, index, arr) => {
      if (counter === 3 && !isCommaFound && arr.length > 3) {
        acc = acc + i + ".";
        isCommaFound = true;
        counter = 0;
      } else if (counter === 3 && arr.length !== index + 1) {
        acc = acc + i + ".";
        counter = 0;
      } else {
        acc = acc + i;
      }

      counter++;
      return acc;
    }, "");

  let formattedNumber = Array.from(formattedStringReversed)
    .reverse()
    .join("");

  if (formattedNumber.length === 2) {
    formattedNumber = "0." + formattedNumber;
  } else if (formattedNumber.length === 1) {
    formattedNumber = "0.0" + formattedNumber;
  }

  return formattedNumber;
}

export {
  formatDate,
  avatarOptions,
  parseToMoney,
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
  checkImages,
  formatMoney
};



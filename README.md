### Intall

```
npm i fc-native-ts react-native-vector-icons
```

```
yarn add fc-native-ts react-native-vector-icons
```

Require

```
npx react-native-link
```

### Icon

```javascript
import { Icon } from "fc-native-ts";

<Icon type="AntDesign" name="stepforward" size={30} color={"red"} />;
```

#### Available props

Require react-native-vector-icons

Icons can be found at: https://oblador.github.io/react-native-vector-icons

| Name  | Type                              | Default     |
| ----- | --------------------------------- | ----------- |
| type  | string: AntDesign, FontAwesome... | Ionicons    |
| name  | string: camera, filter...         | flask-sharp |
| size  | number                            | 18          |
| color | color                             | #28C953     |

#### Android
Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Edit android/settings.gradle to look like this (without the +):

```
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Name of the font files you want to copy
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

Edit android/app/build.gradle (note: app folder) to look like this:

```
apply plugin: 'com.android.application'

android {
  ...
}

dependencies {
  implementation fileTree(dir: "libs", include: ["*.jar"])
  //noinspection GradleDynamicVersion
  implementation "com.facebook.react:react-native:+"  // From node_modules

+ implementation project(':react-native-vector-icons')
}
```


### TextInput

```javascript
import { TextInputMoney , TextInputZipCode } from "fc-native-ts";

//...

export default function TextInputMoney() {
  const [text, setText] = useState()

  return (
      <TextInputMoney 
        // dont forget to set the "value" and "onChangeText" props
        value={text} 
        style={styles.input}
        onChangeText={setText}
      />
  );
}
```

#### Zip Code
Mask: 99.999-999

Sample code
```
  <TextInputZipCode 
    // dont forget to set the "value" and "onChangeText" props
    value={text} 
    style={styles.input}
    onChangeText={setText}
  />
```
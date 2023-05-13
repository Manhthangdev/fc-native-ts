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

<Icon type="Ionicons" name="eye" size={30} color={"red"} />;
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



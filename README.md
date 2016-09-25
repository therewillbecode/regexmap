# regexmap v1.0.2

Map regex key value pairs to their matches

## :cloud: Installation

```
$ npm install --save regexmap
```

## Example

```
const regexmap = require("regexmap").map;

let regexObject = {
                    "name": /alexa/, 
                    "age": /\d{2}/ 
                   };

let stringToMatch = "My name is alexa and I am 18.";

regexmap.map(regexObject, stringToMatch);
//
// result = {
//            "name": "alexa", 
//            "age": "18" 
//          };
//
```


### Contributions are welcome

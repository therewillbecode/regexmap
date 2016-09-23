# regexmap v1.0.0

Map regex key value pairs to their matches

## :cloud: Installation

```
$ npm i --save regexmap
```

## Example

```
const mapregex = require("mapregex").map;


let regexObject = {
                    "name": /alexa/, 
                    "age": /\d{2}/ 
                   };

let stringToMatch = "My name is Alexa and I am 18.";

regexmap.map(regexObject, stringToMatch);
//
// result = {
//            "name": "alexa", 
//            "age": "18" 
//          };
//
```
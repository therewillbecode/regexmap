# regexmap v1.1.0

[![Coverage Status](https://coveralls.io/repos/therewillbecode/regexmap/badge.svg?branch=master)](https://coveralls.io/r/therewillbecode/regexmap/?branch=master)

Map regex key value pairs to their matches

## :cloud: Installation

```
$ npm install --save regexmap
```

## Example

```
const regexmap = require("regexmap");

let regexObject = {
                    "name": /alexa/, 
                    "age": /\d{2}/ 
                   };

let stringToMatch = "My name is alexa and I am 18.";

regexmap(regexObject, stringToMatch);
//
// {
//   name: [ 'alexa', 
//           index: 11, 
//           input: 'My name is alexa and I am 18.' ],
// 
//   age:  [ '18',
//           index: 26,
//           input: 'My name is alexa and I am 18.' ]
// }


### Contributions are welcome

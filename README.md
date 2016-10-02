# regexmap 

Map regex key value pairs to their matches

[![Coverage Status](https://coveralls.io/repos/github/therewillbecode/regexmap/badge.svg?branch=master)](https://coveralls.io/github/therewillbecode/regexmap?branch=master)


```js
const regexmap = require("regexmap");

let regexObject = {
                    "name": /alexa/, 
                    "age": /\d{2}/ 
                   };

let stringToMatch = "My name is alexa and I am 18.";

regexmap(regexObject, stringToMatch);
```

#### output
```js
 {
   name: [ 'alexa', 
           index: 11, 
           input: 'My name is alexa and I am 18.' ],
 
   age:  [ '18',
           index: 26,
           input: 'My name is alexa and I am 18.' ]
 }
```

## :cloud: Installation

```bash
$ npm install regexmap
```

#### Matching an array of strings to multiple regexps

```js
let stringsToMatch = ["My name is alexa and I am 18.", "My name is Tom and I am 25"];

regexmap(regexObject, stringsToMatch);
```
#### output
```js
{ 
    name: 
        [ [ 'alexa', index: 11, input: 'My name is alexa and I am 18.' ],
          null ],
    age: 
        [ [ '18', index: 26, input: 'My name is alexa and I am 18.' ],
        [ '25', index: 24, input: 'My name is Tom and I am 25' ] ] 
}
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

### Contributions are welcome

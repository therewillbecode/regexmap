'use strict';

  let privateVariable = 10;

  let privateMethod = () => {
    console.log('Inside a private method!');
    privateVariable++;
  }

  let getData = () => {
    console.log('This is a method I want to expose!');
  }


if(4) {
     module.exports = {
           privateMethod: privateMethod,
           extracts: getData
     } 
} else {
    module.exports = {
         extracts: getData    }
}
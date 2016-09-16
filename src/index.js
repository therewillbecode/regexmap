'use strict';
var TESTING=null;

  let privateVariable = 10;

  let privateMethod = () => {
    console.log('Inside a private method!');
    privateVariable++;
  }

  let getDataPublic = () => {
    console.log('This is a method I want to expose!');
  }


if(TESTING) {
     module.exports = {
           privateMethod: privateMethod,
           getData: getDataPublic
     } 
} else {
    module.exports = {
         public: getDataPublic    }
}
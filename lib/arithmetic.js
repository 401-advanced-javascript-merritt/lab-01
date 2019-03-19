'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a,b) {
  return checkType(a,b) === null ? null: a+b;
};

arithmetic.subtract = function (a,b) {
  return checkType(a,b) === null ? null: a-b;
};

arithmetic.multiply = function (a,b){
  return checkType(a,b) === null ? null: a*b;
};

arithmetic.divide = function (a,b){
  if (b === 0){return undefined};
  return checkType(a,b) === null ? null: a/b;
};


let checkType = (a,b) => {
  if(typeof a !== "number" || typeof b !== "number") {return null;}
};
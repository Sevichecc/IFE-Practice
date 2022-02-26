'use strict';

///////////////////// TASK 01
console.log(`——————————TASK 01`);
const weight = 78;
const height = 1.68;

const BMI = Math.round(weight / height ** 2);
console.log(`BMI:${BMI}`);

///////////////////// TASK 02

console.log(`——————————TASK 02`);
function calculateSum(price, vip) {
  price = vip ? price * 0.98 : price;

  if (price >= 300) {
    price -= 30;
  } else if (price >= 200) {
    price -= 10;
  } else if (price >= 100) {
    price -= 5;
  }
  return price;
}

console.log(calculateSum(300, false)); //->270
console.log(calculateSum(300, true)); //->284

///////////////////// TASK 03

console.log(`——————————TASK 03`);
function isNumeric(num) {
  let numCheck = typeof num === 'number' ? 'true' : 'false';
  return numCheck;
}

//测试用例
console.log(isNumeric('0')); // ->false
console.log(isNumeric(0)); // ->true
console.log(isNumeric(null)); // ->false
console.log(isNumeric('')); // ->false
console.log(isNumeric(' ')); // ->false

///////////////////// TASK 04
console.log(`——————————TASK 04`);

function isUndefined(arg) {
  const unCheck = typeof arg === 'undefined' ? 'true' : 'false';
  return unCheck;
}

function isNull(arg) {
  if (arg === null) {
    return true;
  } else {
    return false;
  }
}

// 测试用例
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false

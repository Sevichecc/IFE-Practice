'use strict'
//////////////////////////////函数基础
//////TASK 1

function showMessage1() {
    return "\"hello,stranger!\"";
}
console.log(showMessage1());

///////TASK 2

function showMessage2(name) {
    return `\"hello,${name}!\"`;
}
document.write(showMessage2('Jack'));

//////////////////////////////函数表达式 & 回调函数
//////Task 1
const showMessage3 = function(name) {
    return `\"hello,${name}3\"`;
}
console.log(showMessage3('Jack'));

/////Task 2

setTimeout(
    (function(name) {
        console.log(`\"hello,${name}\"`);
    }), 1000, 'Jack')

/////Task3

const success = function() {
    console.log(`体温正常，打卡成功！`);
}
const fail = function() {
    console.log(`体温异常，打卡失败！`);
}

function temperatureBodyDetection(success, fail) {
    const temper = Number(prompt("请输入您的体温"));
    if (temper <= 38 && temper >= 36)
        success() /*执行成功函数*/
    else
        fail() /*执行失败函数*/
}
temperatureBodyDetection(success, fail) /**调用打卡函数**/
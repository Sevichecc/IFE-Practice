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
const showMessage = function(name) {
        return `\"hello,${name}3\"`;
    }
    //1
    // setTimeout(
    //     (function(name) {
    //         document.write(showMessage3(name));;
    //     }), 1000, 'Jack')

//2
setTimeout(() => {
    document.write(showMessage('Jack'));
}, 1000);

/////Task2

const success = function() {
    document.write(`体温正常，打卡成功！`);
}
const fail = function() {
    document.write(`体温异常，打卡失败！`);
}

function temperatureBodyDetection(success, fail) {
    const temper = Number(prompt("请输入您的体温"));
    if (temper <= 38 && temper >= 36)
        success() /*执行成功函数*/
    else
        fail() /*执行失败函数*/
}
temperatureBodyDetection(success, fail) /**调用打卡函数**/
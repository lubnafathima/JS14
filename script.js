// debugger;

// function foo() {
//   return this; //defined
// }

// const bar = function () {
//   return this; //defined
// }

// const fun = () => {
//   return this; //undefined
// }

const obj = {
  first: "Jane",
  newFun: function () {
    return this;
  }
}

// console.log(foo());
// console.log(bar());
// console.log(fun());
console.log(obj.first);
console.log(obj.newFun());
console.log(this)
// console.log(obj.newFun());
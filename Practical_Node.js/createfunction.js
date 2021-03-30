function f() {
  console.log("Hi");
  return true;
}

const f = function () {
  console.log("Hi");
  return true;
};

const f = () => {
  console.log("Hi");
  return true;
};

const f = function f() {
  console.log("Hi");
  return true;
};

const f = function () {
  console.log("Boo");
};
f.boo = 1;
f();
console.log(f.boo);

const convertNum = function(num) {
  return num + 10
}
const processNum =function(num, fn){
  return fn(num)
}
processNum(10, convertNum)


const processNum = function(num, fn){
  return fn(num)
}
processNum(10, convertNum);

const fWithImplicitReturn = (a,b) => a + b
let arr = []

// let arr2 [1, 'Hi', {a:2}, () => {console.log('boo')}]
let arr3 = new Array()
let arr4 = new Array(1,'Hi', {a:2}, () => {console.log('boo')})
arr4[3]()

//High Order function
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

// console.log(multiplyBy2(5));
// console.log(multiplyBy2(4));

const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2)
console.log(result);

function createFunction() {
  let greeting = "hello"
  return greeting
}

// const function1 = createFunction()
// console.log(function1)

// console.log(createFunction())

// //Closure Instance
// let counter = 0;
// function outer() {
//   let counter = 0;
//   function increment() {
//     counter++;
//     console.log(counter);
//   }
//   return increment
// }

// const myNewFunction = outer();
// myNewFunction();
// myNewFunction();

// const anotherFunction = outer();
// anotherFunction();
// anotherFunction();

function addByX(x) {
  return function (y) {
    return x + y;
  }
}

const addByTwo = addByX(2);
console.log(addByTwo(3));
console.log(addByTwo(4));

function once(func) {
  return function () {
    return func
  }
}

const onceFunc = once(addByTwo(4))
console.log(onceFunc());

function after(times, callback) {
  let timesCalled = 0;

  return function (input) {
    timesCalled++;

    if (timesCalled === times) {
      return callback(input);
    }
  };
}

const called = function (string) { return ('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

function printHello() {
  console.log('hello');
}

console.log(setTimeout(printHello, 5000))

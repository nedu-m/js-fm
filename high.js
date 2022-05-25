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
// console.log(addByTwo(3));
// console.log(addByTwo(4));

function once(func) {
  return function () {
    return func
  }
}

const onceFunc = once(addByTwo(4))
// console.log(onceFunc());

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
//console.log(afterCalled('world')); // -> 'hello world' is printed

function printHello() {
  console.log('hello');
}

//console.log(setTimeout(printHello, 5000))

function delay(callback, milliseconds) {
  return function () {
    setTimeout(callback, milliseconds)
  };
}

let count = 0;
//console.log(count)
//setTimeout(() => console.log(count), 1000)

function defineFirstArg(callback, a) {
  return function (b) {
    return callback(a, b);
  }
}

const subtract = function (big, small) {
  return big - small;
};

const subFrom20 = defineFirstArg(subtract, 20)
//console.log(subFrom20(5));


//Callback Queue and Event loop
function printHello() {
  console.log('hello');
}

function hiddenHello() {
  console.log('hidden hello');
}

//setTimeout(printHello, 0);

//hiddenHello();
//console.log('Yup, still running');

//Async function
function hiAndGoodbye() {
  console.log('hi');
  setTimeout(() => console.log('goodbye'), 2000)
}

//hiAndGoodbye();

function brokenHi() {
  function hi() {
    console.log('hi again')
  }

  setInterval(hi, 1000);
}

//brokenHi();

//Clear interval
function hiForNow() {
  function hi() {
    console.log('hi again')
  }

  let hiId = setInterval(hi, 1000);
  setTimeout(() => clearInterval(hiId), 5000);
}
//hiForNow()

function everyXsecsForYsecs(func, interval, duration) {
  const id = setInterval(func, interval * 1000);
  function clear() {
    clearInterval(id);
  }
  setTimeout(clear, duration * 1000)
}

function start() {
  console.log('This is the end!');
}

//everyXsecsForYsecs(start, 2, 20); 


//Promise
function display(data) {
  console.log(data)
}

const futureData = fetch('some-api');
// futureData.then(display)

//Prototype chain
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () { console.log(`${this.score++}`) },
  login: function () { console.log(`${this.name} logged in`) }
}

const user1 = userCreator('Jon', 16)
// user1.increment();
// user1.login();

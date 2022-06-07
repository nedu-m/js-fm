//This keyword, implicit binding
function ask(question) {
  console.log(this.teacher, question)
}

var teacherA = {
  teacher: "Kyle",
  ask: ask
}

var teacherB = {
  teacher: "Suzy",
  ask: ask
}

// teacherA.ask("Howdy")
// teacherB.ask("Is this implicit binding?")

//Explicit binding
var teacherC = {
  teacher: "Marc",
}

var teacherD = {
  teacher: "Debs",
}

//Arrow functions & Lexical this
var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(() => {
      console.log(this.teacher, question);
    }, 1000);
  },
}

// workshop.ask("Is this lexical 'this'?")

//Class keyword
class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  speak(statement) {
    console.log(this.teacher, statement)
  }
  speakUp(msg) {
    this.speak(msg)
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    super.speakUp(msg.toUpperCase())
  }
}

var deepJS = new Workshop("Marc")
var reactJS = new Workshop("Brian")

var nextJS = new AnotherWorkshop("Kate")

// deepJS.speak("Welcome to FrontendMasters")
// reactJS.speak("Learn React")
// nextJS.speakUp("A react Framework")


//Prototype
deepJS.constructor === Workshop

console.log(deepJS.__proto__ === Workshop.prototype)
console.log(Object.getPrototypeOf(deepJS) === Workshop.prototype)

//Objects link to other objects
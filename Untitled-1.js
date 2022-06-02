//Console.log arrow function
const log = (arg) => console.log(arg)

function callback() {
  function isItBirthDay() {
    const birthDay = Date()
    let todaysDate = new Date()

    if (todaysDate == birthDay) {
      log(`Happy birthday Nedu'm`)
    }
    return false
  }

  setInterval(isItBirthDay, 100)
}

// callback()

function limitedBirthdayWish(func, interval, duration) {
  const id = setInterval(func, interval * 1000)
  function clear() {
    clearInterval(id)
  }

  setTimeout(clear, duration * 1000)
}


function isItBirthDay() {
  const birthDay = Date()
  let todaysDate = new Date()

  if (todaysDate == birthDay) {
    log(`Happy birthday Nedu'm`)
  }
  return false
}

// limitedBirthdayWish(isItBirthDay, 2, 20)

//Lexical scope
var teacher = "Suzy"

function otherTeacher() {
  var teacher = "Kyle"

  function ask(question) {
    console.log(teacher, question)
  }

  ask("Why")
}
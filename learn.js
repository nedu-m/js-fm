//Three pillars of Javascript
//1. Types
var x = null
//console.log(typeof x) // "object"

var v = 42n
//console.log(typeof v)// "bigint"

//Negative zero
function formatTrend(trendRate) {
  var direction =
    (trendRate < 0 || Object.is(trendRate, -0)) ? "⬇" : "⬆";
  return `${direction} ${Math.abs(trendRate)}`
}

// console.log(formatTrend(-3))
// console.log(formatTrend(-0))

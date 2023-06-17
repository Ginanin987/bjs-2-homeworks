"use strict"
function solveEquation(a, b, c) {
  let arr = []
  let d = b ** 2 - 4 * a * c
  if (d == 0) {
    arr.push(-b / (2 * a))
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a))
  }
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "number") {
      continue
    } else if (typeof arguments[i] == "string") {
      arguments[i] = Number(arguments[i])
    } else {
      return false
    }
  }
  let P = percent / 100 / 12
  let S = amount - contribution
  let countPerMonth = S * (P + P / ((1 + P) ** countMonths - 1))
  let countTotal = (countPerMonth * countMonths).toFixed(2)
  return Number(countTotal)
}

function parseCount(value) {
  let parseValue = Number.parseFloat(value)
  if (isNaN(parseValue)) {
    throw new Error("Невалидное значение")
  }
  return parseValue
}

function validateCount(value) {
  try {
    parseCount(value)
  } catch (error) {
    return error
  }
  return parseCount(value)
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3

    if (
      this.side1 + this.side2 < this.side3 ||
      this.side2 + this.side3 < this.side1 ||
      this.side1 + this.side3 < this.side2
    ) {
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }

  get perimeter() {
    let result = this.side1 + this.side2 + this.side3
    return result
  }

  get area() {
    let result = Number(
      Math.sqrt(
        (this.perimeter / 2) *
          (this.perimeter / 2 - this.side1) *
          (this.perimeter / 2 - this.side2) *
          (this.perimeter / 2 - this.side3)
      ).toFixed(3)
    )
    return result
  }
}

function getTriangle(side1, side2, side3) {
  try {
    let result = new Triangle(side1, side2, side3)
    return result
  } catch {
    return {
      area: "Ошибка! Треугольник не существует",
      perimeter: "Ошибка! Треугольник не существует",
    }
  }
}

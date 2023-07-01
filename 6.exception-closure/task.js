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
    return parseCount(value)
  } catch (error) {
    return error
  }
}

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3

    if (
      side1 + side2 < side3 ||
      side2 + side3 < side1 ||
      side1 + side3 < side2
    ) {
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }

  get perimeter() {
    return this.side1 + this.side2 + this.side3
  }

  get area() {
    return Number(
      Math.sqrt(
        (this.perimeter / 2) *
          (this.perimeter / 2 - this.side1) *
          (this.perimeter / 2 - this.side2) *
          (this.perimeter / 2 - this.side3)
      ).toFixed(3)
    )
  }
}

function getTriangle(side1, side2, side3) {
  try {
    return new Triangle(side1, side2, side3)
  } catch {
    return {
      get area() {
        return "Ошибка! Треугольник не существует"
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует"
      },
    }
  }
}

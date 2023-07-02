class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name
    this.releaseDate = releaseDate
    this.pagesCount = pagesCount
    this._state = 100
    this.type = null
  }

  set state(new_state) {
    if (new_state < 0) {
      this._state = 0
    } else if (new_state > 100) {
      this._state = 100
    } else {
      this._state = new_state
    }
  }

  get state() {
    return this._state
  }

  fix() {
    this.state = this._state * 1.5
    return this.state
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
)

console.log(sherlock.releaseDate) //2019
console.log(sherlock.state) //100
sherlock.fix()
console.log(sherlock.state) //100

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine"
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author
    this.type = "book"
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "novel"
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "fantastic"
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount)
    this.type = "detective"
  }
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
)

console.log(picknick.author) //"Аркадий и Борис Стругацкие"
picknick.state = 10
console.log(picknick.state) //10
picknick.fix()
console.log(picknick.state) //15

class Library {
  constructor(name, books) {
    this.name = name
    this.books = []
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    if (this.books.find((item) => item[type] === value)) {
      return this.books.find((item) => item[type] === value)
    } else {
      return null
    }
  }

  giveBookByName(bookName) {
    if (this.findBookBy("name", bookName)) {
      let book = this.findBookBy("name", bookName)
      this.books.splice(this.books.indexOf(book), 1)
      return book
    } else {
      return null
    }
  }
}

const library = new Library("Библиотека имени Ленина")

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
)
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
)
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138))
library.addBook(new Magazine("Мурзилка", 1924, 60))

// console.log(library)

// printItem = new PrintEditionItem("Типовой школьный журнал", 2019, 102)
// // console.log(printItem)
// library.addBook(printItem)
// // console.log(library)
// const firstBook = library.giveBookByName("Типовой школьный журнал")
// console.log(firstBook.name)

// console.log(library.findBookBy("name", "Властелин колец")) //null
// console.log(library.findBookBy("releaseDate", 1924).name) //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length)
// Количество книг до выдачи: 4
library.giveBookByName("Машина времени")

console.log("Количество книг после выдачи: " + library.books.length) //Количество книг после выдачи: 3

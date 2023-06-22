function compareArrays(arr1, arr2) {
  let isEqual =
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  return isEqual
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users
    .filter((user) => user.gender === gender)
    .map((user) => user.age)
    .reduce((previous, current, currentIndex, array) => {
      previous += current
      if (currentIndex === array.length - 1) {
        return previous / array.length
      }
      return previous
    }, 0)
  return result
}

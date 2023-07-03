//Задача № 1
function cachingDecoratorNew(func) {
  let cache = []
  function wrapper(...args) {
    const hash = md5(args)
    let objectInCache = cache.find((item) => item.hash === hash)
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value)
      return "Из кэша: " + objectInCache.value
    }

    let result = func(...args)
    cache.push({hash, value: result})
    if (cache.length > 5) {
      cache.shift()
    }
    console.log("Вычисляем: " + result)
    return "Вычисляем: " + result
  }
  return wrapper
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null
  let hasCalled = false
  wrapper.allCount = 0
  wrapper.count = 0

  function wrapper(...args) {
    wrapper.allCount++
    if (!hasCalled) {
      console.log(wrapper.allCount)
      hasCalled = true
      wrapper.count++
      return func(...args)
    }
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      wrapper.count++
      console.log(func(...args))
    }, delay)
    hasCalled = true
  }
  return wrapper
}

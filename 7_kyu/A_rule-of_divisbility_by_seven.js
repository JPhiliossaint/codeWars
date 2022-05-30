const seven = m => {
    let times = 0
    let result = 0
    let number = String(m)
    while (number.length > 2) {
      times++
      const firstNumber = Number(number.slice(-1))
      const remaining = Number(number.slice(0, number.length - 1))
      result = remaining - 2 * firstNumber
      number = String(result)
    }
    return [result, times]
  }
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0
    for (let i = 0; i < classPoints.length; i++){
      average += classPoints[i]
    }
    let ave = average / classPoints.length
      
    if (ave >= yourPoints){
      return false
    } else {
      return true
    }
  }
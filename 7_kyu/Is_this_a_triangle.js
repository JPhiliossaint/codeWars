function isTriangle(a,b,c){

    let sides = Math.max(a, b, c);
    let sum = a + b + c;
    return sum - sides > sides;
  }
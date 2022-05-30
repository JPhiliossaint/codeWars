function animal(obj){

    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
  }
    var dog = {
    name: 'dog',
    legs: 4, 
    color: 'white',
  }
    var cock = {
    name: 'dog',
    legs: 2, 
    color: 'red',
      }
        var rabbit = {
    name: 'rabbit',
    legs: 4, 
    color: 'gray',
  }
  animal(dog)
  animal(cock)
  animal(rabbit)
  
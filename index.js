const{randomUUID} = require('crypto')

const user = {
  name: "Gabriel sena",
  age: 22,
  email: "gabrielsena@gmail.com",
}


function soma(num1, num2) {
  return num1 / num2
}

  function singUp (user){
    const handledIser = {id: randomUUID(), ...user}
    console.log(user)
    console.log(handledIser)
  }

//oi


singUp(user)
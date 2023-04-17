let createPhoneNumber = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
let newNumber = createPhoneNumber.toString().replace(/,/g,'')


let first = newNumber.slice(0,3)
let second = newNumber.slice(3,6)
let third = newNumber.slice(6,10)

console.log("(" + first + ")" + " " + second + "-" + third)
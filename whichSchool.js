// elementary = < 13
// Secondary = >= 13 && <= 18
// Lighthouse labs = everything else

let whichSchool  = function (age) {
  if (age < 13) {
    return 'Elementary School'
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School'
  } else {
    return 'Lighthouse Labs'
  }

}

console.log('I am 25 years old. I should go to ' + (whichSchool(25)) + '.')

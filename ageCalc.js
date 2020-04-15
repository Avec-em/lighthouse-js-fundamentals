function ageCalculator(name, yOB, cY) {
  let age = cY - yOB
  return name + ' is ' + age + ' years old.';
}

console.log(ageCalculator('Emily', 1990, 2020));

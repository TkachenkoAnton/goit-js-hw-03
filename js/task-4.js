const countTotalSalary = function (employees) {
  // Создать переменную для подсчета суммы зарплат
  let totalSallary = 0;
  // Из объекта зарплат сделать массив значений
  const sallaryArray = Object.values(employees);
  // Перебрать массив значений
  for (let sallary of sallaryArray) {
    // Прибавить всезначения и присвоить сумму переменной для подсчета
    totalSallary += sallary;
  }
  // Вернуть общюю сумму
  return totalSallary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

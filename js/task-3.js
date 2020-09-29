const findBestEmployee = function (employees) {
  // сделать из обьекта массив
  const findProductiveEmploee = Object.values(employees);

  // добавить переменную по которой будем определять самого эффективного сотрудника
  const employee = findProductiveEmploee[0];
  let bestEmployee = 0;

  // перебрать массив
  for (let productiveEmploee of findProductiveEmploee) {
    if (productiveEmploee > employee) {
      bestEmployee = productiveEmploee;
    }
    return bestEmployee;
  }

  // вернуть показатели самого эффективного сотрудника
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
//console.log(findBestEmployee(sellers));
// 'lux'

const findBestEmployee = function (employees) {
  let bestEmploee = '';
  // сделать из обьекта массив значений и найти самое большое
  const bestIndicator = Math.max(...Object.values(employees));
  // сделать массив ключей
  const someEmploee = Object.keys(employees);
  // перебрать массив
  for (let key of someEmploee) {
    //сравнить значение ключей с наибольшим значением из массива значений
    // если значение равняется вывсети его ключ
    if (bestIndicator === employees[key]) {
      bestEmploee = key;
    }
  }
  // вернуть показатели самого эффективного сотрудника
  return bestEmploee;
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
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

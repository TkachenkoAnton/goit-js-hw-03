const findBestEmployee = function (employees) {
  // сделать из обьекта массив
  const findEmploee = Object.keys(employees);
  // console.log(findProductiveEmploee);
  let bestEmploee = "";
  // console.log(bestEmploee);

  // перебрать массив
  for (let i = 0; i < findEmploee.length; i += 1) {
    const itemFindEmploee = employees[findEmploee[i]];
    bestEmploee = employees[findEmploee[0]];
    console.log(typeof bestEmploee);
    console.log(typeof itemFindEmploee);

    if (bestEmploee < itemFindEmploee) {
      bestEmploee = findEmploee[i];
    }

    // вернуть показатели самого эффективного сотрудника
    return bestEmploee;
  }

  // // сделать из обьекта массив
  // const findProductiveEmploee = Object.values(employees);

  // // добавить переменную по которой будем определять самого эффективного сотрудника
  // const employee = findProductiveEmploee[0];
  // let bestEmployee;

  // // перебрать массив
  // for (let i = 0; i < findProductiveEmploee.length; i += 1) {
  //   const itemEmployees = findProductiveEmploee[i];
  //   if (itemEmployees >= employee) {
  //     bestEmployee = itemEmployees;
  //   }
  // }

  // // вернуть показатели самого эффективного сотрудника
  // return bestEmployee;
  // //
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

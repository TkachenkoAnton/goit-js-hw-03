const getAllPropValues = function (array, prop) {
  let propertyValues = [];
  // Перебать массив
  for (let obj of array) {
    // Проверить обьект на наличие ключа
    for (let key in obj) {
      // Если ключ найден добавить его значение в массив
      if (prop === key) {
        propertyValues.push(obj[key]);
      }
    }
  }
  // Вернуть свойства ключей
  return propertyValues;
};

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []

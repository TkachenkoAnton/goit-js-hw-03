const calculateTotalPrice = function (array, prop) {
  //Обьявить переменную для подстчета общей суммы
  let totalPrice = 0;
  // Перебрать массив
  for (let obj of array) {
    // Если свойство объекта с ключем name равняется значению параметра prop
    // умножить цену на количество и прибавить
    if (obj.name === prop) {
      totalPrice += obj.price * obj.quantity;
    }
  }

  return totalPrice;
  //Обьявить переменную для свойства значения
};

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

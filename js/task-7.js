/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

// Создаем переменную под счетчик, чтобы для удобства тестирования создавать последовательные айди.
let counter = 0;

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    // Создаем переменную для генерации последовательных id
    let transId = (counter += 1);

    const transaction = {
      amount,
      type,
      id: transId,
    };

    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;

    return this.transactions.push(
      this.createTransaction(amount, Transaction.DEPOSIT),
    );
  },

  //   /*
  //    * Метод отвечающий за снятие суммы с баланса.
  //    * Принимает сумму танзакции.
  //    * Вызывает createTransaction для создания объекта транзакции
  //    * после чего добавляет его в историю транзакций.
  //    *
  //    * Если amount больше чем текущий баланс, выводи сообщение
  //    * о том, что снятие такой суммы не возможно, недостаточно средств.
  //    */
  withdraw(amount) {
    let massage = '';

    if (amount > this.balance) {
      return (massage = `Недостаточно средств для осуществления операции`);
    } else {
      this.balance -= amount;
    }

    return this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
  },

  //   /*
  //    * Метод возвращает текущий баланс
  //    */
  getBalance() {
    return this.balance;
  },

  //   /*
  //    * Метод ищет и возвращает объект транзации по id
  //    */
  getTransactionDetails(id) {
    let transactionArrays = this.transactions;

    for (let obj of transactionArrays) {
      if (obj.id === id) {
        return obj;
      }
    }
  },

  //   /*
  //    * Метод возвращает количество средств
  //    * определенного типа транзакции из всей истории транзакций
  //    */
  getTransactionTotal(type) {
    let totalSum = 0;
    let transactionArrays = this.transactions;

    for (let obj of transactionArrays) {
      if (obj.type === type) {
        totalSum += obj.amount;
      }
    }

    return `Количество средств ${type} = ${totalSum}`;
  },
};

account.deposit(4569);
account.deposit(859);
account.withdraw(1000);
account.deposit(5632);
account.deposit(8985);
account.withdraw(2000);
account.withdraw(1000);
account.withdraw(5000);
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());
console.log(account.getTransactionDetails(4));
console.log(account.transactions);

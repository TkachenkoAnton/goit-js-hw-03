/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

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
    const transaction = {
      amount,
      type,
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
    if ((this.balance += amount)) {
      this.type = Transaction.DEPOSIT;
    }
    return this.transactions.push(this.createTransaction(amount, this.type));
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
    let massage = "";
    this.type = Transaction.WITHDRAW;
    if (amount > this.balance) {
      return (massage = `Недостаточно средств для осуществления операции`);
    } else {
      this.balance -= amount;
    }
    return this.transactions.push(this.createTransaction(amount, this.type));
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
  //   getTransactionDetails(id) {},

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

account.deposit(900);
account.deposit(900);
account.withdraw(1000);
console.log(account.getBalance());

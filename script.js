"use sctrict"

// 1) Создаем переменные и присваиваем им значения.

let money = 70000;
let profit = 'Сдача жилья в аренду';
let expenses = 'питание, проезд, коммунальные платежи, Интернет и мобильная связь'; 
let purpose = 100000;
let period = 3;


//2) Использование методов и свойств для выведения в консоль.

console.log(typeof money);
console.log(typeof profit);

console.log(expenses.length);
console.log(`Период равен: ${period} месяцев и цель заработать: ${purpose} рублей`);

const budgetDay = money/30;
console.log(Math.floor(budgetDay));

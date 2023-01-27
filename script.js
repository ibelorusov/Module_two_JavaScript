"use strict"

let money = 110000; // Месячный бюджет
let profit = 'freelance'; // Дополнительный доход
let expenses = ''; // Дополнительный расход
let purpose = 1000000; // Цель заработать
let period = 12; // За какой период месяцев
let amount; // Обязательные статьи расходов
let deposit = false; // Имеется ли депозит в банке
let budgetMonth; // Бюджет на месяц
let budgetDay; // Бюджет на день

/* Спрашиваем у пользователя “Вашмесячныйдоход?” и результат сохраняем в переменную money */

money = prompt('Введите Ваш месячный доход');

/* Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную expenses(пример: "питание, проезд") */

expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

/* Спросить у пользователя “Восколько обойдутся обязательные статьи расходов?” и сохраните это в новую переменную amount */

amount = prompt('Во сколько обойдутся обязательные расходы');

/* 4) Спросить у пользователя “Есть ли у вас вклад в банке?” и сохранить данные в новую переменную deposit(булевозначениеtrue/false). Методconfirm() в помощь */

deposit = confirm('Есть ли у Вас вклад в банке');

/* Спросить у пользователя `Перечислите возможный доход за ваши дополнительные работы: ${profit}?` сохранить в новую переменную extraMoney */

let extraMoney = prompt(`Перечислите возможный доход за ваши дополнительные работы: ${profit}?`);

/* Объявить функцию getAccumulatedIncome, переменную budgetMonth удаляем. Функция возвращает Накопления за месяц (Доходы минус расходы) учитывайте переменную extraMoney!!! Учитывайте что переменную budgetMonth вы удаляете и необходимо будет в связи с этим поправитькод */

const getAccumulatedIncome = (income, consumpion, additionalIncome) => income - consumpion + additionalIncome;

/* Объявить переменную accumulatedIncome и присвоить ей результат вызова функции getAccumulatedIncome */

let accumulatedIncome = getAccumulatedIncome(money,amount,extraMoney);

/* Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedIncome) и возвращает результат */

const getTargetMonth = (accumulation, budget) => Math.ceil(accumulation/budget);

/* budget Day рассчитываем исходя из значения месячного накопления(accumulatedIncome) */

budgetDay = accumulatedIncome / 30;

console.log('Ваш бюджет на месяц с учётом ваших расходов состовляет: ', getAccumulatedIncome(money,amount,extraMoney));

console.log (`Ваша цель накопить ${purpose} с учётом всех ваших расходов будет достигнута через`, getTargetMonth(purpose, accumulatedIncome) + "месяца");

console.log('Дневной бюджет', budgetDay);

Math.random();
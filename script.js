const guessNumber = function(round) {
    let numRandom = Math.floor(Math.random() * 10);
  
    const gameRepeat = function (round) {
      if (round === 0) {
        return confirm('Попытки закончились! Хотите сыграть ещё?');
        }
        
        let num = prompt('Угадай число от 1 до 10');
    
        if (num === null) {
        alert('Игра окончена!');
        return false;
        }
    
        if (isNaN(num)) {
        alert('Введите число');
        return gameRepeat(round);
        }
    
        if (num > numRandom) {
        alert(`Загаданное число меньше, осталось попыток: ${round - 1}`);
        return gameRepeat(round - 1);
        }
    
        if (num < numRandom) {
        alert(`Загадочное число больше, осталось попыток: ${round - 1}`);
        return gameRepeat(round - 1);
        
        } else if (num == numRandom) {
        
            return confirm('Вы угадали! Хотите сыграть ещё?');
        } else {
        return false;
        }
    };

  if (gameRepeat(round)) {
    numRandom = Math.floor(Math.random() * 10);
    gameRepeat(round);
  } else {
    alert('Прощайте');
  }
};

guessNumber(5);
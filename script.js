const url = 'https://reqres.in/api/users?per_page=12';

const userData = fetch(url).then((response) => {
  return response.json();
})


//  1. Получить данные всех пользователей из https://reqres.in/api/users

userData.then((userList) => {
console.log(userList.data);
console.log('--------------------------------------------------------');

// 2. Вывести в консоль фамилии всех пользователей в цикле

userList.data.forEach((userItem) => {
  console.log(userItem.last_name);
});
console.log('--------------------------------------------------------');

// 3. Вывести все данные всех пользователей, фамилия которых начинается на F

userList.data.forEach((userItem) => {
  if (userItem.last_name[0] == 'F') {
    console.log(`id: ${userItem.id} \nemail: ${userItem.email} \nfirst_name: ${userItem.first_name} \nlast_name: ${userItem.last_name} \navatar: ${userItem.avatar}`);
  }
});

// 4. Вывести следующее предложение: Наша база содержит данные следующих пользователей: и далее в этой же строке через запятую имена и фамилии всех пользователей. Использовать метод reduce

let usersDB = userList.data.reduce((userEnabled, userItem) => {
  return userEnabled + ' \n' + userItem.first_name + ' ' + userItem.last_name + ',';
}, '');
console.log(`Наша база содержит данные следующих пользователей: ${usersDB.slice(0, -1)}`);

console.log('--------------------------------------------------------');

// 5. Вывести названия всех ключей в объекте пользователя.
Object.keys(userList.data[0]).forEach((keyObj) => {
  console.log(keyObj);
})

})

.catch((err) => {
  console.log(`Что-то пошло не так! : ${err.message}`)
});

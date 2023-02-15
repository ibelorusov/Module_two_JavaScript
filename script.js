let email = document.querySelector('#email')
let password = document.querySelector('#password')
let policy = document.querySelector('#policy')
let btnRegistration = document.querySelector('.button')
let autorithation = document.querySelector('.notice')
let errorEmail = document.querySelector('.errorEmail')
let errorPass = document.querySelector('.errorPass')
let errorCheck = document.querySelector('.errorCheck')
let label1 = document.querySelector('#label1')
let label2 = document.querySelector('#label2')
let star1 = document.querySelector('#star1')
let star2 = document.querySelector('#star2')
let star3 = document.querySelector('#star3')
let point1 = document.querySelector('#point1')
let point2 = document.querySelector('#point2')
let point3 = document.querySelector('#point3')
let name = document.querySelector('.name')
let rules = document.querySelector('.rules')

let emailResult = ''
let passResult = '' 
let user = {}
email.addEventListener('input', (event) => {
  emailResult = event.target.value
})

password.addEventListener('input', (event) => {
  passResult = event.target.value
})

function validateEmail(email) {
const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

btnRegistration.addEventListener('click', (event) => {
  event.preventDefault()

  if (emailResult.length === 0) {
    errorEmail.style.display = 'block'
    label1.style.color = '#CB2424'
    star1.style.color = '#CB2424'
    email.style.borderColor = 'CB2424'
    point1.style.marginBotton = '0'
  }

  if (passResult.length === 0) {
    errorPass.style.display = 'block'
    star2.style.color = '#CB2424'
    label2.style.color = 'CB2424'
    password.style.borderColor = 'CB2424'
    point2.style.marginBotton = '0'
  } 
  if ((passResult.length <= 7) && (passResult.length > 0)) {
    errorPass.style.display = 'block'
    star2.style.color = 'CB2424'
    label2.style.color = 'CB2424'
    password.style.borderColor = 'CB2424'
    point3.style.marginBotton = '0'
    errorPass.textContent = 'Пароль должен содержать как минимум 8 символов'
  }
  if (!policy.checked) {
    errorCheck.style.display = 'block'
    star3.style.color = 'CB2424'
    policy.style.borderColor = 'CB2424'
    point3.style.marginBotton = '0'
    btnRegistration.style.marginTop = '46px'
  }
  if (policy.checked) {
    policy.style.backgroundImage = "url('./img/check\ mark.svg') center"
  }
  if (!(validateEmail(emailResult)) && (emailResult.length > 0)) {
    errorEmail.style.display = 'block'
    errorEmail.textContent =  'Email не валидный'
  }
  if((validateEmail(emailResult)) && (passResult.length > 7) && (policy.checked)) {
    if (btnRegistration.value === 'Регистрация') {
      user = {
        email: emailResult,
        password: passResult
      };
      localStorage.setItem('user1', JSON.stringify(user))
    }
    let person = JSON.parse(localStorage.getItem('user1'))
    console.log(person)
    if (btnRegistration.value === 'Войти') {
      if ((person.email == emailResult) && (person.password == passResult)) {
        window.location.href = './successful.html';
      }
      
      if ((person.email != emailResult) || (person.password != passResult)) {
        errorPass.textContent = 'Логин или пароль неверный'
        errorPass.style.display = 'block'
        star1.style.color = '#CB2424'
        email.style.borderColor = '#CB2424'
        point1.style.marginBotton = '0'
        star2.style.color = '#CB2424'
        label2.style.color = 'CD2424'
        password.style.borderColor = '#CB2424'
        point2.style.marginBotton = '0'
        label1.style.color = '#CD2424'
      }
    }
  }
})

autorithation.addEventListener('click', () => {

  autorithation.textContent = 'Зарегистрироваться'
  name.style.width = '115px'
  name.textContent = 'Вход'
  autorithation.style.left = '453px'
  btnRegistration.value = 'Войти'
  rules.textContent = 'Я согласен получать новые обновления на почту! '
})
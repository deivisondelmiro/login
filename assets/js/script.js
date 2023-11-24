import initValidationEmail from './modules/validation-email.js';
import initValidationPassword from './modules/validation-password.js';
import initValidationInputText from './modules/validation-input-text.js';
import initScreen from './modules/change-screen.js';

const emailInputSignIn = document.querySelector('.emailInputSignIn');
const emailInputSignUp = document.querySelector('.emailInputSignUp');
const yourNameInput = document.querySelector('.yourNameInput');
const passwordInput = document.querySelector('.passwordInput');
const errorMensage = document.querySelector('.errorMensageEmail');

const confirmPasswordInput = document.querySelector('.passwordConfirmInput');
const validationPasswordInput = document.querySelector('.newPasswordInput');
const liElments = document.querySelector('.listaParametros');

const createAccountInput = document.querySelector('.createAccountInput');
const doLogin = document.querySelector('.doLogin');
const screenLogin = document.querySelector('.containerLogin');
const screenSignUp = document.querySelector('.containerSignUp');

const validationEmailSignIn = new initValidationEmail(emailInputSignIn, errorMensage).start();
const validationEmailSignUp = new initValidationEmail(emailInputSignUp).start();
const validationPassword = new initValidationPassword(validationPasswordInput, confirmPasswordInput, liElments).start();
const createAccount = new initScreen(createAccountInput, doLogin, screenLogin, screenSignUp, yourNameInput, emailInputSignIn, emailInputSignUp, passwordInput, confirmPasswordInput, validationPasswordInput).start();
const validationInputText = new initValidationInputText(yourNameInput).start();

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
})

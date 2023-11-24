export default class initScreen {
  constructor(element, doLogin, screenLogin, screenSignUp, yourNameInput, emailInputSignIn, emailInputSignUp, passwordInput, confirmPasswordInput, validationPasswordInput) {
    this.element = element;
    this.doLogin = doLogin;
    this.screenLogin = screenLogin;
    this.screenSignUp = screenSignUp;
    this.yourNameInput = yourNameInput;
    this.emailInputSignIn = emailInputSignIn;
    this.emailInputSignUp = emailInputSignUp;
    this.passwordInput = passwordInput;
    this.confirmPasswordInput = confirmPasswordInput;
    this.validationPasswordInput = validationPasswordInput;
  }
  screenLoginFunction() {
    this.screenSignUp.style.display = 'flex';
    this.screenLogin.style.display = 'none';
    this.emailInputSignIn.value = '';
    this.passwordInput.value = '';
  }
  screenSignUpFunction() {
    this.screenLogin.style.display = 'flex';
    this.screenSignUp.style.display = 'none';
    this.yourNameInput.value = '';
    this.emailInputSignUp.value = '';
    this.confirmPasswordInput.value = '';
    this.validationPasswordInput.value = '';
  }
  startEventListener() {
    this.element.addEventListener('click', () => {
      this.screenLoginFunction();
    })
    this.doLogin.addEventListener('click', () => {
      this.screenSignUpFunction();
    })
  }
  start() {
    this.startEventListener();
    return this;
  }
}

export default class initValidationEmail {
  constructor(element, error) {
    this.element = element;
    this.errorMensageSpan = error;
  }
  emailMatch(email) {
    const matchRegexEmail = email.match(/[\w.-]+@[\w.-]+\.[\w-.]+/gi);
    return matchRegexEmail;
  }
  validationEmail(email) {
    const matchEmail = this.emailMatch(email.value);
    if (email.value.length === 0) {
      email.classList.remove('inputInvalid');
      email.classList.remove('inputValid');
      email.nextElementSibling.classList.remove('active');
    } else if(matchEmail) {
      email.classList.add('inputValid');
      email.classList.remove('inputInvalid');
      email.nextElementSibling.classList.remove('active');
    } else {
      email.classList.remove('inputValid');
      email.classList.add('inputInvalid');
      email.nextElementSibling.classList.add('active');
    }
  }
  startValidation() {
    this.element.addEventListener('input', () => {
      this.validationEmail(this.element);
    });
  }
  start() {
    this.startValidation();
    return this;
  }
}

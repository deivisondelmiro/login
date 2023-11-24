export default class initValidationPassword {
  constructor(element, secondElement, liElements) {
    this.element = element;
    this.password = this.element.value;
    this.secondElement = secondElement;
    this.liElements = liElements;
  }
  validationLetterUpperCase(password) {
    const regexUpperCase = /[A-Z]/g.test(password);
    return regexUpperCase;
  }
  validationLetterLowerCase(password) {
    const regexLowerCase = /[a-z]/g.test(password);
    return regexLowerCase;
  }
  validationNumber(password) {
    const regexNumber = /[0-9]/g.test(password);
    return regexNumber;
  }
  validationCharacter(password) {
    const regexNumber = /[!@#\$%&\*\.\?;,\+=\*\/-]/g.test(password);
    return regexNumber;
  }
  errorPassword(element) {
    const liElements = this.liElements.children;
    const elementSiblingSpan = element.nextElementSibling;
    const elementArray = Array.from(liElements);
    const password = this.element.value;
    console.log(elementSiblingSpan)
    function error(parameterValidation, index) {
      if (parameterValidation) {
        liElements[index].classList.add('passwordInputValid');
        liElements[index].classList.remove('passwordInputInvalid');
      } else {
        elementSiblingSpan.classList.add('active');
        liElements[index].classList.add('passwordInputInvalid');
        liElements[index].classList.remove('passwordInputValid');
      }
    }
    if (password.length != 0) {
      elementSiblingSpan.classList.remove('active');
      error((password.length >= 6), 0);
      error(this.validationLetterUpperCase(password), 1);
      error(this.validationLetterLowerCase(password), 2);
      error(this.validationNumber(password), 3);
      error(this.validationCharacter(password), 4);
    } else {
      elementArray.forEach((element) => {
        element.classList.remove('passwordInputInvalid');
        element.classList.remove('passwordInputValid');
      })
      elementSiblingSpan.classList.remove('active');
    }
  }
  samePasswordConfirm(secondElement) {
    const elementSibling = secondElement.nextElementSibling;
    if (this.secondElement.value.length === 0) {
      secondElement.classList.remove('inputValid');
      secondElement.classList.remove('inputInvalid');
      elementSibling.classList.remove('active');
    } else if (this.element.value == this.secondElement.value) {
      secondElement.classList.add('inputValid');
      secondElement.classList.remove('inputInvalid');
      elementSibling.classList.remove('active');
    } else {
      secondElement.classList.remove('inputValid');
      secondElement.classList.add('inputInvalid');
      elementSibling.classList.add('active');
    }
  }
  startVerification(element) {
    const password = this.element.value;
    if (password.length === 0) {
      element.classList.remove('inputInvalid');
      element.classList.remove('inputValid');
    } else if (this.validationLetterUpperCase(password) && this.validationLetterLowerCase(password) && this.validationNumber(password) && this.validationCharacter(password)) {
      element.classList.remove('inputInvalid');
      element.classList.add('inputValid');
    } else {
      element.classList.remove('inputValid');
      element.classList.add('inputInvalid');
    }
  }
  startEventListener() {
    this.element.addEventListener('input', () => {
      this.startVerification(this.element);
      this.errorPassword(this.element);
    })
    this.secondElement.addEventListener('input', () => {
      this.samePasswordConfirm(this.secondElement);
    })
  }
  start() {
    this.startEventListener();
    return this;
  }
}

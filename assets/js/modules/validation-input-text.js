export default class initValidationInputText {
  constructor(element) {
    this.element = element;
    console.log(this.element.value)
  }
  validationInput(element) {
    if (element.value.length != 0) {
      element.classList.add('inputValid');
      element.classList.remove('inputInvalid');
      element.nextElementSibling.classList.remove('active');
    } else {
      element.classList.add('inputInvalid');
      element.classList.remove('inputValid');
      element.nextElementSibling.classList.add('active');
    }
  }
  startValidation() {
    this.element.addEventListener('input', () => {
      this.validationInput(this.element);
    })
  }
  start() {
    this.startValidation();
    return this;
  }
}
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(CodeValue) {
    this._code = CodeValue;
  }

  get name() {
    return this._name;
  }

  set name(Name) {
    this._name = Name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

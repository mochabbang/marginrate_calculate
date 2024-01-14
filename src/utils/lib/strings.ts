interface String {
  isNullOrEmpty(): boolean;

  toNumberComma(): string;
}

String.prototype.isNullOrEmpty = function () {
  const arg = arguments[0] === undefined ? this.toString() : arguments[0];
  if (arg === undefined || arg === null || arg === "") {
    return true;
  } else {
    if (typeof arg !== "string") {
      throw "Property or Arguments was not 'String' Types";
    }
    return false;
  }
};

String.prototype.toNumberComma = function () {
  return !this.isNullOrEmpty()
    ? this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : "undefined";
};

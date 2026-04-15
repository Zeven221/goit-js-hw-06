class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue.split(" ");
  }
  getValue() {
    return this.#value.join("");
  }
  padStart(str) {}
  padEnd(str) {
    this.#value.push(str)
  }
  padBoth(str) {}
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

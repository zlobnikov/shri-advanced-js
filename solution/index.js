module.exports = class {
  constructor(array = []) {
    this.array = [];
    for (const value of array) this.add(value);
  }

  [Symbol.iterator]() {
    return this.array[Symbol.iterator]();
  }

  get [Symbol.toStringTag]() {
    return '^_^';
  }

  get size() {
    return this.array.length;
  }

  add(value) {
    if (!this.has(value)) this.array.push(value);
    return this;
  }

  has(value) {
    return this.array.includes(value);
  }

  delete(value) {
    const index = this.array.indexOf(value);
    this.array.splice(index, 1);
  }

  clear() {
    this.array.length = 0;
  }

  keys() {
    return this.array;
  }

  values() {
    return this.array;
  }

  entries() {
    return this.array.map(value => [value, value]);
  }
};

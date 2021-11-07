const { it, expect, describe } = require('@jest/globals');
const MySet = require('../solution');

describe('Testing MySet class', () => {
  it('should return only unique values', () => {
    const set = new MySet([1, 2, 2, 3]);

    expect([...set]).toStrictEqual([1, 2, 3]);
  });

  it('should have size property', () => {
    const set = new MySet([1, 2, 3, 4]);

    expect(set.size).toBe(4);
  });

  it('should work with for-of cycle', () => {
    const set = new MySet([2, 4, 6, 8]);

    const array = [];
    for (let item of set) {
      array.push(item);
    }

    expect(array).toStrictEqual([...set]);
  });

  it('should have keys method', () => {
    const set = new MySet([2, 4, 6, 8]);

    expect([...set.keys()]).toStrictEqual([...set]);
  });

  it('should have values method', () => {
    const set = new MySet([2, 4, 6, 8]);

    expect([...set.values()]).toStrictEqual([...set]);
  });

  it('should have entries method', () => {
    const set = new MySet([2, 4]);

    expect([...set.entries()]).toStrictEqual([[2, 2], [4, 4]]);
  });

  it('should have clear method', () => {
    const set = new MySet([2, 4]);
    set.clear();

    expect(set.size).toBe(0);
  });

  it('should have add method', () => {
    const set = new MySet();
    set.add(1).add(2);

    expect([...set]).toStrictEqual([1, 2]);
  });

  it('should have delete method', () => {
    const set = new MySet([1, 2, 3]);
    set.delete(2);

    expect([...set]).toStrictEqual([1, 3]);
  });

  it('should have has method', () => {
    const set = new MySet([1, 2, 3]);

    expect(set.has(4)).toBeFalsy();
    expect(set.has(2)).toBeTruthy();
  });

  it('should have valueOf method', () => {
    const set = new MySet([1, 2]);

    expect(set === set.valueOf()).toBeTruthy();
  });

  it('should have string display', () => {
    const set = new MySet([1, 2]);

    expect(String(set)).toBe('[object ^_^]');
    expect(Object.prototype.toString.call(set)).toBe('[object ^_^]');
  });
});

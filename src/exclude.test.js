/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const exclude = require('./index');
const expect = require('chai').expect;

describe('Deep Flatten', () => {

  it('should export a function', () => {
    expect(exclude).to.be.a('function');
  });

  it('should remove given item from array', () => {
    const srcArray = ['item_1', 'item_2', 'item_3'];
    const excludes = ['item_2'];
    const expected = ['item_1', 'item_3'];
    const result = exclude(srcArray, excludes);
    expect(result).to.be.deep.equal(expected);
  });

  it('should remove several items from array', () => {
    const srcArray = ['item_1', 'item_2', 'item_3'];
    const excludes = ['item_2', 'item_3'];
    const expected = ['item_1'];
    const result = exclude(srcArray, excludes);
    expect(result).to.be.deep.equal(expected);
  });

  it('should remove duplicate items from array', () => {
    const srcArray = ['item_1', 'item_2', 'item_2', 'item_3'];
    const excludes = ['item_2', 'item_3'];
    const expected = ['item_1'];
    const result = exclude(srcArray, excludes);
    expect(result).to.be.deep.equal(expected);
  });
});

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

class IndexModel {
  constructor() {}

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('hello happylist');
      }, 1000); //throw new Error('500错误')
      // reject('错误')
    });
  }

}

exports.default = IndexModel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexModel = require("../modles/indexModel");

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const indexController = {
  indexAction() {
    return async (ctx, next) => {
      const indexModelIns = new _indexModel2.default();
      const result = await indexModelIns.getData(); //  'index'  实际就是打开 index.html

      ctx.body = await ctx.render('index', {
        data: result
      });
    };
  }

};
exports.default = indexController;
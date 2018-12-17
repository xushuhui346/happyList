"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexcontroller = require("./indexcontroller");

var _indexcontroller2 = _interopRequireDefault(_indexcontroller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const controllerInit = {
  getAllrouters(app, router) {
    app.use(router(_ => {
      _.get('/index', _indexcontroller2.default.indexAction());
    }));
  }

};
exports.default = controllerInit;
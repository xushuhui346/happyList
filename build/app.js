"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _errorHandler = require("./middlewares/errorHandler");

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa2.default();
app.use(async ctx => {
  ctx.body = 'Hello World';
}); // log4js配置

_log4js2.default.configure({
  appenders: {
    nodeerr: {
      type: 'file',
      filename: './logs/nodeerr.log'
    }
  },
  categories: {
    default: {
      appenders: ['nodeerr'],
      level: 'error'
    }
  }
});

const logger = _log4js2.default.getLogger('nodeerr');

_errorHandler2.default.error(app, logger);

app.listen(_config2.default.port, () => {
  console.log(`happylist listening on ${_config2.default.port}`);
});
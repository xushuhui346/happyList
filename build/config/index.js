'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

let config = {};
// 开发环境
// 线上环境
{
    const localConfig = {
        port :8081
    };
    config = _.extend(config,localConfig);
}
// console.log(`config:${config.port}`)
var config$1 = config

module.exports = config$1;

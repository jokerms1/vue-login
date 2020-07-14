'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://192.168.0.106:8080/"',  // 配置零视平台ip地址
  WS_HOT_ROOT: '"192.168.0.106:8080"'
})

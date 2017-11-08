'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactstrap = require('reactstrap');

var _IntroTop = require('../components/indexComponents/IntroTop.js');

var _IntroTop2 = _interopRequireDefault(_IntroTop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_IntroTop2.default, null));
};
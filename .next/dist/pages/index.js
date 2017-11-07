'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_reactstrap.Row, null, _react2.default.createElement(_reactstrap.Col, null, _react2.default.createElement('h1', {
    className: 'jsx-2485157717' + ' ' + 'nameLine'
  }, 'My name is Joe Mulick'), _react2.default.createElement('h2', {
    className: 'jsx-2485157717' + ' ' + 'nameLine'
  }, 'Full Stack Javascript Web Developer, Los Angeles California'), _react2.default.createElement(_style2.default, {
    styleId: '2485157717',
    css: ['.nameLine.jsx-2485157717{text-align:center;}']
  })), _react2.default.createElement(_reactstrap.Col, null, _react2.default.createElement('img', { src: 'https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg' }))));
};
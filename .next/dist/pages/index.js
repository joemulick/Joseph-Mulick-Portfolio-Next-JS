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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostLink = function PostLink(props) {
  return _react2.default.createElement('li', null, _react2.default.createElement(_link2.default, { as: '/p/' + props.id, href: '/post?title=' + props.title }, _react2.default.createElement('a', null, props.title)));
};

exports.default = function () {
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('h1', null, 'My Blog'), _react2.default.createElement('ul', null, _react2.default.createElement(PostLink, { id: 'hello-nextjs', title: 'Hello Next.js' }), _react2.default.createElement(PostLink, { id: 'learn-nextjs', title: 'Learn Next.js is awesome' }), _react2.default.createElement(PostLink, { id: 'deploy-nextjs', title: 'Deploy apps with Zeit' })));
};
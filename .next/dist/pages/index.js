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

var _IntroTop = require('../components/indexComponents/IntroTop.js');

var _IntroTop2 = _interopRequireDefault(_IntroTop);

var _AboutMe = require('../components/indexComponents/AboutMe.js');

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _MySkillset = require('../components/indexComponents/MySkillset.js');

var _MySkillset2 = _interopRequireDefault(_MySkillset);

var _MyProjects = require('../components/indexComponents/MyProjects.js');

var _MyProjects2 = _interopRequireDefault(_MyProjects);

var _ContactMe = require('../components/indexComponents/ContactMe.js');

var _ContactMe2 = _interopRequireDefault(_ContactMe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement('div', {
    className: 'jsx-1650119783' + ' ' + 'top-section-container'
  }, _react2.default.createElement(_IntroTop2.default, null)), _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('h2', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('span', {
    className: 'jsx-1650119783'
  }, 'About Me'))), _react2.default.createElement('div', {
    className: 'jsx-1650119783' + ' ' + 'section-container'
  }, _react2.default.createElement(_AboutMe2.default, null)), _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('h2', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('span', {
    className: 'jsx-1650119783'
  }, 'My Skillset'))), _react2.default.createElement('div', {
    className: 'jsx-1650119783' + ' ' + 'section-container'
  }, _react2.default.createElement(_MySkillset2.default, null)), _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('h2', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('span', {
    className: 'jsx-1650119783'
  }, 'My Projects'))), _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement(_MyProjects2.default, null)), _react2.default.createElement('div', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('h2', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('span', {
    className: 'jsx-1650119783'
  }, 'Contact Me'))), _react2.default.createElement('div', {
    className: 'jsx-1650119783' + ' ' + 'section-container'
  }, _react2.default.createElement(_ContactMe2.default, null))), _react2.default.createElement('div', {
    className: 'jsx-1650119783' + ' ' + 'back-to-top-container'
  }, _react2.default.createElement('h2', {
    className: 'jsx-1650119783'
  }, _react2.default.createElement('span', {
    className: 'jsx-1650119783'
  }, 'Back To Top'))), _react2.default.createElement(_style2.default, {
    styleId: '1650119783',
    css: ['h2.jsx-1650119783{width:100%;text-align:center;border-bottom:1px solid #000;line-height:0.1em;margin:10px 0 20px;}', 'h2.jsx-1650119783 span.jsx-1650119783{background:#fff;padding:0 10px;}', '.back-to-top-container.jsx-1650119783{max-width:96%;margin:auto;}', '.section-container.jsx-1650119783{margin:100px 0;}', '.top-section-container.jsx-1650119783{margin:25px 0 0 0;}', '.skillset-container.jsx-1650119783{margin-top:35px;}']
  }));
};
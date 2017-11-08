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
  return _react2.default.createElement(_MyLayout2.default, null, _react2.default.createElement(_IntroTop2.default, null), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('span', null, 'About Me'))), _react2.default.createElement(_AboutMe2.default, null), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('span', null, 'My Skillset'))), _react2.default.createElement(_MySkillset2.default, null), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('span', null, 'My Projects'))), _react2.default.createElement(_MyProjects2.default, null), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('span', null, 'Contact Me'))), _react2.default.createElement(_ContactMe2.default, null), _react2.default.createElement('div', null, _react2.default.createElement('h2', null, _react2.default.createElement('span', null, 'Back To Top'))));
};
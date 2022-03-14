import * as React from 'react';

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgPlus = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  d: "M4 12h16M12 4v16",
  stroke: "#0052CC",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

export { SvgPlus as ReactComponent };

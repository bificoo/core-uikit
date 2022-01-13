import * as React from 'react';

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgArrow = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 12,
  height: 7,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "m7.11.696 4.593 4.593a.988.988 0 0 1 .007 1.407.989.989 0 0 1-1.407-.007l-3.9-3.9-3.9 3.9a.99.99 0 0 1-1.4-1.4L5.695.696a1 1 0 0 1 1.414 0Z",
  fill: "#0747A6"
})));

export { SvgArrow as ReactComponent };

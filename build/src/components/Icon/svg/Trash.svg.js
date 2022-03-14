import * as React from 'react';

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgTrash = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  d: "M20.5 6H4M10 10.5v6M14.5 10.5v6M19 6v14.25a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75V6M16 6V4.5A1.5 1.5 0 0 0 14.5 3H10a1.5 1.5 0 0 0-1.5 1.5V6",
  stroke: "#557CC4",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})));

export { SvgTrash as ReactComponent };

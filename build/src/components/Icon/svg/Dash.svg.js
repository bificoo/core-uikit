import * as React from 'react';

var _rect;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgDash = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 10,
  height: 2,
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, props), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
  width: 10,
  height: 2,
  rx: 1,
  fill: "#45536C"
})));

export { SvgDash as ReactComponent };

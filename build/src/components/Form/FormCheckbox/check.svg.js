import * as React from 'react';

var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    className: "check_svg__css-11ziv6u"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "currentColor",
    x: 6,
    y: 6,
    width: 12,
    height: 12,
    rx: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.707 11.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 12.586l-1.293-1.293z",
    fill: "inherit"
  }))));
}

export { SvgCheck as ReactComponent };

import * as React from 'react';

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgClock = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8Zm0 14.222A6.23 6.23 0 0 1 5.778 12 6.23 6.23 0 0 1 12 5.778 6.23 6.23 0 0 1 18.222 12 6.23 6.23 0 0 1 12 18.222Zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.89.89 0 0 0 1.257 0 .89.89 0 0 0 0-1.256l-1.942-1.943Z",
  fill: "#557CC4"
})));

export { SvgClock as ReactComponent };

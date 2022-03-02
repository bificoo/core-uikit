import * as React from 'react';

var _path, _path2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SvgCalendar = props => /*#__PURE__*/React.createElement("svg", _extends({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none"
}, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  fillOpacity: 0.01,
  d: "M0 0h24v24H0z"
})), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.995 5h14.01C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.006V6.994C3 5.893 3.892 5 4.995 5ZM4.5 8v10.5a1 1 0 0 0 .293.707c.187.188.942.293 1.207.293h12.5a1 1 0 0 0 1-1V8h-15ZM6 4a1 1 0 0 1 2 0v1H6V4Zm10 0a1 1 0 0 1 2 0v1h-2V4Zm-9 9v-2.001h2V13H7Zm8 0v-2.001h2V13h-2Zm-4 0v-2.001h2.001V13H11Zm-4 4v-2h2v2H7Zm4 0v-2h2.001v2H11Zm4 0v-2h2v2h-2Z",
  fill: "#C9CBCE"
})));

export { SvgCalendar as ReactComponent };

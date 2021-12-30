'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgArrow(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 12,
    height: 7,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.11.696l4.593 4.593a.988.988 0 01.007 1.407.989.989 0 01-1.407-.007l-3.9-3.9-3.9 3.9a.99.99 0 01-1.4-1.4L5.695.696a1 1 0 011.414 0z",
    fill: "#0747A6"
  })));
}

exports.ReactComponent = SvgArrow;

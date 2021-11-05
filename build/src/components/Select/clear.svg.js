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

var _circle, _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function SvgClear(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    fill: "currentColor",
    cx: 12,
    cy: 12,
    r: 9
  })), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.155 14.493a1.174 1.174 0 11-1.662 1.663L12 13.662l-2.494 2.494a1.172 1.172 0 01-1.662 0 1.176 1.176 0 010-1.663L10.337 12 7.844 9.507a1.176 1.176 0 011.662-1.662L12 10.338l2.493-2.493a1.174 1.174 0 111.662 1.662L13.662 12l2.493 2.493z",
    fill: "inherit"
  })));
}

exports.ReactComponent = SvgClear;

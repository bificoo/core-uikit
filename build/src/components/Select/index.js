'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var React = require('react');
var Select_module = require('./Select.module.scss.js');
var clear = require('./clear.svg.js');
var downArrow = require('./down-arrow.svg.js');
var remove = require('./remove.svg.js');
var reactjsPopup_esm = require('../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js');
var Option = require('./Option.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Select = function (_a) {
    var _b = _a.isMulti, isMulti = _b === void 0 ? false : _b, props = _tslib.__rest(_a, ["isMulti"]);
    var popupRef = React.useRef(null);
    var _c = React.useState([]), selected = _c[0], setSelected = _c[1];
    var handleClick = function (option) {
        var _a;
        if (isMulti) {
            setSelected(function (prev) { return _tslib.__spreadArray(_tslib.__spreadArray([], prev, true), [option]); });
        }
        else {
            setSelected([option]);
            (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close();
        }
    };
    var handleClear = function () {
        setSelected([]);
    };
    var handleRemoveItem = function (item) {
        setSelected(function (prev) { return prev.filter(function (option) { return option.value !== item.value; }); });
    };
    React.useEffect(function () {
        props.onChange && props.onChange(selected);
    }, [selected]);
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].wrapper }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].container }, { children: jsxRuntime.jsx(reactjsPopup_esm['default'], _tslib.__assign({ ref: popupRef, trigger: function (open) {
                    var _a;
                    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default['default'](Select_module['default'].control, (_a = {}, _a[Select_module['default'].active] = open, _a)) }, { children: [props.placeholder && selected.length === 0 && (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].placeholder }, { children: props.placeholder }), void 0)), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["vale-container"] }, { children: isMulti ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: selected.map(function (item, index) { return (jsxRuntime.jsxs("div", _tslib.__assign({ className: Select_module['default']["multi-value"] }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].label }, { children: item.label }), void 0), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].remove, onClick: function () { return handleRemoveItem(item); } }, { children: jsxRuntime.jsx(remove.ReactComponent, {}, void 0) }), void 0)] }), index)); }) }, void 0)) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: selected.map(function (item, index) { return (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["single-value"] }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].label }, { children: item.label }), void 0) }), index)); }) }, void 0)) }), void 0), jsxRuntime.jsxs("div", _tslib.__assign({ className: Select_module['default'].indicator }, { children: [isMulti && selected.length > 0 && (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["clear-indicator"], onClick: handleClear }, { children: jsxRuntime.jsx("span", { children: jsxRuntime.jsx(clear.ReactComponent, {}, void 0) }, void 0) }), void 0)), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["dropdown-indicator"] }, { children: jsxRuntime.jsx(downArrow.ReactComponent, {}, void 0) }), void 0)] }), void 0)] }), void 0));
                }, position: "bottom left", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].menu }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        if (child.type === Option['default'] &&
                            selected.map(function (option) { return option.value; }).indexOf(child.props.value) === -1) {
                            return React__default['default'].cloneElement(child, { onClick: handleClick });
                        }
                    }) }), void 0) }), void 0) }), void 0) }), void 0));
};
Select.Option = Option['default'];

exports['default'] = Select;

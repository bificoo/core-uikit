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
    var _c = React.useState(props.defaultValue ? [props.defaultValue] : []), selected = _c[0], setSelected = _c[1];
    var handleClick = function (e, option) {
        var _a;
        if (isMulti) {
            var newSelected = selected.map(function (option) { return option.eventKey; }).concat(option.eventKey);
            setSelected(_tslib.__spreadArray(_tslib.__spreadArray([], selected, true), [option]));
            props.onChange && props.onChange(e, { selected: option.eventKey, selectedList: newSelected });
        }
        else {
            setSelected([option]);
            props.onChange &&
                props.onChange(e, { selected: option.eventKey, selectedList: [option.eventKey] });
            (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close();
        }
    };
    var handleClear = function (e) {
        setSelected([]);
        props.onChange && props.onChange(e, { selected: null, selectedList: [] });
    };
    var handleRemoveItem = function (e, item) {
        var newSelected = selected.filter(function (option) { return option.eventKey !== item.eventKey; });
        setSelected(newSelected);
        props.onChange &&
            props.onChange(e, {
                selected: null,
                selectedList: newSelected.map(function (option) { return option.eventKey; }),
            });
    };
    return (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].wrapper }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].container }, { children: jsxRuntime.jsx(reactjsPopup_esm['default'], _tslib.__assign({ ref: popupRef, trigger: function (open) {
                    var _a;
                    return (jsxRuntime.jsxs("div", _tslib.__assign({ className: cx__default['default'](Select_module['default'].control, (_a = {}, _a[Select_module['default'].active] = open, _a)) }, { children: [props.placeholder && selected.length === 0 && (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].placeholder }, { children: props.placeholder }), void 0)), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["vale-container"] }, { children: isMulti ? (jsxRuntime.jsx(jsxRuntime.Fragment, { children: selected.map(function (item, index) { return (jsxRuntime.jsxs("div", _tslib.__assign({ className: Select_module['default']["multi-value"] }, { children: [jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].label }, { children: item.value }), void 0), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].remove, onClick: function (e) { return handleRemoveItem(e, item); } }, { children: jsxRuntime.jsx(remove.ReactComponent, {}, void 0) }), void 0)] }), index)); }) }, void 0)) : (jsxRuntime.jsx(jsxRuntime.Fragment, { children: selected.map(function (item, index) {
                                        return (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["single-value"] }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].label }, { children: item.value }), void 0) }), index));
                                    }) }, void 0)) }), void 0), jsxRuntime.jsxs("div", _tslib.__assign({ className: Select_module['default'].indicator }, { children: [isMulti && selected.length > 0 && (jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["clear-indicator"], onClick: handleClear }, { children: jsxRuntime.jsx("span", { children: jsxRuntime.jsx(clear.ReactComponent, {}, void 0) }, void 0) }), void 0)), jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default']["dropdown-indicator"] }, { children: jsxRuntime.jsx(downArrow.ReactComponent, {}, void 0) }), void 0)] }), void 0)] }), void 0));
                }, position: "bottom left", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, contentStyle: {
                    border: "none",
                    padding: "8px",
                    boxShadow: "none",
                } }, { children: jsxRuntime.jsx("div", _tslib.__assign({ className: Select_module['default'].menu }, { children: React__default['default'].Children.map(props.children, function (child) {
                        if (!React__default['default'].isValidElement(child))
                            return;
                        if (isMulti && child.type === Option['default']) {
                            if (selected.map(function (option) { return option.eventKey; }).indexOf(child.props.eventKey) === -1) {
                                return React__default['default'].cloneElement(child, { onClick: handleClick });
                            }
                        }
                        else {
                            return React__default['default'].cloneElement(child, { onClick: handleClick });
                        }
                    }) }), void 0) }), void 0) }), void 0) }), void 0));
};
Select.Option = Option['default'];

exports['default'] = Select;

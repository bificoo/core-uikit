import { __rest, __assign, __spreadArray } from '../../../node_modules/tslib/tslib.es6.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import cx from 'classnames';
import React__default, { useRef, useState } from 'react';
import styled from './Select.module.scss.js';
import { ReactComponent as SvgClear } from './svg/clear.svg.js';
import { ReactComponent as SvgRemove } from './svg/remove.svg.js';
import Popup from '../../../node_modules/reactjs-popup/dist/reactjs-popup.esm.js';
import Icon from '../Icon/index.js';
import SelectOption from './SelectOption/index.js';

var Select = function (_a) {
    var _b = _a.isMulti, isMulti = _b === void 0 ? false : _b, props = __rest(_a, ["isMulti"]);
    var popupRef = useRef(null);
    var _c = useState(Array.isArray(props.defaultValue) ? props.defaultValue : []), selected = _c[0], setSelected = _c[1];
    var handleClick = function (e, option) {
        var _a;
        if (isMulti) {
            var newSelected = selected.concat(option);
            setSelected(__spreadArray(__spreadArray([], selected, true), [option], false));
            props.onChange && props.onChange(e, { selected: option.eventKey, selectedList: newSelected });
        }
        else {
            setSelected([option]);
            props.onChange && props.onChange(e, { selected: option.eventKey, selectedList: [option] });
        }
        (_a = popupRef.current) === null || _a === void 0 ? void 0 : _a.close();
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
                selectedList: newSelected,
            });
    };
    return (jsx("div", __assign({ className: cx(styled.wrapper, props.className), style: props.style }, { children: jsx("div", __assign({ className: styled.container }, { children: jsx(Popup, __assign({ ref: popupRef, trigger: function (open) {
                    var _a, _b;
                    return (jsxs("div", __assign({ className: cx(styled.control, (_a = {}, _a[styled.active] = open, _a), (_b = {}, _b[styled.disabled] = props.disabled, _b)) }, { children: [props.placeholder && selected.length === 0 && (jsx("div", __assign({ className: styled.placeholder }, { children: props.placeholder }), void 0)), jsx("div", __assign({ className: styled["vale-container"] }, { children: isMulti ? (jsx(Fragment, { children: selected.map(function (item, index) { return (jsxs("div", __assign({ className: styled["multi-value"] }, { children: [jsx("div", __assign({ className: styled.label }, { children: item.value }), void 0), !props.disabled && (jsx("div", __assign({ className: styled.remove, onClick: function (e) { return handleRemoveItem(e, item); } }, { children: jsx(SvgRemove, {}, void 0) }), void 0))] }), index)); }) }, void 0)) : (jsx(Fragment, { children: selected.map(function (item, index) {
                                        return (jsx("div", __assign({ className: styled["single-value"] }, { children: jsx("div", __assign({ className: styled.label }, { children: item.value }), void 0) }), index));
                                    }) }, void 0)) }), void 0), jsxs("div", __assign({ className: styled.indicator }, { children: [isMulti && selected.length > 0 && (jsx("div", __assign({ className: styled["clear-indicator"], onClick: handleClear }, { children: jsx("span", { children: !props.disabled && jsx(SvgClear, {}, void 0) }, void 0) }), void 0)), jsx("div", __assign({ className: styled["dropdown-indicator"] }, { children: jsx(Icon.Arrow, {}, void 0) }), void 0)] }), void 0)] }), void 0));
                }, position: "bottom left", on: "click", closeOnDocumentClick: true, mouseLeaveDelay: 300, mouseEnterDelay: 0, arrow: false, disabled: props.disabled, contentStyle: {
                    border: "none",
                    paddingTop: "8px",
                    boxShadow: "none",
                } }, { children: jsx("div", __assign({ className: styled.menu, style: props.style }, { children: React__default.Children.map(props.children, function (child) {
                        if (!React__default.isValidElement(child))
                            return;
                        if (isMulti && child.type === SelectOption) {
                            if (selected.map(function (option) { return option.eventKey; }).indexOf(child.props.eventKey) === -1) {
                                return React__default.cloneElement(child, { onClick: handleClick });
                            }
                        }
                        else {
                            return React__default.cloneElement(child, { onClick: handleClick });
                        }
                    }) }), void 0) }), void 0) }), void 0) }), void 0));
};
Select.Option = SelectOption;

export { Select as default };

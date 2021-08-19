'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useOutsideEvent = ({ refs, onClickOutside }) => {
    React.useEffect(() => {
        const containsTarget = (ref, event) => {
            return !((ref === null || ref === void 0 ? void 0 : ref.current) && !(ref === null || ref === void 0 ? void 0 : ref.current.contains(event.target)));
        };
        const handleClickOutside = (event) => {
            const isClickOutside = Array.isArray(refs)
                ? refs.filter(ref => containsTarget(ref, event)).length === 0
                : containsTarget(refs, event);
            if (isClickOutside)
                onClickOutside();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [refs, onClickOutside]);
};

exports['default'] = useOutsideEvent;

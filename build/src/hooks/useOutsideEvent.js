import { useEffect } from 'react';

var useOutsideEvent = function (_a) {
    var refs = _a.refs, onClickOutside = _a.onClickOutside;
    useEffect(function () {
        var containsTarget = function (ref, event) {
            return !((ref === null || ref === void 0 ? void 0 : ref.current) && !(ref === null || ref === void 0 ? void 0 : ref.current.contains(event.target)));
        };
        var handleClickOutside = function (event) {
            var isClickOutside = Array.isArray(refs)
                ? refs.filter(function (ref) { return containsTarget(ref, event); }).length === 0
                : containsTarget(refs, event);
            if (isClickOutside)
                onClickOutside();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [refs, onClickOutside]);
};

export { useOutsideEvent as default };

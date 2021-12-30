'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function usePrevious(value) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var ref = React.useRef();
    React.useEffect(function () {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    return ref.current;
}

exports['default'] = usePrevious;

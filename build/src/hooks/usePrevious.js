import { useRef, useEffect } from 'react';

function usePrevious(value) {
    // @ts-ignore
    var ref = useRef();
    useEffect(function () {
        ref.current = value;
    }, [value]); // Only re-run if value changes
    return ref.current;
}

export { usePrevious as default };

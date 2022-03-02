import { __assign } from '../../../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import FormMessage from './FormMessage.js';
export { default } from './FormMessage.js';

var FormHelperMessage = function (props) { return jsx(FormMessage, __assign({ variant: "helper" }, props)); };
var FormValidMessage = function (props) { return jsx(FormMessage, __assign({ variant: "valid" }, props)); };
var FormErrorMessage = function (props) { return jsx(FormMessage, __assign({ variant: "error" }, props)); };

export { FormErrorMessage, FormHelperMessage, FormValidMessage };

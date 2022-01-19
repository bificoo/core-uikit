import Form$1 from './Form/index.js';
import FormLabel from './FormLabel/index.js';
import FormInput from './FormInput/index.js';
import FormTextarea from './FormTextarea/index.js';
import FormCheckbox from './FormCheckbox/index.js';
import FormRadio from './FormRadio/index.js';
import { FormHelperMessage, FormValidMessage, FormErrorMessage } from './FormMessage/index.js';
import FormGroup from './FormGroup/index.js';
import FormFieldset from './FormFieldset/index.js';
import FormDivider from './FormDivider/index.js';
import FormHorizontal from './FormHorizontal/index.js';
import 'react/jsx-runtime';
import 'react';
import './FormContext.js';
import './InputGroup/InputGroup/InputGroup.module.scss.js';
import 'classnames';
import './InputGroup/Prepend/Prepend.module.scss.js';
import './InputGroup/Append/Append.module.scss.js';

var Form = Object.assign(Form$1, {
    Label: FormLabel,
    Input: FormInput,
    Textarea: FormTextarea,
    Checkbox: FormCheckbox,
    Radio: FormRadio,
    HelperMessage: FormHelperMessage,
    ValidMessage: FormValidMessage,
    ErrorMessage: FormErrorMessage,
    Group: FormGroup,
    Fieldset: FormFieldset,
    Divider: FormDivider,
    Horizontal: FormHorizontal,
});

export { Form as default };

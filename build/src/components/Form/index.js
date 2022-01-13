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
export { default as InputGroup } from './InputGroup/InputGroup/index.js';
export { default as Prepend } from './InputGroup/Prepend/index.js';
export { default as Append } from './InputGroup/Append/index.js';

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

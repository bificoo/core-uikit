import Form$1 from './Form/index.js';
import FormLabel from './FormLabel/index.js';
import FormInput from './FormInput/index.js';
import FormTextarea from './FormTextarea/index.js';
import FormCheckbox from './FormCheckbox/index.js';
import FormRadio from './FormRadio/index.js';
import FormFeedback from './FormFeedback/index.js';
import FormGroup from './FormGroup/index.js';
import '../../node_modules/react/jsx-runtime.js';
import '../../node_modules/react/index.js';
import './FormContext.js';
import './InputGroup/InputGroup/InputGroup.module.scss.js';
import '../../node_modules/classnames/index.js';
import './InputGroup/Prepend/Prepend.module.scss.js';
import './InputGroup/Append/Append.module.scss.js';

var Form = Object.assign(Form$1, {
    Label: FormLabel,
    Input: FormInput,
    Textarea: FormTextarea,
    Checkbox: FormCheckbox,
    Radio: FormRadio,
    Feedback: FormFeedback,
    Group: FormGroup,
});

export default Form;
//# sourceMappingURL=index.js.map

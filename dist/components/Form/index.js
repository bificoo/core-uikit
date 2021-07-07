import FormBase from "./Form";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormCheckbox from "./FormCheckbox";
import FormRadio from "./FormRadio";
import FormFeedback from "./FormFeedback";
import FormGroup from "./FormGroup";
import InputGroup, { Prepend, Append } from "./InputGroup";
var Form = Object.assign(FormBase, {
    Label: FormLabel,
    Input: FormInput,
    Textarea: FormTextarea,
    Checkbox: FormCheckbox,
    Radio: FormRadio,
    Feedback: FormFeedback,
    Group: FormGroup,
});
export { InputGroup, Prepend, Append };
export default Form;

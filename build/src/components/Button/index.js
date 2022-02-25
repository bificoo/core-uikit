import IconButton from './IconButton/index.js';
import ButtonGroup from './ButtonGroup/index.js';
import 'react/jsx-runtime';
import 'classnames';
import './LinkButton/LinkButton.module.scss.js';

var Button = Object.assign(IconButton, { Group: ButtonGroup });

export { Button as default };

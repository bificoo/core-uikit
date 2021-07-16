'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styleInject_es = require('../../../node_modules/style-inject/dist/style-inject.es.js');

var css_248z = ".Tooltip-module_wrapper__14iuU {\n  top: 0;\n  left: 0;\n  z-index: 800;\n  box-sizing: border-box;\n  padding: 2px 6px;\n  max-width: 240px;\n  border-radius: 3px;\n  background-color: #172b4d;\n  color: #fff;\n  word-wrap: break-word;\n  font-size: 12px;\n  line-height: 1.3;\n  pointer-events: none;\n  overflow-wrap: break-word; }\n  .Tooltip-module_wrapper__14iuU .Tooltip-module_arrow__2xajY {\n    position: absolute;\n    z-index: 1;\n    width: 10px;\n    height: 10px; }\n    .Tooltip-module_wrapper__14iuU .Tooltip-module_arrow__2xajY:after {\n      position: absolute;\n      top: -5px;\n      width: 7px;\n      height: 7px;\n      background-color: #172b4d;\n      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);\n      content: ' ';\n      transform: rotate(45deg); }\n  .Tooltip-module_wrapper__14iuU[data-popper-placement^='top'] > .Tooltip-module_arrow__2xajY {\n    bottom: -12px; }\n  .Tooltip-module_wrapper__14iuU[data-popper-placement^='right'] > .Tooltip-module_arrow__2xajY {\n    top: 6px !important;\n    left: -4px; }\n  .Tooltip-module_wrapper__14iuU[data-popper-placement^='left'] > .Tooltip-module_arrow__2xajY {\n    top: 7px !important;\n    right: -7px; }\n\n.Tooltip-module_children__26eDk {\n  display: inline-block;\n  width: auto; }\n";
var styled = {"wrapper":"Tooltip-module_wrapper__14iuU","arrow":"Tooltip-module_arrow__2xajY","children":"Tooltip-module_children__26eDk"};
styleInject_es['default'](css_248z);

exports.default = styled;

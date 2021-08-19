import styleInject from '../../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = ".RangePicker-module_container__1lgFH {\n  position: relative; }\n  .RangePicker-module_container__1lgFH .DayPicker {\n    width: 640px;\n    padding: 30px 10px 16px;\n    border-radius: 3px;\n    border: none;\n    background: #fff;\n    font-family: \"SF Pro Text\", sans-serif;\n    outline: none;\n    box-shadow: 0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31); }\n    .RangePicker-module_container__1lgFH .DayPicker:before {\n      content: \"\";\n      width: 0;\n      height: 0;\n      border: 6px solid black;\n      border-color: transparent #fff #fff transparent;\n      transform: rotate(-135deg);\n      position: absolute;\n      top: -6px;\n      right: 30px;\n      box-shadow: 5px 5px 5px 0px rgba(51, 51, 51, 0.05); }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-wrapper {\n      position: inherit;\n      padding: 0;\n      outline: none; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Caption {\n      color: #172B4D;\n      font-size: 14px;\n      line-height: 16px;\n      text-align: center;\n      margin-bottom: 18px; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-NavButton {\n      top: 30px;\n      margin: 0; }\n      .RangePicker-module_container__1lgFH .DayPicker .DayPicker-NavButton.DayPicker-NavButton--prev {\n        left: 22px; }\n      .RangePicker-module_container__1lgFH .DayPicker .DayPicker-NavButton.DayPicker-NavButton--next {\n        right: 22px; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Month {\n      width: 310px;\n      margin: 0;\n      border-spacing: 0 5px;\n      border-collapse: separate; }\n      .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Month + .DayPicker-Month {\n        margin-left: 20px; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Weekday {\n      padding: 2px 0;\n      color: #6B778C;\n      font-size: 12px;\n      font-weight: 800;\n      line-height: 1; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day {\n      min-width: 30px;\n      padding: 0;\n      font-size: 14px;\n      line-height: 30px;\n      outline: none;\n      border-radius: 0;\n      transition: border .4s, background 0.1s;\n      color: #172B4D; }\n    .RangePicker-module_container__1lgFH .DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {\n      background-color: rgba(9, 30, 66, 0.08);\n      border-radius: 0; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--today {\n      position: relative;\n      font-weight: 600;\n      color: #0052CC; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--selected {\n      background-color: #253858;\n      color: #fff;\n      border-radius: 0; }\n      .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {\n        background-color: #253858;\n        color: #fff; }\n      .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n        background-color: rgba(9, 30, 66, 0.08);\n        color: #172B4D; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--start {\n      border-top-left-radius: 3px !important;\n      border-bottom-left-radius: 3px !important; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--end {\n      border-top-right-radius: 3px !important;\n      border-bottom-right-radius: 3px !important; }\n    .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--disabled, .RangePicker-module_container__1lgFH .DayPicker .DayPicker-Day--outside {\n      color: #a5adba;\n      background-color: transparent; }\n\n.RangePicker-module_overlay__qMlNx {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 50px;\n  z-index: 1;\n  background: #fff; }\n";
var styled = {"container":"RangePicker-module_container__1lgFH","overlay":"RangePicker-module_overlay__qMlNx"};
styleInject(css_248z);

export { styled as default };

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
var Text = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 8px auto;\n"], ["\n  margin: 8px auto;\n"])));
var Error = styled(Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 12px;\n  color: red;\n"], ["\n  font-size: 12px;\n  color: red;\n"])));
var StyledInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nbackground-color: #FFFFFF;\nborder-radius: 5px;\nbox-shadow: inset 0 -1px 0 0 #b6b6b6;\nborder: solid 1px #b6b6b6;\nfont-size: 16px;\nheight: 40px;\npadding: 20px;\nwidth: 350px;\n  \n"], ["\nbackground-color: #FFFFFF;\nborder-radius: 5px;\nbox-shadow: inset 0 -1px 0 0 #b6b6b6;\nborder: solid 1px #b6b6b6;\nfont-size: 16px;\nheight: 40px;\npadding: 20px;\nwidth: 350px;\n  \n"])));
var TextField = styled(function (_a) {
    var id = _a.id, name = _a.name, value = _a.value, placeholder = _a.placeholder, hasError = _a.hasError, isTouched = _a.isTouched, hintText = _a.hintText, type = _a.type, onChange = _a.onChange, disabled = _a.disabled, className = _a.className;
    var error = isTouched && hasError;
    return (React.createElement("div", { className: className },
        React.createElement(StyledInput, { id: id, name: name, type: type, placeholder: placeholder, value: value, onChange: onChange, disabled: disabled }),
        hintText && React.createElement(Text, null, hintText),
        error && React.createElement(Error, null, error)));
})(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
TextField.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    hintText: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string
};
export { TextField };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

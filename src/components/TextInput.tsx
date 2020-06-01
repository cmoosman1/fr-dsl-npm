import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
  margin: 8px auto;
`
const Error = styled(Text)`
  font-size: 12px;
  color: red;
`
const StyledInput = styled.input`
background-color: #FFFFFF;
border-radius: 5px;
box-shadow: inset 0 -1px 0 0 #b6b6b6;
border: solid 1px #b6b6b6;
font-size: 16px;
height: 40px;
padding: 20px;
width: 350px;
  
`

const TextField = styled(({
  id,
  name,
  value,
  placeholder,
  hasError,
  isTouched,
  hintText,
  type,
  onChange,
  disabled,
  className
}) => {
  const error = isTouched && hasError;
  return (
    <div className={className}>
        <StyledInput
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
        {hintText && <Text>{hintText}</Text>}
        {error && <Error>{error}</Error>}
    </div>
  )
})``
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
export {
  TextField
};
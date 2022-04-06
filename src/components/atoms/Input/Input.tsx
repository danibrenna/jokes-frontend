import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute, KeyboardEventHandler, useState } from "react";
import styled from "styled-components";
import { inputWrapper } from "./Input.style";

const InputWrapper = styled.div`
  ${inputWrapper}
`;

type InputProps = {
  className?: string,
  onChangeText: (value: any)=>void,
  label?: string | undefined,
  placeholder?: string | undefined,
  type?: HTMLInputTypeAttribute | undefined,
  onKeyDown?: KeyboardEventHandler<any> | undefined,
  value?: string | ReadonlyArray<string> | number | undefined,
  name?: string | undefined,
  disabled?: boolean,
  onFocus?: FocusEventHandler<any> | undefined,
  min?: number | undefined,
  maxlength?: number | undefined
}

const Input = ({
  className,
  label,
  onChangeText,
  placeholder,
  type,
  onKeyDown,
  value,
  name,
  disabled,
  onFocus,
  min,
  maxlength
}:InputProps) => {
  const disableStyle = disabled ? "disable" : "";
  let extraClass = className ? className : "";
  
  return (
    <InputWrapper className={`container ${extraClass}`}>
      <div className="title-input">{label}</div>
      <input
        type={type}
        name={name}
        min={min}
        value={value || ""}
        maxLength={maxlength}
        onChange={(event)=>onChangeText(event.target.value)}
        onKeyDown={onKeyDown}
        className={`input ${disableStyle}`}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </InputWrapper>
  );
}


export default Input;

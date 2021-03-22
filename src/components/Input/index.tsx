import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

/* Aproveita os types do input do HTML */
type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;

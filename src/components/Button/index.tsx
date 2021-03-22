import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

/* Aproveita os types do button do HTML */
type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;

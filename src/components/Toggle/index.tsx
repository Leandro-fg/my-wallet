import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    {console.log(onChange)}
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSelector
      onChange={onChange}
      checked={checked}
      className="react-switch"
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;

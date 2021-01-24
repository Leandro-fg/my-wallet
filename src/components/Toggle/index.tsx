import React, { useState } from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        onChange={handleChange}
        checked={checked}
        className="react-switch"
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toggle;

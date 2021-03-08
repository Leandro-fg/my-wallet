import React from "react";

import { Container } from "./styles";

interface IselectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const SelectInput: React.FC<IselectInputProps> = ({ options, onChange}) => {
  return (
    <Container>
      <select onChange={onChange} name="" id="">
        {options.map((option) => (
          <option 
          key={option.value}
          value={option.value}
          >{option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;

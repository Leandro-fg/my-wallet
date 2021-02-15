import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const options = [
  { value: "Rodrigo", label: "Rodrigo" },
  { value: "Leandro", label: "Leandro" },
  { value: "Sabrina", label: "Sabrina" },
];

const List: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;

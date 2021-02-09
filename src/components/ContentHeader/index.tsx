import React from "react";

import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../../components/SelectInput";

const ContentHeader: React.FC = () => {
  
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Leandro", label: "Leandro" },
    { value: "Sabrina", label: "Sabrina" },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>Titulo</h1>
      </TitleContainer>
      <Controllers>
        <SelectInput options={options} />
      </Controllers>
    </Container>
  );
};

export default ContentHeader;

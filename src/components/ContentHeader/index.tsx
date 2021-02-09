import React from "react";

import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../../components/SelectInput";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  controllers: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  controllers,
}) => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Leandro", label: "Leandro" },
    { value: "Sabrina", label: "Sabrina" },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{controllers}</Controllers>
    </Container>
  );
};

export default ContentHeader;

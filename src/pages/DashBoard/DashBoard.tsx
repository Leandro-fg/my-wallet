import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  const options = [
    { value: "Rodrigo", label: "Rodrigo" },
    { value: "Leandro", label: "Leandro" },
    { value: "Sabrina", label: "Sabrina" },
  ];
  return (
    <div>
      <Container>
        <ContentHeader title="Dashboard" lineColor="#fff">
          <SelectInput options={options} onChange={()=>{}}/>
        </ContentHeader>
      </Container>
    </div>
  );
};

export default DashBoard;

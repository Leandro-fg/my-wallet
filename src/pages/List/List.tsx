import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./styles";

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
      <Content>
        <HistoryFinanceCard
          cardColor="#313862"
          tagColor="#e44c4e"
          title="compra"
          subTitle="15/02/2021"
          amount="R$: 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;

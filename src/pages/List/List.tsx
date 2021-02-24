import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content, Filters } from "./styles";

const months = [
  { value: 2, label: "Fevereiro" },
  { value: 3, label: "Março" },
  { value: 4, label: "Abril" },
];

const years = [
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
];

const List: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#e44c4e">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button 
          type="button" 
          className="tag-filter tag-filter-recurrent" 
        >
          Recorrentes
        </button>
        <button 
          type="button" 
          className="tag-filter tag-filter-eventual" 
        >
          Eventuais
        </button>
      </Filters>
      <Content>
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
      </Content>
    </Container>
  );
};

export default List;

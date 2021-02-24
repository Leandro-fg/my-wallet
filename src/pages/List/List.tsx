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
          tagColor="#e44c4e"
          title="Placa de Video"
          subTitle="15/02/2021"
          amount="R$: 3500,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Processador"
          subTitle="15/02/2021"
          amount="R$: 1500,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Placa mãe"
          subTitle="15/02/2021"
          amount="R$: 800,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Font de 700w"
          subTitle="15/02/2021"
          amount="R$: 760,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
        <HistoryFinanceCard
          tagColor="#e44c4e"
          title="Terreno"
          subTitle="15/02/2021"
          amount="R$: 740,00"
        />
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

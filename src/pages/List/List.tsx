import React, { useMemo, useState, useEffect } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { Container, Content, Filters } from "./styles";

interface IRouterParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dataFormated: string;
  tagColor: string;
}

const List: React.FC<IRouterParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [yearSelected, setYearSelected] = useState(String);
  const [monthSelected, setMonthSelected] = useState(String);
  const [daySelected, setDaySelected] = useState(String);

  const { type } = match.params;

  const titleProps = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
          gains,
        }
      : {
          title: "Saidas",
          lineColor: "#e44c4e",
          expenses,
        };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);
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

  useEffect(() => {
    const response = listData.map((item: any) => {
      return {
        id: String(Math.random() * data.length),
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormated: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });
    setData(response);
    
  }, []);

  return (
    <Container>
      <ContentHeader title={titleProps.title} lineColor={titleProps.lineColor}>
        <SelectInput options={months} onChange={(e) => setMonthSelected(e.target.value)} />
        <SelectInput options={years} onChange={(e) => setMonthSelected(e.target.value)}/>
      </ContentHeader>
      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinanceCard
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subTitle={item.dataFormated}
            amount={item.amountFormated}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;

import React, { useMemo, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import ListOfmonths from "../../utils/months";

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
  const [yearSelected, setYearSelected] = useState(
    String(new Date().getFullYear())
  );
  const [monthSelected, setMonthSelected] = useState(
    String(new Date().getMonth() + 1)
  );
  const [selectedFrequency, setSelectedFrequency] = useState(['recorrente', 'eventual'])

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

  const months = useMemo(() => {
    return ListOfmonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year); /* Garante que só exista um ano na lista */
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [listData]);

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    });

    const formattedData = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormated: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });
    setData(formattedData);
  }, [listData, monthSelected, yearSelected, data.length, selectedFrequency]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

    if (alreadySelected >= 0){
      const filtered = selectedFrequency.filter(item => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency((prev) => [...prev, frequency])
    }
  }

  return (
    <Container>
      <ContentHeader title={titleProps.title} lineColor={titleProps.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${selectedFrequency.includes('recorrente') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${selectedFrequency.includes('eventual') && 'tag-actived'}`}
          onClick={() => handleFrequencyClick("eventual")}
        >
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

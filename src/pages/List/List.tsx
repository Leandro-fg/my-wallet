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
  dateFormated: string;
  tagColor: string;
}

const List: React.FC<IRouterParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [yearSelected, setYearSelected] = useState(
    Number(new Date().getFullYear())
  );
  const [monthSelected, setMonthSelected] = useState(
    Number(new Date().getMonth() + 1)
  );
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
    "recorrente",
    "eventual",
  ]);

  const movimentType = match.params.type;

  const titleProps = useMemo(() => {
    return movimentType === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#4e41f0",
          gains,
        }
      : {
          title: "Saidas",
          lineColor: "#e44c4e",
          expenses,
        };
  }, [movimentType]);

  const listData = useMemo(() => {
    return movimentType === "entry-balance" ? gains : expenses;
  }, [movimentType]);

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
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      );
    });

    const formattedData = filteredDate.map((item) => {
      return {
        id: uuidv4(),
        description: item.description,
        amountFormated: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormated: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });
    setData(formattedData);
  }, [
    listData,
    monthSelected,
    yearSelected,
    data.length,
    frequencyFilterSelected,
  ]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency
      );
      setFrequencyFilterSelected(filtered);
    } else {
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };
  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("invalid month value. is accept 0 - 24");
    }
  };
  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error("invalid month value. is accept 0 - 24");
    }
  };
  return (
    <Container>
      <ContentHeader title={titleProps.title} lineColor={titleProps.lineColor}>
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <Filters>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual ${
            frequencyFilterSelected.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent ${
            frequencyFilterSelected.includes("eventual") && "tag-actived"
          }`}
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
            subTitle={item.dateFormated}
            amount={item.amountFormated}
          />
        ))}
      </Content>
    </Container>
  );
};

export default List;

import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";

import happyImg from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import ListOfmonths from "../../utils/months";

import { Container, Content } from "./styles";

const DashBoard: React.FC = () => {
  const [yearSelected, setYearSelected] = useState(
    Number(new Date().getFullYear())
  );
  const [monthSelected, setMonthSelected] = useState(
    Number(new Date().getMonth() + 1)
  );
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

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("invalid month value. is accept 0 - 24");
    }
  };
  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("invalid month value. is accept 0 - 24");
    }
  };

  return (
    <div>
      <Container>
        <ContentHeader title="Dashboard" lineColor="#F7931B">
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
        <Content>
          <WalletBox
            title="saldo"
            color="#4e41f0"
            amount={150.0}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="dolar"
          />
          <WalletBox
            title="Entradas"
            color="#F7931B"
            amount={5000.0}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="arrowUp"
          />
          <WalletBox
            title="saldo"
            color="#e44c4e"
            amount={4850.0}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="arrowDown"
          />
          <MessageBox
            title="Muito Bem"
            description="Sua carteira está positiva!"
            footerText="Continue assim. Considere inverstir o seu saldo."
            icon={happyImg}
          />
        </Content>
      </Container>
    </div>
  );
};

export default DashBoard;

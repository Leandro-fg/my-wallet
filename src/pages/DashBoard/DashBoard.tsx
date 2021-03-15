import React, { useMemo, useState } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";
import MessageBox from "../../components/MessageBox";
import PieChart from "../../components/PieChart";

import happyImg from "../../assets/happy.svg";
import sadImg from "../../assets/sad.svg";
import grinningImg from "../../assets/grinning.svg";

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

  const totalExenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number.");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount! Amount must be number.");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExenses;
  }, [totalGains, totalExenses]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias!",
        icon: sadImg,
      };
    } else if (totalBalance == 0) {
      return {
        title: "Ufaa!",
        description: "NEste mês, você gastou exatamente o que ganhou.",
        footerText:
          "Tenha cuidado. No próximo mês tente poupar o seu dinheiro!",
        icon: grinningImg,
      };
    } else {
      return {
        title: "Muito Bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere inverstir o seu saldo.",
        icon: happyImg,
      };
    }
  }, [totalBalance]);

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
            amount={totalBalance}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="dolar"
          />
          <WalletBox
            title="Entradas"
            color="#F7931B"
            amount={totalGains}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="arrowUp"
          />
          <WalletBox
            title="saldo"
            color="#e44c4e"
            amount={totalExenses}
            footerLabel="atualizado com base nas entradas e saidas"
            icon="arrowDown"
          />
          <MessageBox
            title={message.title}
            description={message.description}
            footerText={message.footerText}
            icon={message.icon}
          />
          <PieChart />
        </Content>
      </Container>
    </div>
  );
};

export default DashBoard;

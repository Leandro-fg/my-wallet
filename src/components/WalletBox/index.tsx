import React from "react";

import dolarImg from "../../assets/dolar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

import { Container } from "./styles";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  color: string;
  icon: "dolar" | "arrowUp" | "arrowDown";
}

const walletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  color,
  icon,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case "dolar":
        return dolarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;
      default:
        return undefined;
    }
  };
  return (
    <Container color={color}>
      <span> {title}</span>
      <h1>{amount}</h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default walletBox;

import React from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import logoImg from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
  Title,
  MenuItemButton
} from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo My-wallet" />
        <Title>Minha carteira</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/list/exit-balance">
          <MdArrowUpward />
          Saídas
        </MenuItemLink>
        <MenuItemButton onClick={()=> signOut()}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;

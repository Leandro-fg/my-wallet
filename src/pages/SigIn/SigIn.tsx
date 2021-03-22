import React from "react";

import logoImg from "../../assets/logo.svg";

import {
  Container,
  Logo,
  Form,
  FormTitle,
} from "./styles";

const SigIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </Logo>
      <Form>
        <FormTitle>Entrar</FormTitle>
        <input type="text" />
        <input type="text" />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default SigIn;
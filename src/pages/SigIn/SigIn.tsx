import React from "react";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";

import { Container, Logo, Form, FormTitle } from "./styles";

const SigIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </Logo>
      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>
        <Input/>
        <Input/>

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default SigIn;

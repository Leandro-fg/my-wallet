import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import { Container, Logo, Form, FormTitle } from "./styles";

const SigIn: React.FC = () => {
  const [email, setEmail] = useState(String);
  const [password, setPassword] = useState(String);

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha carteira</h2>
      </Logo>
      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input
          type="email"
          required
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Acessar</Button>
        <a href="/register">Registrar-se</a>
      </Form>
    </Container>
  );
};

export default SigIn;

import React from "react";

import happyImg from "../../assets/happy.svg";

import { Container } from "./styles";

const MessageBox: React.FC = () => {
  return (
    <Container>
      <header>
        <h1>
          Muito bem!
          <img src={happyImg} alt="" />
        </h1>
      </header>
    </Container>
  );
};

export default MessageBox;

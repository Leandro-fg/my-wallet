import React from "react";

import ContentHeader from "../../components/ContentHeader";

import { Container } from "./styles";

const DashBoard: React.FC = () => {
  return (
    <div>
      <Container>
        <ContentHeader />
      </Container>
    </div>
  );
};

export default DashBoard;

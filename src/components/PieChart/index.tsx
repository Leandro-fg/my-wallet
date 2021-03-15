import React from "react";

// import { , Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SideLeft,
  LegendContainer,
  SideRight,
  Legend,
} from "./styles";

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <LegendContainer>
        <Legend color={"#f7931b"}>
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
        <Legend color={"#e44c4e"}>
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>
    <SideRight></SideRight>
  </Container>
);

export default PieChart;

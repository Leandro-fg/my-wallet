import React from "react";

// import { , Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SideLeft,
  LegendContainer,
  SideRight,
  Legend,
} from "./styles";

interface IPieChartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChart: React.FC<IPieChartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((indicator) => (
          <Legend key={indicator.name} color={"#f7931b"}>
            <div>{indicator.percent}</div>
            <span>{indicator.name}</span>
          </Legend>
          /* <Legend color={"#e44c4e"}>
          <div>95%</div>
          <span>Saídas</span>
        </Legend> */
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight></SideRight>
  </Container>
);

export default PieChart;

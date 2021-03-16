import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

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

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
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
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { Container } from "./styles";

interface IHistoryBox {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  linecolorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBox> = ({
  data,
  lineColorAmountEntry,
  linecolorAmountOutput,
}) => (
  <Container>
    <h2>Histórico de saldo</h2>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name="Entradas"
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name="Saídas"
          stroke={linecolorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

export default HistoryBox;

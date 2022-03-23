import { FC } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BarChartDataInfo from '../models/BarChartInfo';


type BarChartProps = {
    data: BarChartDataInfo[];
}

const BarChartComp: FC<BarChartProps> = ({ data }) => {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a"  fill="#f43f5e" />
          <Bar dataKey="uv" stackId="a"  fill="#2dd4bf" />
        </BarChart>
      </ResponsiveContainer>
    );
}

export default BarChartComp;

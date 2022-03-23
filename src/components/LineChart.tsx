import { FC } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import LineChartDataInfo from "../models/LineChartModel";

type LineChartBoardProps = {
    data: LineChartDataInfo[];
};

const LineChartBoard: FC<LineChartBoardProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default LineChartBoard;
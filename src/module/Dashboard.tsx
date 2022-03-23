import { FC } from "react";
import Cards from "../components/Cards";
import { CARD_DETAILS_MOCK_DATA } from "../constants/cardDetailsMockData";
import Table from '../components/Table';
import BarChart from "../components/BarChart";
import { BAR_CHART_MOCK_DATA } from "../constants/barChartMockData";
import { TABLE_DATA, TABLE_HEADING } from "../constants/tableMockData";

const Dashboard: FC = () => {
  return (
    <div className="px-3 bg-gray-200 overflow-y-auto">
        <h1 className="font-bold text-2xl pt-4">Dashboard</h1>
      <div className="pt-4 pb-2">
        <Cards data={CARD_DETAILS_MOCK_DATA} />
        <div className="flex h-96">
          <div className="lg:w-2/3 rounded overflow-y-auto overflow-x-hidden shadow-lg p-2 px-5 bg-white my-8">
            <Table data={TABLE_DATA} heading={TABLE_HEADING} />
          </div>
          <div className="lg:w-1/3 rounded overflow-hidden shadow-lg bg-white ml-2 my-8">
            <div className="text-base font-bold text-gray-900 px-6 pt-8 pb-2 text-left">
              {`Views & Sells`}
            </div>
            <div className="flex items-center text-sm font-bold text-gray-900 px-6 pb-2 text-left ">
              <div className="h-2 w-2 bg-teal-400 mr-2"></div>
              <div className="mr-2">Total Views</div>  
              <div className="h-2 w-2 bg-rose-500 mr-2"></div>
              <div className="mr-2"> Total Sells</div>
            </div>
            <div className="h-full overflow-y-auto">
              <BarChart data={BAR_CHART_MOCK_DATA} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
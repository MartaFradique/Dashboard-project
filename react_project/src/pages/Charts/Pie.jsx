import React from "react";
import { Header, Doughnut } from "../../components";

import { pieChartData } from "../../data/dummy";
const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
      <Header category="Chart" title="Inflation Rate in percentage" />
      <div className="w-full">
        <Doughnut
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;

import React from "react";
import { Header, LineChart } from "../../components";
const Line = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg ">
      <Header category="Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;

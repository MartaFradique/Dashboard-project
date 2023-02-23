import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { BiUpArrowAlt } from "react-icons/bi";
import { AiFillAmazonCircle } from "react-icons/ai";
import {
  Stacked,
  Doughnut,
  Button,
  SparkLine,
  LineChart,
  AreaChart,
} from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
  pieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvidor";

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-12">
      {/* First section */}

      <div className="flex gap-10 flex-wrap justify-center h-780">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 basis-1/2"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Doughnut
                id="pie-chart"
                data={ecomPieChartData}
                legendVisiblity={false}
                height="160px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* second section */}

      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-44 dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl"
              //className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-lg p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-2xl font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* third section */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 mb-3">
        <div className="flex flex-col ">
          <div className=" rounded-2xl md:w-400 p-4 m-3 basis-1/2 bg-white h-44 dark:bg-secondary-dark-bg dark:text-gray-200 "></div>
          <div className=" rounded-2xl md:w-400 p-4 m-3 basis-1/2 bg-white h-44 dark:bg-secondary-dark-bg dark:text-gray-200 ">
            <Doughnut
              id="chart-pie"
              data={pieChartData}
              legendVisiblity
              height="180px"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200  rounded-xl  p-10 pt-9 m-3 md:w-780  ">
          <div className="pb-4 font-semibold dark:text-white text-2xl font-mono">
            Inflation Rate
          </div>
          <LineChart />
        </div>
      </div>

      {/* fourth section */}
      {/* <div className="flex gap-10 flex-wrap justify-center h-780">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  "> */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center  mb-3">
        <div
          className="rounded-2xl flex flex-row"
          style={{ backgroundColor: currentColor }}
        >
          <div className=" text-white p-5 pt-2 m-3 md:w-72  ">
            <div className="text-white text-sm font-sans mb-2">
              Total Income
            </div>
            <div className="text-white text-2xl font-mono font-bold ">
              $14,025
            </div>
            <div className="flex flex-row font-sans text-center gap-3 mt-2">
              <div className="text-center text-sm">3.14</div>
              <BiUpArrowAlt />
              <div className="text-center text-sm">this year</div>
            </div>
          </div>

          <div className=" text-white p-5 pt-2 m-3 md:w-72  ">
            <div className="text-white text-sm font-sans mb-2">
              Total Income
            </div>
            <div className="text-white text-2xl font-mono font-bold ">
              $14,025
            </div>
            <div className="flex flex-row font-sans text-center gap-3 mt-2">
              <div className="text-center text-sm">3.14</div>
              <BiUpArrowAlt />
              <div className="text-center text-sm">this year</div>
            </div>
          </div>
          <div className=" text-white p-5 pt-2 m-3 md:w-72  ">
            <div className="text-white text-sm font-sans mb-2">
              Total Income
            </div>
            <div className="text-white text-2xl font-mono font-bold ">
              $14,025
            </div>
            <div className="flex flex-row font-sans text-center gap-3 mt-2">
              <div className="text-center text-sm">3.14</div>
              <BiUpArrowAlt />
              <div className="text-center text-sm">this year</div>
            </div>
          </div>
          <div className=" text-white p-5 pt-2 m-3 md:w-72  ">
            <div className="text-white text-sm font-sans mb-2">
              Total Income
            </div>
            <div className="text-white text-2xl font-mono font-bold ">
              $14,025
            </div>
            <div className="flex flex-row font-sans text-center gap-3 mt-2">
              <div className="text-center text-sm">3.14</div>
              <BiUpArrowAlt />
              <div className="text-center text-sm">this year</div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth section */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-xl p-10 pt-9 m-3 md:w-780">
          <div className="pb-4 font-semibold dark:text-white text-2xl font-mono">Inflacion Rate</div>
          <div className="flex flex-col">
           
              <AreaChart />
           
          </div>
        
         
        </div>
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-xl p-10 pt-9 m-3 md:w-400">
          <div className="pb-10 font-semibold dark:text-white text-2xl font-mono">Your Portfolio</div>

          <div className="dark:text-white text-xl text-center">$7897,5</div>
          <div className=" dark:text-white text-sm text-gray-700 text-center pb-12">Total Balance</div>
        <div>
          <div className=" border-b-1 border-color dark:border-white mb-4">

            <div className="flex flex-row justify-between pb-10">
              <div>Cash Deposits</div>
              <div>$789697,5</div>
            </div>
          </div>

            <div className="border-b-1 border-color dark:border-white mb-4">  
            <div className="flex flex-row justify-between pb-10">
              <div>Invested Dividents</div>
              <div>$697,5</div>
            </div>
            </div>

            <div className="border-b-1 border-color dark:border-white mb-4">  
            <div className="flex flex-row justify-between pb-5">
              <AiFillAmazonCircle style={{height:'30px', width:'30px', color:'red'}} />
              <div>Invested Labour</div>
              <div>$1234,5</div>
            </div>
            </div>

            <div className="flex flex-row justify-between">
              <div>Capital Gains</div>
              <div>$1234789,3</div>
            </div>
         
        </div>
        </div>
      </div>
     
    </div>
  );
};

export default Ecommerce;

import React from 'react'
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvidor';
const LineChart = () => {
  const { currentMode } = useStateContext();
  console.log(currentMode)
  return (
    <div>
      <ChartComponent
      id="line-chart"
      height='432px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{border: { width : 0}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
     

      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
          ) }
        </SeriesCollectionDirective>
      </ChartComponent>
      
    </div>
  )
}

export default LineChart

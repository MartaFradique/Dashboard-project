import React from 'react'
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, Inject, DateTime, Legend, Tooltip, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvidor';
import { Header } from '../../components'
const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className='m-2 md:m-10 mt-24 p-10 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg '>
      <Header category="Chart" title="Inflation Rate in percentage" /> 
      <div className='w-full'>
    <div>
      <ChartComponent
      id="area-chart"
      height='432px'
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{border: { width : 0}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
     

      >
        <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item} />
          ) }
        </SeriesCollectionDirective>
      </ChartComponent>
      
    </div>
    </div>
    </div>
     
  )
}

export default Area

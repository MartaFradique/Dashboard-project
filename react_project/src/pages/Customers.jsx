import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject , Selection, Toolbar, Edit, Sort, Filter } from '@syncfusion/ej2-react-grids';
import {customersData, customersGrid} from '../data/dummy';
import React from 'react'
import {Header } from '../components';
const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header title="Costumers" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{allowEditing: true, allowDeleting: true, mode: 'Normal'}}
        width="auto"
        >
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {... item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers

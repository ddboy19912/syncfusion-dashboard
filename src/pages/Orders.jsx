import React from 'react'
import {ordersData, contextMenuItems, ordersGrid} from '../data/data/dummy'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import {Header} from '../components'

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded=3xl">
    <Header title='Orders' category='Page'/>
    <GridComponent id='gridcomp' dataSource={ordersData} allowPaging>
<ColumnsDirective>
  {ordersGrid.map((item, index) => (
<ColumnDirective key={index} {...item} />
  ))}
</ColumnsDirective>
<Inject service={[Resize,  Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
    </GridComponent>
    </div>
  )
}

export default Orders
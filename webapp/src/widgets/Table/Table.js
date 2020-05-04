import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import './Table.css'

const Table = ({ columns, data, keyField }) => {
	return (
		<BootstrapTable
			keyField={keyField}
			data={data}
			columns={columns}
			wrapperClasses='table-responsive mb-25'
			rowClasses='text-table-data'
			headerClasses='.text-table-data'
			classes='font-weight-normal f-15 table-striped .text-table-data'
		/>
	)
}

export default Table

import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import './Table.css'

const Table = ({ columns, data, keyField }) => {
	return (
		<BootstrapTable
			keyField={keyField}
			data={data}
			columns={columns}
			wrapperClasses='font-weight-normal f-15 table-striped text-secondry'
		/>
	)
}

export default Table

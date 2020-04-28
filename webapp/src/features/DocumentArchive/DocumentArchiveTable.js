import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { Form, Button } from 'react-bootstrap'
import './DocumentArchive.styles.css'

const customCheckbox = (column) => (
	<>
		<Form.Label>
			<Form.Check
				type='checkbox'
				label=''
				id={`document-Archive-Search-${
					typeof column === 'string' ? column : column.text
				}`}
			/>
		</Form.Label>
		{typeof column === 'string' ? column : column.text}
	</>
)

const viewButton = () => (
	<Button
		variant='primary'
		id='viewButton'
		size='sm'
		className='font-weight-normal'
	>
		View
	</Button>
)

const tableData = [
	{
		customer: 'test1',
		creation: 'Creation',
		serialNumber: 12346,
		status: 'online',
		tsn: 79797,
		assignedUser: 'New User',
	},
	{
		customer: 'test2',
		creation: 'Potter',
		serialNumber: 12346,
		status: 'offline',
		tsn: 654498,
		assignedUser: 'User',
	},
	{
		customer: 'test3',
		creation: 'Creation',
		serialNumber: 12346,
		status: 'online',
		tsn: 79797,
		assignedUser: 'New User',
	},
	{
		customer: 'test4',
		creation: 'Potter',
		serialNumber: 12346,
		status: 'offline',
		tsn: 654498,
		assignedUser: 'User',
	},
	{
		customer: 'test5',
		creation: 'Creation',
		serialNumber: 12346,
		status: 'online',
		tsn: 79797,
		assignedUser: 'New User',
	},
	{
		customer: 'test6',
		creation: 'Potter',
		serialNumber: 12346,
		status: 'offline',
		tsn: 654498,
		assignedUser: 'User',
	},
	{
		customer: 'test7',
		creation: 'Creation',
		serialNumber: 12346,
		status: 'online',
		tsn: 79797,
		assignedUser: 'New User',
	},
	{
		customer: 'test8',
		creation: 'Potter',
		serialNumber: 12346,
		status: 'offline',
		tsn: 654498,
		assignedUser: 'User',
	},
]
const tableHeader = [
	{
		dataField: 'customer',
		text: 'Customer',
		sort: true,
		headerFormatter: customCheckbox,
		formatter: customCheckbox,
	},
	{
		dataField: 'creation',
		text: 'Creation',
		sort: true,
	},
	{
		dataField: 'serialNumber',
		text: 'Serial Number',
		sort: true,
	},
	{
		dataField: 'status',
		text: 'Status',
		sort: true,
	},
	{
		dataField: 'tsn',
		text: 'TSN',
		sort: true,
	},
	{
		dataField: 'assignedUser',
		text: 'Assigned User',
		sort: true,
	},
	{
		dataField: 'viewButton',
		text: '',
		formatter: viewButton,
	},
]

const DocumentArchiveTable = () => {
	return (
		<BootstrapTable
			striped
			bordered={false}
			bootstrap4
			keyField='viewButton'
			noDataIndication='Table is Empty'
			columns={tableHeader}
			data={tableData}
			rowClasses={(rowIndex) =>
				rowIndex % 2 === 0 ? 'tableRowEven' : 'tableRowOdd'
			}
		/>
	)
}

export default DocumentArchiveTable

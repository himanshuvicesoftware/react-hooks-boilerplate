import React from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import Table from '../../widgets/Table'
import { useHistory } from 'react-router-dom'
const decreaseIcon = require('../../assets/icons/Decrease.svg')

const selectIcon = require('../../assets/icons/selectIcon.svg')
const DocumentArchiveTable = () => {
	const history = useHistory()
	const customCheckbox = (column) => (
		<div className='custom-checkbox mr-2 d-inline-block'>
			<Form.Check
				type='checkbox'
				label={typeof column === 'string' ? column : column.text}
				id={`document-Archive-Search-${
					typeof column === 'string' ? column : column.text
				}`}
			/>
		</div>
	)

	const viewButton = (id) => (
		<Button
			variant='primary'
			id='viewButton'
			size='sm'
			className='font-weight-normal'
			onClick={() => history.push(`documents/${id}`)}
		>
			View
		</Button>
	)

	const mockDocData = [
		{
			id: 1,
			customer: 'test1',
			creation: 'Creation',
			serialNumber: 12346,
			status: 'online',
			tsn: 79797,
			assignedUser: 'New User',
		},
		{
			id: 2,
			customer: 'test2',
			creation: 'Potter',
			serialNumber: 12346,
			status: 'offline',
			tsn: 654498,
			assignedUser: 'User',
		},
		{
			id: 3,
			customer: 'test3',
			creation: 'Creation',
			serialNumber: 12346,
			status: 'online',
			tsn: 79797,
			assignedUser: 'New User',
		},
		{
			id: 4,
			customer: 'test4',
			creation: 'Potter',
			serialNumber: 12346,
			status: 'offline',
			tsn: 654498,
			assignedUser: 'User',
		},
		{
			id: 5,
			customer: 'test5',
			creation: 'Creation',
			serialNumber: 12346,
			status: 'online',
			tsn: 79797,
			assignedUser: 'New User',
		},
		{
			id: 6,
			customer: 'test6',
			creation: 'Potter',
			serialNumber: 12346,
			status: 'offline',
			tsn: 654498,
			assignedUser: 'User',
		},
		{
			id: 7,
			customer: 'test7',
			creation: 'Creation',
			serialNumber: 12346,
			status: 'online',
			tsn: 79797,
			assignedUser: 'New User',
		},
		{
			id: 8,
			customer: 'test8',
			creation: 'Potter',
			serialNumber: 12346,
			status: 'offline',
			tsn: 654498,
			assignedUser: 'User',
		},
	]
	const columns = [
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
			sortCaret: (order) => {
				if (!order)
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={decreaseIcon} />
						</span>
					)
				else if (order === 'asc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} />
						</span>
					)
				else if (order === 'desc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} className='rotational'></Image>
						</span>
					)
				return null
			},
		},
		{
			dataField: 'serialNumber',
			text: 'Serial Number',
			sort: true,
			sortCaret: (order) => {
				if (!order)
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={decreaseIcon} />
						</span>
					)
				else if (order === 'asc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} />
						</span>
					)
				else if (order === 'desc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} className='rotational'></Image>
						</span>
					)
				return null
			},
		},
		{
			dataField: 'status',
			text: 'Status',
			sort: true,
			sortCaret: (order) => {
				if (!order)
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={decreaseIcon} />
						</span>
					)
				else if (order === 'asc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} />
						</span>
					)
				else if (order === 'desc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} className='rotational'></Image>
						</span>
					)
				return null
			},
		},
		{
			dataField: 'tsn',
			text: 'TSN',
			sort: true,
			sortCaret: (order) => {
				if (!order)
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={decreaseIcon} />
						</span>
					)
				else if (order === 'asc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} />
						</span>
					)
				else if (order === 'desc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} className='rotational'></Image>
						</span>
					)
				return null
			},
		},
		{
			dataField: 'assignedUser',
			text: 'Assigned User',
			sort: true,
			sortCaret: (order) => {
				if (!order)
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={decreaseIcon} />
						</span>
					)
				else if (order === 'asc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} />
						</span>
					)
				else if (order === 'desc')
					return (
						<span>
							&nbsp;&nbsp;
							<Image src={selectIcon} className='rotational'></Image>
						</span>
					)
				return null
			},
		},
		{
			dataField: 'id',
			text: '',
			formatter: viewButton,
		},
	]

	return <Table keyField='customer' columns={columns} data={mockDocData} />
}

export default DocumentArchiveTable

import React from 'react'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'
import classNames from 'classnames'
import BusyIndicator from '../../widgets/busyIndicator'

const FileList = ({ attachmentsData }) => {
	const ViewButtonFormatter = () => {
		return (
			<span>
				<Button variant='primary' size='sm' className='font-weight-normal'>
					View
				</Button>
			</span>
		)
	}

	const columns = [
		{
			dataField: 'fileName',
			text: 'File Name',
			sort: true,
		},
		{
			dataField: 'uploadedBy',
			text: 'Uploaded By',
			sort: true,
		},
		{
			dataField: 'uploadedOn',
			text: 'Uploaded On',
			sort: true,
		},
		{
			dataField: 'fileType',
			text: 'Type',
			sort: true,
		},
		{
			dataField: 'id',
			text: '',
			formatter: ViewButtonFormatter,
		},
	]

	return (
		<BusyIndicator>
			<BootstrapTable
				keyField='id'
				data={attachmentsData}
				columns={columns}
				rowClasses={(row, rowIndex) =>
					classNames(rowIndex % 2 === 0 ? 'tableRowEven' : 'tableRowOdd')
				}
				headerClasses='headerStyle'
				className='font-weight-normal f-15 table-striped text-secondry'
			/>
		</BusyIndicator>
	)
}

export default FileList

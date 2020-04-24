import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next'

export default function FileList() {
	const files = [
		{
			id: 1,
			fileName: '4473EID-1029.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: '4473',
		},
		{
			id: 2,
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'ATF F 3310.12',
		},
		{
			id: 3,
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'ATF Form-4',
		},
		{
			id: 4,
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'Other',
		},
	]
	function ViewButtonFormatter(cell, row) {
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
	const rowClasses = (row, rowIndex) => {
		return rowIndex % 2 === 0 ? 'tableRowEven' : 'tableRowOdd'
	}

	return (
		<Fragment>
			<BootstrapTable
				keyField='id'
				data={files}
				columns={columns}
				rowClasses={rowClasses}
				headerClasses='headerStyle'
				className='font-weight-normal f-15 table-striped text-secondry'
			/>
		</Fragment>
	)
}

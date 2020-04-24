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
				<Button className='btn btn-primary font-weight-normal btn-sm'>
					View
				</Button>
			</span>
		)
	}

	const columns = [
		{
			dataField: 'fileName',
			text: 'File Name',
		},
		{
			dataField: 'uploadedBy',
			text: 'Uploaded By',
		},
		{
			dataField: 'uploadedOn',
			text: 'Uploaded On',
		},
		{
			dataField: 'fileType',
			text: 'Type',
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

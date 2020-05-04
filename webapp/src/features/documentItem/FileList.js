import React from 'react'
import { Button } from 'react-bootstrap'
import Table from '../../widgets/Table'

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

	return <Table keyField='id' data={attachmentsData} columns={columns} />
}

export default FileList

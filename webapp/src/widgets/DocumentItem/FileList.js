import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

export default function FileList() {
	const files = [
		{
			fileName: '4473EID-1029.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: '4473',
		},
		{
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'ATF F 3310.12',
		},
		{
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'ATF Form-4',
		},
		{
			fileName: 'attachment-file.pdf',
			uploadedBy: 'Cody Miles',
			uploadedOn: '11/01/20',
			fileType: 'Other',
		},
	]
	return (
		<Fragment>
			<div className='table-responsive mb-50'>
				<table className='table font-weight-normal f-15 table-striped text-secondry'>
					<thead>
						<tr className='text-secondry'>
							<th width='250' className='text-nowrap'>
								File Name
							</th>
							<th width='150'>Uploaded By</th>
							<th width='150' className='text-nowrap'>
								Uploaded On
							</th>
							<th>Type</th>
							<th width='120'></th>
						</tr>
					</thead>

					<tbody>
						{files.map((file, index) => (
							<tr key={index}>
								<td>{file.fileName} </td>
								<td>{file.uploadedBy} </td>
								<td>{file.uploadedOn}</td>
								<td>{file.fileType}</td>
								<td>
									<Button
										className='btn btn-primary font-weight-normal btn-sm'
										href='#'
									>
										View
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Fragment>
	)
}

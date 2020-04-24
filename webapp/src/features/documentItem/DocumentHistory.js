import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './DocumentItem.css'

const DocumentHistory = () => {
	const mockDocumentHistory = [
		{
			id: 1,
			type: 'Attachment File',
			time: '11/01/20 at 11:01 AM',
			detail: 'attachment-file.pdf Uploaded',
		},
		{
			id: 2,
			type: 'Version',
			time: '11/01/20 at 11:01 AM',
			detail: 'Document Version 2 Created',
		},
		{
			id: 3,
			type: 'Note by Cody Miles',
			time: '11/01/20 at 11:01 AM',
			detail: '“Need to Double Check the Serial Number”',
		},
		{
			id: 4,
			type: 'Event',
			time: '11/01/20 at 11:01 AM',
			detail: 'Cody Miles Viewed 4473EID-1029.pdf',
		},
		{
			id: 5,
			type: 'Version',
			time: '11/01/20 at 11:01 AM',
			detail: 'Document Created',
		},
	]
	return (
		<>
			<Card.Title className='font-semi-bold mb-15'>Document History</Card.Title>

			{mockDocumentHistory.map((history, index) => (
				<Card key={index} className='border-0 shadow-sm mb-15 text-light'>
					<Card.Body className='p-25'>
						<div className='d-flex mb-15 font-semi-bold'>
							<span>{history.type}</span>
							<span className='ml-auto'>{history.time}</span>
						</div>

						<div className='d-flex align-items-center'>
							<span className='font-weight-normal'>{history.detail}</span>
							{history.type === 'Version' && (
								<Button variant='outline' size='md' className='ml-auto'>
									View
								</Button>
							)}
						</div>
					</Card.Body>
				</Card>
			))}
		</>
	)
}

export default DocumentHistory

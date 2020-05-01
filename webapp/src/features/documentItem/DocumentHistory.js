import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './DocumentItem.css'
import BusyIndicator from '../../widgets/busyIndicator'

const DocumentHistory = ({ documentHistoryData }) => {
	return (
		<>
			<Card.Title className='font-semi-bold mb-15'>Document History</Card.Title>
			<BusyIndicator>
				{documentHistoryData &&
					documentHistoryData.map((history, index) => (
						<Card key={index} className='border-0 shadow-sm mb-15 text-light'>
							<Card.Body className='p-25'>
								<div className='d-flex mb-15'>
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
			</BusyIndicator>
		</>
	)
}

export default DocumentHistory

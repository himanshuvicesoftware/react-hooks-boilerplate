import React from 'react'
import './DocumentArchive.styles.css'
import { Card, Form } from 'react-bootstrap'

const DocumentArchiveFilter = () => {
	const filterLabels = ['Filter by Assigned User', 'Filter by Document Status']
	return (
		<Card className='shadow-sm'>
			<Card.Body>
				<Card.Title>Filter</Card.Title>
				{filterLabels.map((label, index) => (
					<Form.Group key={index}>
						<Form.Label>{label}</Form.Label>
						<Form.Control as='select'>
							<option>Select User</option>
						</Form.Control>
					</Form.Group>
				))}
				<Form.Check
					type='checkbox'
					label='Only Show Flagged Documents'
					id='document-Archive-Filter'
				/>
			</Card.Body>
		</Card>
	)
}

export default DocumentArchiveFilter

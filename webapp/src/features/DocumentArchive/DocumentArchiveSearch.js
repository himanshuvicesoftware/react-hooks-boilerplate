import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const DocumentArchiveSearch = () => {
	const [valueToBeSearch, setValueToBeSearch] = useState('')
	const radioButtonFields = [
		'By Customer Name',
		'By Creation Date',
		'By Serial Number',
		'By TSN',
	]
	return (
		<Card className='shadow-sm'>
			<Card.Body>
				<Card.Title>Search</Card.Title>
				<Form.Group>
					<Form.Label>Filter by Document Status</Form.Label>
					{radioButtonFields.map((field, index) => (
						<Form.Check
							key={field}
							type='radio'
							label={field}
							id={`document-archive-search-${index}`}
							name='document-archive-search'
						/>
					))}
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='text'
						value={valueToBeSearch}
						placeholder='Customer Name'
						onChange={(ev) => setValueToBeSearch(ev.target.value)}
					/>
				</Form.Group>
				<Button className='btn-small' type='button' variant='secondary'>
					Search
				</Button>
			</Card.Body>
		</Card>
	)
}

export default DocumentArchiveSearch

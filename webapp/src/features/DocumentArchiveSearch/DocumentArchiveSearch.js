import React, { useState } from 'react'
import './DocumentArchiveSearch.styles.css'
import { Card, Form, Button } from 'react-bootstrap'

const DocumentArchiveSearch = () => {
	const [searchByName, setSearchByName] = useState('')
	const radioButtonTitle = [
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
					{radioButtonTitle.map((title, index) => (
						<Form.Check
							key={index}
							type='radio'
							label={title}
							id={`document-Archive-Search-${index}`}
							name='document-Archive-Search'
						/>
					))}
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='text'
						value={searchByName}
						placeholder='Customer Name'
						onChange={(ev) => setSearchByName(ev.target.value)}
					/>
				</Form.Group>
				<Button type='button' variant='secondary' size='sm'>
					Search
				</Button>
			</Card.Body>
		</Card>
	)
}

export default DocumentArchiveSearch

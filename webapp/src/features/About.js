import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
// Left these here because they are simple and this is just to provide example for routing
export function About() {
	const [show, setShow] = useState(false)
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [items, setItems] = useState([])
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true)
					setItems(result.data)
				},
				(error) => {
					setIsLoaded(true)
					setError(error)
				}
			)
	}, [])
	if (error) {
		return <div>Error: {error.message}</div>
	} else if (!isLoaded) {
		return <div>Loading...</div>
	} else {
		return (
			<div>
				<Table responsive data={items}>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
						</tr>
					</thead>
					{items.map((item, index) => (
						<tbody key={item.id}>
							<tr>
								<td>{item.id}</td>
								<td>{item.first_name}</td>
								<td>{item.last_name}</td>
								<td>{item.email}</td>
								<button variant='primary' onClick={handleShow}>
									Edit
								</button>
							</tr>
						</tbody>
					))}
				</Table>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form.Text className='text-muted'>Now you can Edit here.</Form.Text>
						<Form>
							<Form.Group>
								<Form.Label>First Name</Form.Label>
								<Form.Control type='text' value={items.first_name} />
							</Form.Group>
							<Form.Group>
								<Form.Label>Last Name</Form.Label>
								<Form.Control type='text' value={items.last_name} />
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control type='email' value={items.email} />
							</Form.Group>
							<Form.Group>
								<Form.Check type='checkbox' label='Check me out' />
							</Form.Group>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<button variant='secondary' onClick={handleClose}>
							Close
						</button>
						<button variant='primary' onClick={handleClose}>
							Save Changes
						</button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}

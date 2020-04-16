import React, { useEffect, useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Modal, Button } from 'react-bootstrap'
export function About() {
	const [items, setItem] = useState([])
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((res) => setItem(res.data))
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	const onChange = (e) => {
		//
		e.preventDefault()
		console.log(e)
		// setItem({ items: [...items, newData] })
		console.log(e.target.name)
		console.log(e.target.value)
		setItem({
			[e.target.value]: e.target.value,
		})
	}

	return (
		<div>
			<ReactBootStrap.Table data={items}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Email</th>
						<th>First_Name</th>
						<th>Last_Name</th>
						<th>Avatar</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item, index) => (
						<tr key={index}>
							<td>{item.id}</td>
							<td>{item.email}</td>
							<td>{item.first_name}</td>
							<td>{item.last_name}</td>
							<td>{item.avatar}</td>
						</tr>
					))}
				</tbody>
			</ReactBootStrap.Table>

			<div>
				<Button variant='primary' onClick={handleShow}>
					Add
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Enter Details: </Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form>
							<input type='number' name='id' />
							<label>Email: </label>
							<input type='email' id='email' name='email' />
							<label> First Name: </label>
							<input
								type='text'
								placeholer='first name'
								name='fname'
								onChange={onChange}
							/>
							<label> Last Name: </label>
							<input
								type='text'
								placeholer='last name'
								name='lname'
								onChange={onChange}
							/>
							<label> Avatar: </label>
							<input type='url' id='avatar' name='avatar' onChange={onChange} />
						</form>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary'>Save Changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	)
}

export default About

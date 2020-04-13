import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { addUser } from '../usersAPI.effects'
import { useDispatch } from 'react-redux'
import './userAPI.css'

export default function UserFormModal() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const submitUser = () => {
		const user = {
			first_name: firstName,
			last_name: lastName,
			email: email,
		}
		addUser(dispatch, user)
		setFirstName('')
		setLastName('')
		setEmail('')
		handleClose()
	}
	const dispatch = useDispatch()
	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Add User
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add New User</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId='userForm.firstName'>
							<Form.Label>First Name</Form.Label>
							<input
								type='text'
								placeholder='Enter Your First Name'
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId='userForm.lastName'>
							<Form.Label>Last Name</Form.Label>
							<input
								type='text'
								placeholder='Enter Your Last Name'
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId='userForm.email'>
							<Form.Label>Email address</Form.Label>
							<input
								type='email'
								placeholder='name@example.com'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={() => submitUser()}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { addUser, editUserDetails } from '../usersAPI.effects'
import { useDispatch } from 'react-redux'
import './userAPI.css'

export default function UserFormModal({
	show,
	handleClose,
	firstName,
	lastName,
	email,
	userId,
	users,
	setUsers,
	index,
}) {
	const validationOfForm = () => {
		if (firstName === '') {
			document.getElementById('error-first-name').innerHTML =
				'Please provide your first name!'
			return false
		} else if (lastName === '') {
			document.getElementById('error-last-name').innerHTML =
				'Please provide your last name!'
			return false
		} else if (email === '') {
			document.getElementById('error-email').innerHTML =
				'Please provide your email!'
			return false
		} else if (email) {
			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
			const emailCheck = emailPattern.test(email)
			if (emailCheck === true) {
				alert('Data Submitted Successfully!')
			} else {
				document.getElementById('error-invalid-email').innerHTML =
					'Please enter a valid email!'
				return false
			}
		}
	}
	const submitUser = () => {
		const isFormValid = validationOfForm()
		if (isFormValid === false) {
			return false
		}
		const newUser = {
			first_name: users.firstName,
			last_name: users.lastName,
			email: users.email,
			id: users.userId || 0,
		}
		userId
			? editUserDetails(dispatch, newUser, index)
			: addUser(dispatch, newUser)
		firstName = ''
		lastName = ''
		email = ''
		handleClose()
	}

	const dispatch = useDispatch()

	return (
		<>
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
								onChange={(event) =>
									setUsers({ ...users, firstName: event.target.value })
								}
							/>
							{firstName.length < 1 ? <span id='error-first-name'></span> : ''}
						</Form.Group>
						<Form.Group controlId='userForm.lastName'>
							<Form.Label>Last Name</Form.Label>
							<input
								type='text'
								placeholder='Enter Your Last Name'
								value={lastName}
								onChange={(event) =>
									setUsers({ ...users, lastName: event.target.value })
								}
							/>
							{lastName.length < 1 ? <span id='error-last-name'></span> : ''}
						</Form.Group>
						<Form.Group controlId='userForm.email'>
							<Form.Label>Email address</Form.Label>
							<input
								type='text'
								placeholder='Enter Your Email'
								value={email}
								onChange={(event) =>
									setUsers({ ...users, email: event.target.value })
								}
							/>
							{email.length < 1 ? <span id='error-email'></span> : ''}
							<span id='error-invalid-email'></span>
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

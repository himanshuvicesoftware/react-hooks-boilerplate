import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { addUser, editUserDetails } from '../usersAPI.effects'
import { useDispatch } from 'react-redux'
import './userAPI.css'

export default function UserFormModal({
	show,
	handleClose,
	firstName,
	// setFirstName,
	lastName,
	// setLastName,
	email,
	// setEmail,
	userId,
	index,
}) {
	const validationOfForm = () => {
		if (firstName === '' || firstName === undefined) {
			alert('Please provide your first name!')
			return false
		} else if (lastName === '') {
			alert('Please provide your last name!')
			return false
		} else if (email === '') {
			alert('Please provide your email!')
			return false
		} else if (email) {
			var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
			const emailCheck = emailPattern.test(email)
			if (emailCheck === true) {
				alert('Data Submitted Successfully!')
			} else {
				alert('Please provide valid email!')
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
			first_name: firstName,
			last_name: lastName,
			email: email,
			id: userId || 0,
		}
		userId !== 0
			? editUserDetails(dispatch, newUser, index)
			: addUser(dispatch, newUser)
		firstName = ''
		lastName = ''
		email = ''
		handleClose()
	}

	const dispatch = useDispatch()

	const handleChangeName = (event) => {
		firstName = event.target.value
	}

	const handleChangeLastName = (event) => {
		lastName = event.target.value
	}

	const handleChangeEmail = (event) => {
		email = event.target.value
	}

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
								onChange={handleChangeName}
							/>
						</Form.Group>
						<Form.Group controlId='userForm.lastName'>
							<Form.Label>Last Name</Form.Label>
							<input
								type='text'
								placeholder='Enter Your First Name'
								value={lastName}
								onChange={handleChangeLastName}
							/>
						</Form.Group>
						<Form.Group controlId='userForm.email'>
							<Form.Label>Email address</Form.Label>
							<input
								type='text'
								placeholder='Enter Your First Name'
								value={email}
								onChange={handleChangeEmail}
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

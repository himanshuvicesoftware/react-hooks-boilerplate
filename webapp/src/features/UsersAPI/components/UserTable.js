import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../usersAPI.selectors'
import { Table, Button } from 'react-bootstrap'
import { editUserDetails, deleteUser } from '../usersAPI.effects'
import UserFormModal from './UserFormModal'
import { useState } from 'react'

function UserTable() {
	const [show, setShow] = useState(false)
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [userId, setUserID] = useState(0)
	const [index, setIndex] = useState(0)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const allUsers = useSelector(getAllUsers)

	const editUser = (user, index) => {
		setFirstName(user.first_name)
		setLastName(user.last_name)
		setEmail(user.email)
		setUserID(user.id)
		setIndex(index)
		handleShow()
	}
	debugger
	const dispatch = useDispatch()
	return (
		<div>
			<div>
				<UserFormModal
					show={show}
					handleClose={handleClose}
					firstName={firstName}
					lastName={lastName}
					email={email}
					setEmail={setEmail}
					setFirstName={setFirstName}
					setLastName={setLastName}
					userId={userId}
					index={index}
				/>
				<Button variant='primary' onClick={handleShow}>
					Add User
				</Button>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Edit User Details</th>
						<th>Delete User</th>
					</tr>
				</thead>
				<tbody>
					{allUsers.map((user, index) => (
						<tr key={index}>
							<td>{user.id}</td>
							<td>{user.first_name} </td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>
								<Button
									variant='secondary'
									onClick={() => editUser(user, index)}
								>
									Edit
								</Button>
								{}
							</td>
							<td>
								<Button
									variant='danger'
									onClick={() => deleteUser(dispatch, index)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	)
}

export default UserTable

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../usersAPI.selectors'
import { Table, Button } from 'react-bootstrap'
import { deleteUser } from '../usersAPI.effects'
import UserFormModal from './UserFormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUserPlus,
	faUserEdit,
	faTrash,
} from '@fortawesome/free-solid-svg-icons'

const users = {
	firstname: '',
	lastName: '',
	email: '',
}

function UserTable() {
	const [show, setShow] = useState(false)
	const [userId, setUserID] = useState(0)
	const [index, setIndex] = useState(0)
	const handleClose = () => {
		setShow(false)
		users.firstName = ''
		users.lastName = ''
		users.email = ''
		setUserID(0)
		setIndex(0)
	}
	const handleShow = () => setShow(true)

	const allUsers = useSelector(getAllUsers)

	const editUser = (user, index) => {
		users.firstName = user.first_name
		users.lastName = user.last_name
		users.email = user.email
		setUserID(user.id)
		setIndex(index)
		handleShow()
	}
	const dispatch = useDispatch()
	return (
		<div>
			<div>
				<UserFormModal
					show={show}
					handleClose={handleClose}
					firstName={users.firstName}
					lastName={users.lastName}
					email={users.email}
					// setEmail={setEmail}
					// setFirstName={setFirstName}
					// setLastName={setLastName}
					userId={userId}
					index={index}
				/>
				<Button variant='primary' onClick={handleShow}>
					<FontAwesomeIcon icon={faUserPlus} />
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
									<FontAwesomeIcon icon={faUserEdit} />
								</Button>
								{}
							</td>
							<td>
								<Button
									variant='danger'
									onClick={() => deleteUser(dispatch, index)}
								>
									<FontAwesomeIcon icon={faTrash} />
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

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../usersAPI.selectors'
import { Table, Button } from 'react-bootstrap'
import { editUserDetails, deleteUser } from '../usersAPI.effects'
import UserFormModal from './UserFormModal'

function UserTable() {
	const editUser = {}
	const allUsers = useSelector(getAllUsers)
	const somemethod = () => {}
	debugger
	const dispatch = useDispatch()
	return (
		<div>
			<div>
				<UserFormModal user={editUserDetails} />
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
						<tr>
							<td>{user.id}</td>
							<td>{user.first_name} </td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>
								<Button variant='secondary' onClick={() => somemethod()}>
									<i class='icon-pencil'></i>Edit
								</Button>
								{}
							</td>
							<td>
								<Button
									variant='danger'
									onClick={() => deleteUser(dispatch, index)}
								>
									<i class='icon-trash'></i>Delete
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

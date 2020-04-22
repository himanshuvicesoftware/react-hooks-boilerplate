import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../usersAPI.selectors'
import { Container, Row, Col, Table, Button, Image } from 'react-bootstrap'
import { deleteUser } from '../usersAPI.effects'
import UserFormModal from './UserFormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUserPlus,
	faUserEdit,
	faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function UserTable() {
	const [users, setUsers] = useState({
		firstName: '',
		lastName: '',
		email: '',
		userId: '',
	})
	const [show, setShow] = useState(false)
	const [index, setIndex] = useState(0)
	const handleClose = () => {
		setShow(false)
		setUsers({ firstName: '', lastName: '', email: '', userId: '' })
		setIndex(0)
	}
	const handleShow = () => setShow(true)

	const allUsers = useSelector(getAllUsers)

	const editUser = (user, index) => {
		setUsers({
			firstName: user.first_name,
			lastName: user.last_name,
			email: user.email,
			userId: user.id,
		})
		setIndex(index)
		handleShow()
	}

	const dispatch = useDispatch()

	return (
		<Container>
			<Container>
				<Row>
					<Col>
						<UserFormModal
							show={show}
							handleClose={handleClose}
							users={users}
							setUsers={setUsers}
							firstName={users.firstName}
							lastName={users.lastName}
							email={users.email}
							userId={users.userId}
							index={index}
						/>
						<Button variant='primary' onClick={handleShow} size='lg'>
							<FontAwesomeIcon icon={faUserPlus} />
						</Button>
					</Col>
					<Col>
						<h4>Total Users: {allUsers.length}</h4>
					</Col>
				</Row>
			</Container>
			<br />
			<Container>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Avatar</th>
							<th>Edit User Details</th>
							<th>Delete User</th>
						</tr>
					</thead>
					<tbody>
						{allUsers.map((user, index) => (
							<tr key={index}>
								<td>
									<Link to={`/usersAPI/${user.id}`}>{user.id}</Link>
								</td>
								<td>{user.first_name} </td>
								<td>{user.last_name}</td>
								<td>{user.email}</td>
								<td>
									<Image src={user.avatar} roundedCircle />
								</td>
								<td>
									<Button
										variant='secondary'
										onClick={() => editUser(user, index)}
										size='lg'
									>
										<FontAwesomeIcon icon={faUserEdit} />
									</Button>
									{}
								</td>
								<td>
									<Button
										variant='danger'
										onClick={() => deleteUser(dispatch, index)}
										size='lg'
									>
										<FontAwesomeIcon icon={faTrash} />
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>
		</Container>
	)
}

export default UserTable

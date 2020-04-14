import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table, Pagination } from 'react-bootstrap'

export function API() {
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage, setUsersPerPage] = useState(3)
	const [total, setTotal] = useState(6)

	const fetchUser = async (currentPage) => {
		const res = await axios.get(
			`https://reqres.in/api/users?page=${currentPage}`
		)
		console.log(res.data)
		setUsers(res.data.data)
		setCurrentPage(res.data.page)
		setUsersPerPage(res.data.per_page)
		setTotal(res.data.total)
	}
	useEffect(() => {
		fetchUser(1)
	}, [])

	const active = 1
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(total / usersPerPage); i++) {
		pageNumbers.push(
			<Pagination.Item
				key={i}
				onClick={() => fetchUser(i)}
				active={active === i}
			>
				{i}
			</Pagination.Item>
		)
	}

	return (
		<Container>
			<Table striped bordered hover>
				<thead>
					<th>Id</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Avatar</th>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.id}</td>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
							<td>
								<img src={user.avatar} />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Pagination>{pageNumbers}</Pagination>
		</Container>
	)
}

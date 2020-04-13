import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table, Pagination } from 'react-bootstrap'

export function API() {
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage] = useState(3)

	useEffect(() => {
		const fetchUser = async () => {
			const res = await axios.get('https://reqres.in/api/users')
			setUsers(res.data.data)
		}
		fetchUser()
	}, [])

	const indexOfLastPage = currentPage * usersPerPage
	const indexOfFirstPage = indexOfLastPage - usersPerPage
	const currentUsers = users.slice(indexOfFirstPage, indexOfLastPage)

	const active = 1
	const pageNumbers = []
	for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
		pageNumbers.push(
			<Pagination.Item key={i} onClick={() => paging(i)} active={i === active}>
				{i}
			</Pagination.Item>
		)
	}

	const paging = (pageNumbers) => setCurrentPage(pageNumbers)

	console.log(users)

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
					{currentUsers.map((user) => (
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

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Table, Pagination, Form, Row, Col } from 'react-bootstrap'

export function API() {
	const [users, setUsers] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage, setUsersPerPage] = useState(3)
	const [total, setTotal] = useState(6)

	useEffect(() => {
		fetchUser(1)
	}, [])

	const fetchUser = async (currentPage) => {
		const res = await axios.get(
			`https://reqres.in/api/users?page=${currentPage}`
		)
		setUsers(res.data.data)
		setCurrentPage(res.data.page)
		setUsersPerPage(res.data.per_page)
		setTotal(res.data.total)
	}

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

	const [sortDirection, setSortDirection] = useState('default')

	const sorting = (colName, sortDirection) => {
		if (sortDirection === 'default') {
			switch (colName) {
				default:
					users.sort((a, b) => {
						if (a.id > b.id) {
							return 1
						} else {
							return -1
						}
					})
					break
			}
			return setSortDirection('asc')
		} else if (sortDirection === 'asc') {
			switch (colName) {
				case 'id':
					users.sort((a, b) => {
						if (a.id > b.id) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'first_name':
					users.sort((a, b) => {
						if (a.first_name > b.first_name) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'last_name':
					users.sort((a, b) => {
						if (a.last_name > b.last_name) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'email':
					users.sort((a, b) => {
						if (a.email > b.email) {
							return 1
						} else {
							return -1
						}
					})
					break
			}
			return setSortDirection('desc')
		} else {
			switch (colName) {
				case 'id':
					users.sort((a, b) => {
						if (a.id < b.id) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'first_name':
					users.sort((a, b) => {
						if (a.first_name < b.first_name) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'last_name':
					users.sort((a, b) => {
						if (a.last_name < b.last_name) {
							return 1
						} else {
							return -1
						}
					})
					break
				case 'email':
					users.sort((a, b) => {
						if (a.email < b.email) {
							return 1
						} else {
							return -1
						}
					})
					break
			}
			return setSortDirection('default')
		}
	}

	const [searchTerm, setSearchTerm] = useState('')

	const searchHandle = (event) => {
		setSearchTerm(event.target.value)
	}

	const filteredUsers = users.filter((user) => {
		return (
			user.first_name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
		)
	})

	return (
		<Container>
			<Form>
				<Form.Control type='text' onChange={searchHandle} value={searchTerm} />
			</Form>
			<Table striped bordered hover>
				<thead>
					<th>
						<div onClick={() => sorting('id', sortDirection)}>Id</div>
					</th>
					<th>
						<div onClick={() => sorting('first_name', sortDirection)}>
							First Name
						</div>
					</th>
					<th>
						<div onClick={() => sorting('last_name', sortDirection)}>
							Last Name
						</div>
					</th>
					<th>
						<div onClick={() => sorting('email', sortDirection)}>Email</div>
					</th>
					<th>Avatar</th>
				</thead>
				<tbody>
					{filteredUsers.map((user) => (
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

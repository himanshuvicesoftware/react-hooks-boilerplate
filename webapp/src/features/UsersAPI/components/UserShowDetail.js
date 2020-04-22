import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../usersAPI.selectors'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
export default function UserShowDetail() {
	const url = window.location.pathname
	const id = parseInt(url.slice(-1))
	const allUsers = useSelector(getAllUsers)
	const us = allUsers.find((user) => user.id === id)
	const history = useHistory()
	function handleClick() {
		history.push('/usersAPI')
	}
	return (
		<Container>
			<h1>Details</h1>
			<hr />
			<Row>
				<Col>
					<h6>First Name</h6>
				</Col>
				<Col>
					<h4>{us.first_name}</h4>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<h6>Last Name</h6>
				</Col>
				<Col>
					<h4>{us.last_name}</h4>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<h6>Email</h6>
				</Col>
				<Col>
					<h4>{us.email}</h4>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col>
					<h6>Avatar</h6>
				</Col>
				<Col>
					<Image src={us.avatar} rounded />
				</Col>
			</Row>
			<hr />
			<Button variant='info' onClick={handleClick} size='lg'>
				Table
			</Button>
		</Container>
	)
}

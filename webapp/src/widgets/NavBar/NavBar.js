import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBar() {
	return (
		<Navbar bg='dark' variant='dark'>
			<LinkContainer to='/'>
				<Navbar.Brand>Yowza</Navbar.Brand>
			</LinkContainer>
			<Nav>
				<LinkContainer to='/about'>
					<Nav.Link href='about'>About</Nav.Link>
				</LinkContainer>
			</Nav>
			<Nav className='mr-auto'>
				<LinkContainer to='/table'>
					<Nav.Link href='table'>API</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar>
	)
}

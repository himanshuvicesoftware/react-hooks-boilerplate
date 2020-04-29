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
			<Nav className='mr-auto'>
				<LinkContainer to='/about'>
					<Nav.Link href='about'>About</Nav.Link>
				</LinkContainer>
			</Nav>
			<Nav className='mr-auto'>
				<LinkContainer to='/api'>
					<Nav.Link href='api'>Api</Nav.Link>
				</LinkContainer>
			</Nav>
			<Nav className='mr-auto'>
				<LinkContainer to='/dash'>
					<Nav.Link href='dash'>Dash</Nav.Link>
				</LinkContainer>
			</Nav>
			<Nav className='mr-auto'>
				<LinkContainer to='/settings'>
					<Nav.Link href='settings'>Settings</Nav.Link>
				</LinkContainer>
			</Nav>

			<Nav className='mr-auto'>
				<LinkContainer to='/dashboard'>
					<Nav.Link href='dashboard'>Dashboard</Nav.Link>
				</LinkContainer>
			</Nav>
		</Navbar>
	)
}

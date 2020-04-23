import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import { LinkContainer } from 'react-router-bootstrap'
import { selectIsAuthenticated, logout } from '../../features/userContext'
import './NavBar.css'
const bellIcon = require('../../assets/icons/Bell.svg')

export default function NavBar() {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const dispatch = useDispatch()
	return (
		<Navbar bg='white'>
			<LinkContainer to='/'>
				<Navbar.Brand className='bg-secondry px-5 align-self-stretch mr-0'></Navbar.Brand>
			</LinkContainer>
			<Navbar.Collapse className='collapse px-4 px-lg-0'>
				<Nav className='mr-auto align-items-lg-center '>
					<Nav.Item className='pl-lg-4 ml-lg-2 active'>
						<LinkContainer to='/'>
							<Nav.Link>Dashboard</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item className=' pl-lg-4 ml-lg-2'>
						<LinkContainer to='/'>
							<Nav.Link>Documents</Nav.Link>
						</LinkContainer>
					</Nav.Item>
					<Nav.Item className=' pl-lg-4 ml-lg-2'>
						<button className='btn btn-primary font-weight-normal' href='#'>
							Create Document
						</button>
					</Nav.Item>
				</Nav>

				<Nav className='nav-bar-right'>
					<Nav.Item className='dropdown notification-dropdown mr-lg-1'>
						<Dropdown className='nav-link position-relative' as={Nav.Item}>
							<Dropdown.Toggle variant='light' as={Nav.Link}>
								<span className='position-relative'>
									<img src={bellIcon} alt='' className='bell-icon' width='25' />
									<span className='badge badge-pill bg-primary text-white font-weight-normal '>
										1
									</span>
								</span>
							</Dropdown.Toggle>

							<Dropdown.Menu className='dropdown-menu-center notification-dropdown p-15 text-center shadow'>
								<Dropdown.Item href='#'>
									Cody Miles Created a New Version of #1235
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Item>
					<Nav.Item className='dropdown user-dropdown pl-lg-4 ml-lg-2'>
						<Dropdown className='user-link' as={Nav.Item}>
							<Dropdown.Toggle
								variant='light'
								id='dropdown-basic'
								as={Nav.Link}
							>
								<span className='user-name f-12 bg-primary text-white rounded-circle font-weight-normal'>
									CM
								</span>
							</Dropdown.Toggle>

							<Dropdown.Menu className='dropdown-menu-right p-15 text-center shadow'>
								<Dropdown.Item>
									<LinkContainer to='/profile'>
										<Nav.Link>My Profile</Nav.Link>
									</LinkContainer>
								</Dropdown.Item>
								<Dropdown.Item>
									{isAuthenticated ? (
										<Navbar.Text>
											<a href='#sign-in' onClick={() => dispatch(logout())}>
												Logout
											</a>
										</Navbar.Text>
									) : (
										<LinkContainer to='/sign-in'>
											<Nav.Link>Sign In</Nav.Link>
										</LinkContainer>
									)}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

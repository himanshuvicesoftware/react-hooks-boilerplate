import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Dropdown, Image as Img } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { selectIsAuthenticated, logout } from '../../features/userContext'
import './NavBar.css'
import Icons from '../../assets/icons'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
	const location = useLocation()
	const [selectedNav, setSelectedNav] = useState('')
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const dispatch = useDispatch()
	useEffect(() => {
		const path = location.pathname.replace(/\//g, '')
		setSelectedNav(path)
	}, [location])
	return (
		<Navbar bg='white' expand='lg' className='p-0'>
			<div className='container-fluid pl-0'>
				<LinkContainer to='/'>
					<Navbar.Brand className='bg-secondry px-5 align-self-stretch mr-0'></Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='collapse px-4 px-lg-0'>
					<Nav className='mr-auto align-items-lg-center '>
						<Nav.Item
							className={classNames(' pl-lg-4 ml-lg-2', {
								active: selectedNav === '',
							})}
						>
							<LinkContainer to='/'>
								<Nav.Link>Dashboard</Nav.Link>
							</LinkContainer>
						</Nav.Item>
						<Nav.Item
							className={classNames(' pl-lg-4 ml-lg-2', {
								active: selectedNav === 'documents',
							})}
						>
							<LinkContainer to='/documents'>
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
							<Dropdown className='position-relative' as={Nav.Item}>
								<Dropdown.Toggle variant='light' as={Nav.Link}>
									<span className='position-relative'>
										<Img
											src={Icons.bellIcon}
											alt=''
											className='bell-icon'
											width='25'
										/>
										<span className='badge badge-pill bg-primary text-white font-weight-normal '>
											1
										</span>
									</span>
								</Dropdown.Toggle>

								<Dropdown.Menu className='dropdown-menu-center notification-dropdown p-15 text-center shadow'>
									<Dropdown.Item className='dropdown-item f-12 text-wrap'>
										Dummy Notification #1235
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
									<Img
										className='ml-1'
										src={Icons.caretIcon}
										alt=''
										width='25'
									/>
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
			</div>
		</Navbar>
	)
}

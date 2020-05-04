import React from 'react'
import {
	Container,
	Button,
	Navbar,
	Nav,
	NavDropdown,
	Badge,
	Image,
} from 'react-bootstrap'
import GenericTabs from '../GenericTabs'
import Users from '../Users'
import Setting from '../Setting'

export const FFLSettings = () => {
	const tabData = (props) => {
		return (
			<div>
				{props === 'Setting' ? <Setting /> : ''}
				{props === 'Users' ? <Users /> : ''}
			</div>
		)
	}

	return (
		<Container>
			<Container className='audit-bar py-1'>
				<Container fluid={true}>
					<Container className='d-flex justify-content-between'>
						<span className='text-white'>Audit Mode is Currently On</span>
						<a className='text-white font-weight-normal opacity-75' href='#'>
							Manage Audit Mode
							<Image
								src='./images/icons/arrow-right.svg'
								className='ml-2'
								height='11.4'
							/>
						</a>
					</Container>
				</Container>
			</Container>

			<Navbar className='navbar navbar-expand-lg navbar-light bg-white shadow-sm static-top p-0'>
				<Container fluid={true} className='pl-0'>
					<Navbar.Brand
						className='bg-secondry px-5 align-self-stretch mr-0'
						href='#'
					></Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link active href='#' className='pl-lg-4 ml-lg-2'>
								Dashboard
							</Nav.Link>
							<Nav.Link href='#' className='pl-lg-4 ml-lg-2'>
								Documents
							</Nav.Link>
							<Nav.Link href='#' className='pl-lg-4 ml-lg-2'>
								<Button className='btn btn-primary font-weight-normal'>
									Create Document
								</Button>
							</Nav.Link>
						</Nav>
						<Badge>5</Badge>
						<NavDropdown
							title='DropDown'
							id='basic-nav-dropdown'
							className='mr-lg-1'
						>
							<NavDropdown.Item className='dropdown-item f-12' href='#'>
								Cody Miles Created a New Version of #1235
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item f-12' href='#'>
								Ashley Rayes Created #123456
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item f-12' href='#'>
								Daniel Noel Flagged #1234568
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title='CM' id='basic-nav-dropdown' className='mr-lg-1'>
							<NavDropdown.Item className='dropdown-item' href='#'>
								Switch FFL
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								Audit Management
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								User Management
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								Organization Settings
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								My Profile
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								Billing
							</NavDropdown.Item>
							<NavDropdown.Item className='dropdown-item' href='#'>
								Log Out
							</NavDropdown.Item>
						</NavDropdown>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				<Container className='row py-50 '>
					<Container className='col-xl-10 col-lg-8 col-md-6'>
						<h2 className='page-title m-0 font-semi-bold mb-3 mb-md-0'>
							FFL Settings
						</h2>
					</Container>
				</Container>
			</Container>

			<Container>
				<GenericTabs props={['Setting', 'Users']} tabData={tabData} />
			</Container>

			<footer className='bg-secondry p-4'>
				<div className='container-fluid py-1'>
					<span className='f-14 font-weight-normal text-white'>
						Copyright 2020 COMPANYNAME, LLC. All Rights Reserved. Privacy Policy
					</span>
				</div>
			</footer>
			<div
				className='modal fade delete-user-modal'
				id='delete-user-modal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content border-0'>
						<div className='modal-header border-0'>
							<h5 className='modal-title f-32 font-semi-bold'>
								Are You Sure You Want to Delete This Item?
							</h5>
							<button
								type='button'
								className='close p-0 pr-2'
								data-dismiss='modal'
								aria-label='Close'
							>
								{/* <img src='./images/icons/Close.svg' alt='' width='25' /> */}
							</button>
						</div>
						<div className='modal-body pt-0'>
							<p className='font-weight-normal mb-4 pb-3'>
								This cannot be undone. Prior to deleting, please download your
								files using our file exporter.
							</p>
							<div className='row'>
								<div className='col-md-8'>
									<button
										type='button'
										className='btn btn-outline btn-block d-flex align-items-center'
									>
										Download File Exporter
										{/* <img
											className='ml-auto'
											src='./images/icons/Download.svg'
											alt=''
										/> */}
									</button>
								</div>
							</div>
						</div>

						<div className='modal-footer justify-content-start border-0'>
							<button
								type='button'
								className='btn btn-primary btn-big'
								data-dismiss='modal'
							>
								Yes, Delete Forever
							</button>
							<button type='button' className='btn btn-outline btn-big'>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

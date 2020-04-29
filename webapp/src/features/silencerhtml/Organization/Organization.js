import React, { useState } from 'react'
import './Organization.css'
import {
	Container,
	Image,
	Button,
	Navbar,
	Nav,
	NavDropdown,
	Badge,
	Tabs,
	Tab,
	Table,
} from 'react-bootstrap'

export const Organization = () => {
	const [key, setKey] = useState('FFLs')
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
							Your Organization
						</h2>
					</Container>
					<Container className='col-xl-2 col-lg-4 col-md-6 text-right'>
						<Button type='button' className='btn btn-primary btn-block '>
							Add FFL
						</Button>
					</Container>
				</Container>
			</Container>
			<Container>
				<Tabs
					id='controlled-tab-example'
					activeKey={key}
					onSelect={(k) => setKey(k)}
				>
					<Tab eventKey='FFLs' title='FFLs'>
						<div
							className='tab-pane py-50 fade show active'
							id='tab1'
							role='tabpanel'
							aria-labelledby='tab1'
						>
							<div className='container'>
								<div className='table-responsive'>
									<Table className='table font-weight-normal f-15 table-striped text-secondry'>
										<thead>
											<tr className='text-secondry'>
												<th width=''>FFL Name</th>
												<th width=''>Users</th>
												<th width=''>Total Documents</th>
												<th width='30'></th>
												<th width='50'></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Store Name 1</td>
												<td>4</td>
												<td>250</td>
												<td>
													<a
														href='#'
														className=''
														data-target='#delete-user-modal'
														data-toggle='modal'
													>
														<Image
															src='./images/icons/Delete.svg'
															alt=''
															width='25'
														/>
													</a>
												</td>
												<td>
													<Button
														className='btn btn-primary font-weight-normal btn-sm'
														data-target='#manage-user-modal'
														data-toggle='modal'
													>
														View
													</Button>
												</td>
											</tr>
											<tr>
												<td>Store Name 1</td>
												<td>4</td>
												<td>250</td>
												<td>
													<a
														href='#'
														className=''
														data-target='#delete-user-modal'
														data-toggle='modal'
													>
														<Image
															src='./images/icons/Delete.svg'
															alt=''
															width='25'
														/>
													</a>
												</td>
												<td>
													<Button
														className='btn btn-primary font-weight-normal btn-sm'
														data-target='#manage-user-modal'
														data-toggle='modal'
													>
														View
													</Button>
												</td>
											</tr>
											<tr>
												<td>Store Name 1</td>
												<td>4</td>
												<td>250</td>
												<td>
													<a
														href='#'
														className=''
														data-target='#delete-user-modal'
														data-toggle='modal'
													>
														<Image
															src='./images/icons/Delete.svg'
															alt=''
															width='25'
														/>
													</a>
												</td>
												<td>
													<Button
														className='btn btn-primary font-weight-normal btn-sm'
														data-target='#manage-user-modal'
														data-toggle='modal'
													>
														View
													</Button>
												</td>
											</tr>
										</tbody>
									</Table>
								</div>
							</div>
						</div>
					</Tab>
					<Tab eventKey='Settings' title='Settings'>
						<div className='container'>
							<div className='mb-50'>
								<h5 className='font-semi-bold opacity-50 mb-25'>Details</h5>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Organization Name</label>
											<input
												type='text'
												className='form-control'
												placeholder='Name'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Your Organization Phone Number</label>
											<input
												type='text'
												className='form-control'
												placeholder='Your Phone Number'
											/>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Street Address 1</label>
											<input
												type='text'
												className='form-control'
												placeholder='Street Address 1'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>Street Address 2</label>
											<input
												type='text'
												className='form-control'
												placeholder='Street Address 2'
											/>
										</div>
									</div>
								</div>

								<div className='row mb-15'>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>City</label>
											<input
												type='text'
												className='form-control'
												placeholder='City'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<label>State</label>
											<input
												type='text'
												className='form-control'
												placeholder='Zip'
											/>
										</div>
									</div>
								</div>

								<div className='mb-25'>
									<div className='custom-control custom-switch'>
										<input
											type='checkbox'
											className='custom-control-input d-none'
											id='customSwitch1'
											checked
										/>
										<label
											className='custom-control-label f-18 pl-2'
											// for='customSwitch1'
										>
											Automatically Delete Documents When Expired
										</label>
									</div>
								</div>

								<button type='button' className='btn btn-secondary'>
									Save
								</button>
							</div>

							<div className='py-50'>
								<h5 className='font-semi-bold opacity-50 mb-15'>
									Delete Your Organization
								</h5>
								<p className='f-15 font-weight-normal mb-50'>
									This cannot be undone. Prior to deleting your account, please
									download your files using our file exporter.
								</p>

								<div className='row'>
									<div className='col-lg-3 col-md-4'>
										<button
											type='button'
											className='btn btn-secondary btn-block mb-md-0 mb-3'
											data-target='#delete-user-modal'
											data-toggle='modal'
										>
											Delete Account
										</button>
									</div>
									<div className='col-lg-4 col-md-5'>
										<button
											type='button'
											className='btn-block btn btn-outline d-flex align-items-center'
										>
											Download File Exporter
											<img
												className='ml-auto'
												src='./images/icons/Download.svg'
												alt=''
											/>
										</button>
									</div>
								</div>
							</div>
						</div>
					</Tab>
				</Tabs>
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
								<img src='./images/icons/Close.svg' alt='' width='25' />
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
										<img
											className='ml-auto'
											src='./images/icons/Download.svg'
											alt=''
										/>
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

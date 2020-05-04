import React from 'react'
import './AuditMgmt.css'
import { Button, Image, Table, Tabs, Tab } from 'react-bootstrap'
const imageIcon = require('../auditManagement/arrow-right-dark.svg')
const profileImage = require('../auditManagement/user-thumb.jpg')
const bellIcon = require('../auditManagement/Bell.svg')
function AuditMgmt() {
	return (
		<div>
			<ul className='navbar-nav nav-bar-right'>
				<li className='nav-item  dropdown notification-dropdown mr-lg-1'>
					<a className='nav-link position-relative'>
						<span className='position-relative'>
							<Image src={bellIcon} alt='' className='bell-icon' width='25' />
							<span className='badge badge-pill bg-primary text-white font-weight-normal '>
								5
							</span>
						</span>
					</a>
					<div className='dropdown-menu dropdown-menu-center notification-dropdown p-15 text-center'>
						<a className='dropdown-item f-12' href='#'>
							Cody Miles Created a New Version of #1235
						</a>
						<a className='dropdown-item f-12' href='#'>
							Ashley Rayes Created #123456
						</a>
						<a className='dropdown-item f-12' href='#'>
							Daniel Noel Flagged #1234568
						</a>
					</div>
				</li>
			</ul>
			<div className='container-fluid px-0 '>
				<div className='row py-50 '>
					<div className='col-xl-9 col-lg-8 col-md-6'>
						<h2 className='page-title m-0 font-semi-bold mb-3 mb-md-0'>
							Audit Management
						</h2>
					</div>
					<div className='col-xl-2 col-lg-4 col-md-6 text-right pr-'>
						<Button className='btn btn-danger btn-block '>End Audit</Button>
					</div>
				</div>

				<Tabs>
					<Tab eventKey='audit' title='Audit Settings'>
						<div className='tab-content bg-white'>
							<div className='tab-pane py-50 fade show active'>
								<div className='container'>
									<p className='mb-2 text-muted font-weight-bold'>
										Auditors were given access to the following date range:
									</p>

									<div className='mb-50'>
										<span className='f-18'>April, 1 2019 - April 1, 2020</span>
										<a
											className='text-muted font-weight-bold ml-2 d-inline-flex align-items-center'
											href='#'
										>
											Edit{' '}
											<Image
												src={imageIcon}
												className='opacity-75'
												width='15'
											/>
										</a>
									</div>

									<div className='table-responsive'>
										<Table className='table font-weight-normal f-15 table-striped text-secondry striped bordered'>
											<thead>
												<tr className='text-secondry'>
													<th width=''>Date Range</th>

													<th width='50'></th>
												</tr>
											</thead>

											<tbody>
												<tr>
													<td>March 2, 2020 - April 1, 2020</td>

													<td>
														<Button className='btn btn-primary font-weight-normal btn-sm'>
															Approve
														</Button>
													</td>
												</tr>
												<tr>
													<td>March 2, 2020 - April 1, 2020</td>

													<td>
														<Button className='btn btn-success font-weight-normal btn-sm'>
															Approved
														</Button>
													</td>
												</tr>
												<tr>
													<td>March 2, 2020 - April 1, 2020</td>

													<td>
														<Button className='btn btn-success font-weight-normal btn-sm'>
															Approved
														</Button>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</div>
							</div>
						</div>
					</Tab>
					<Tab eventKey='auditors' title='Auditors'>
						<div className='py-10'>
							<div className='container'>
								<p className='mb-2 text-muted font-weight-bold'>
									The lead auditor has added the following auditors to your
									account:
								</p>
								<div className='table-responsive mb-50'>
									<Table className='table font-weight-normal f-15 table-striped text-secondry'>
										<thead>
											<tr className='text-secondry'>
												<th width='200'>Name</th>
												<th>Last Sign In</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Image
															className='rounded-circle mr-3'
															src={profileImage}
															alt=''
															width='30'
														/>
														<span>Cody Miles</span>
													</div>
												</td>
												<td>Yesterday at 11:00pm</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Image
															className='rounded-circle mr-3'
															src={profileImage}
															alt=''
															width='30'
														/>
														<span>Cody Miles</span>
													</div>
												</td>
												<td>Yesterday at 11:00pm</td>
											</tr>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Image
															className='rounded-circle mr-3'
															src={profileImage}
															alt=''
															width='30'
														/>
														<span>Cody Miles</span>
													</div>
												</td>
												<td>Yesterday at 11:00pm</td>
											</tr>
										</tbody>
									</Table>
								</div>

								<p className='mb-2 text-muted font-weight-bold'>
									You invited this auditor to your account:
								</p>

								<div className='table-responsive'>
									<table className='table font-weight-normal f-15 table-striped text-secondry'>
										<thead>
											<tr className='text-secondry'>
												<th width='200'>Name</th>
												<th>Last Sign In</th>
											</tr>
										</thead>

										<tbody>
											<tr>
												<td>
													<div className='d-flex align-items-center'>
														<Image
															className='rounded-circle mr-3'
															src={profileImage}
															alt=''
															width='30'
														/>
														<span>Cody Miles</span>
													</div>
												</td>
												<td>Yesterday at 11:00pm</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</Tab>
				</Tabs>
			</div>
		</div>
	)
}
export default AuditMgmt

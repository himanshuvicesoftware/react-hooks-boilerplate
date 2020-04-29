import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Home() {
	const [date, setDate] = useState(new Date())
	const onChange = (date) => setDate(date)

	return (
		<div>
			<Calendar onChange={onChange} value={date} selectRange />
			{date.toString()}
			<div className='audit-bar py-1'>
				<div className='container-fluid'>
					<div className='d-flex justify-content-between'>
						<span className='text-white'>Audit Mode is Currently On</span>
						<a className='text-white font-weight-normal opacity-75' href='#'>
							Manage Audit Mode
							<img
								src='./images/icons/arrow-right.svg'
								className='ml-2'
								height='11.4'
							/>
						</a>
					</div>
				</div>
			</div>

			<nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm static-top p-0'>
				<div className='container-fluid pl-0'>
					<a
						className='navbar-brand bg-secondry px-5 align-self-stretch mr-0'
						href='#'
					></a>
					<button
						className='navbar-toggler mx-3'
						type='button'
						data-toggle='collapse'
						data-target='#navbarResponsive'
						aria-controls='navbarResponsive'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse px-4 px-lg-0'
						id='navbarResponsive'
					>
						<ul className='navbar-nav mr-auto align-items-lg-center '>
							<li className='nav-item pl-lg-4 ml-lg-2 active'>
								<a className='nav-link' href='#'>
									Dashboard
								</a>
							</li>
							<li className='nav-item pl-lg-4 ml-lg-2'>
								<a className='nav-link' href='#'>
									Documents
								</a>
							</li>
							<li className='nav-item pl-lg-4 ml-lg-2'>
								<button className='btn btn-primary font-weight-normal' href='#'>
									Create Document
								</button>
							</li>
						</ul>
						<ul className='navbar-nav nav-bar-right'>
							<li className='nav-item  dropdown notification-dropdown mr-lg-1'>
								<a
									className='nav-link position-relative'
									href='#'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									<span className='position-relative'>
										<img
											src='./images/icons/Bell.svg'
											alt=''
											className='bell-icon'
											width='25'
										/>
										<span className='badge badge-pill bg-primary text-white font-weight-normal '>
											5
										</span>
									</span>
								</a>
								<div
									className='dropdown-menu dropdown-menu-center notification-dropdown p-15 text-center shadow'
									aria-labelledby='navbarDropdown'
								>
									<a className='dropdown-item f-12 text-wrap' href='#'>
										Cody Miles Created a New Version of #1235 Cody Miles Created
										a New
									</a>
									<a className='dropdown-item f-12 text-wrap' href='#'>
										Ashley Rayes Created #123456
									</a>
									<a className='dropdown-item f-12 text-wrap' href='#'>
										Daniel Noel Flagged #1234568
									</a>
								</div>
							</li>
							<li className='nav-item dropdown user-dropdown pl-lg-4 ml-lg-2'>
								<a
									className='nav-link user-link'
									href='#'
									role='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									<span className='user-name f-12 bg-primary text-white rounded-circle font-weight-normal'>
										CM
									</span>
									<img
										className='ml-1'
										src='./images/icons/Caret.svg'
										alt=''
										width='25'
									/>
								</a>
								<div
									className='dropdown-menu dropdown-menu-right p-15 text-center shadow'
									aria-labelledby='navbarDropdown'
								>
									<a className='dropdown-item' href='#'>
										Switch FFL
									</a>
									<a className='dropdown-item' href='#'>
										Audit Management
									</a>
									<a className='dropdown-item' href='#'>
										User Management
									</a>
									<a className='dropdown-item' href='#'>
										Organization Settings{' '}
									</a>
									<a className='dropdown-item' href='#'>
										My Profile
									</a>
									<a className='dropdown-item' href='#'>
										Billing
									</a>
									<a className='dropdown-item' href='#'>
										Log Out
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<main>
				<div className='container-fluid'>
					<div className='row pt-50 mb-50'>
						<div className='col-lg-7 col-md-5'>
							<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-4 col-lg-3'>
							<div className='card shadow-sm border-0 mb-25'>
								<div className='card-body p-25'>
									<h4 className='font-semi-bold mb-25 card-title'>
										Document Details
									</h4>
									<dl className='discription-list  mb-0 no-gutters'>
										<div className='row no-gutters mb-2 align-items-baseline'>
											<dt className='col-md-7 text-light'>Creation Date:</dt>
											<dd className='col-md-5 font-weight-normal f-15 mb-0'>
												11/01/20
											</dd>
										</div>
										<div className='row no-gutters mb-2 align-items-baseline'>
											<dt className='col-md-7 text-light'>Expiration Date:</dt>
											<dd className='col-md-5 font-weight-normal f-15 mb-0'>
												555-555-555555
											</dd>
										</div>
										<div className='row no-gutters mb-2 align-items-baseline'>
											<dt className='col-md-7 text-light'>Serial Number:</dt>
											<dd className='col-md-5 font-weight-normal f-15 mb-0'>
												666-666-666666
											</dd>
										</div>
										<div className='row no-gutters mb-2 align-items-baseline'>
											<dt className='col-md-7 text-light'>Document Status:</dt>
											<dd className='col-md-5 font-weight-normal f-15 mb-0'>
												Transferred
											</dd>
										</div>
										<div className='row no-gutters mb-2 align-items-baseline'>
											<dt className='col-md-7 text-light'>Version Number:</dt>
											<dd className='col-md-5 font-weight-normal f-15 mb-0'>
												2
											</dd>
										</div>
									</dl>

									<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

									<div className='mb-15'>
										<h6 className='text-light font-semi-bold mb-1'>
											Document Assigned To:
										</h6>
										<div className='d-flex'>
											<div className='d-flex align-items-center '>
												<div className='user-circle d-inline-block position-relative rounded-circle'>
													<img
														width='25'
														src='./images/icons/circle.svg'
														alt=''
													/>
													<div
														className='position-absolute user-name font-weight-normal'
														style={{ fontSize: '8px' }}
													>
														CM
													</div>
												</div>
												<span className='f-15 ml-2 '>Cody Miles</span>
											</div>

											<a
												className='d-block ml-auto'
												href='#'
												data-toggle='modal'
												data-target='#assign-user-modal'
											>
												<img src='./images/icons/Edit.svg' alt='' />
											</a>
										</div>
									</div>

									<div className='pt-1'>
										<h6 className='text-light font-semi-bold mb-1'>
											Document Created By:
										</h6>
										<div className='d-flex'>
											<div className='d-flex align-items-center '>
												<div className='user-circle d-inline-block position-relative rounded-circle'>
													<img
														width='25'
														src='./images/icons/circle.svg'
														alt=''
													/>
													<div
														className='position-absolute user-name font-weight-normal'
														style={{ fontSize: '8px' }}
													>
														CM
													</div>
												</div>
												<span className='f-15 ml-2 '>Cody Miles</span>
											</div>
										</div>
									</div>

									<div className='bg-secondary opacity-75 separator mt-35 mb-35'></div>

									<button type='button' className='btn btn-block btn-secondary'>
										Create New Version
									</button>
									<button
										type='button'
										className='btn btn-block btn-secondary'
										data-toggle='modal'
										data-target='#upload-file-modal'
									>
										Upload Files
									</button>
									<button
										type='button'
										className='btn btn-block btn-secondary'
										data-toggle='modal'
										data-target='#add-note-modal'
									>
										Add Note
									</button>
									<button
										type='button'
										className='btn btn-outline btn-block d-flex align-items-center'
										data-target='#correction-log-modal'
										data-toggle='modal'
									>
										View Correction Log
										<img
											className='ml-auto'
											src='./images/icons/Log.svg'
											alt=''
										/>
									</button>
									<button
										type='button'
										className='btn btn-outline btn-block d-flex align-items-center'
									>
										Flag Document
										<img
											className='ml-auto'
											src='./images/icons/Flag.svg'
											alt=''
										/>
									</button>
									<button
										type='button'
										className='btn btn-outline btn-block d-flex align-items-center'
									>
										Export Document
										<img
											className='ml-auto'
											src='./images/icons/Download.svg'
											alt=''
										/>
									</button>
									<button
										type='button'
										className='btn btn-outline btn-block d-flex align-items-center'
									>
										Export History
										<img
											className='ml-auto'
											src='./images/icons/Download.svg'
											alt=''
										/>
									</button>
								</div>
							</div>
						</div>

						<div className='col-md-8 col-lg-9'>
							<div className='table-responsive mb-50'>
								<table className='table font-weight-normal f-15 table-striped text-secondry'>
									<thead>
										<tr className='text-secondry'>
											<th width='250' className='text-nowrap'>
												File Name
											</th>
											<th width='150'>Uploaded By</th>
											<th width='150' className='text-nowrap'>
												Uploaded On
											</th>
											<th>Type</th>
											<th width='120'></th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>4473EID-1029.pdf</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>4473</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>attachment-file.pdf</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>ATF F 3310.12</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>attachment-file.pdf</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>ATF Form-4</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>attachment-file.pdf</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>Other</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							<h4 className='font-semi-bold mb-15 card-title'>
								Document Details
							</h4>

							<div className='card border-0 shadow-sm mb-15 text-light'>
								<div className='card-body p-25'>
									<div className='d-flex  mb-15'>
										<span>Attachment File</span>
										<span className='ml-auto'>11/01/20 at 11:01 AM</span>
									</div>

									<div className='d-flex align-items-center'>
										<span className='font-weight-normal'>
											attachment-file.pdf Uploaded
										</span>
									</div>
								</div>
							</div>

							<div className='card border-0 shadow-sm mb-15 text-light '>
								<div className='card-body p-25'>
									<div className='d-flex mb-15'>
										<span>Version</span>
										<span className='ml-auto'>11/01/20 at 11:01 AM</span>
									</div>

									<div className='d-flex align-items-center'>
										<span className='font-weight-normal'>
											Document Version 2 Created
										</span>

										<button
											type='button'
											className='btn btn-outline btn-md ml-auto'
										>
											View
										</button>
									</div>
								</div>
							</div>

							<div className='card border-0 shadow-sm mb-15 text-light '>
								<div className='card-body p-25'>
									<div className='d-flex mb-15'>
										<span>Note by Cody Miles</span>
										<span className='ml-auto'>11/01/20 at 11:01 AM</span>
									</div>

									<div className='d-flex align-items-center'>
										<span className='font-weight-normal'>
											“Need to Double Check the Serial Number”
										</span>
									</div>
								</div>
							</div>

							<div className='card border-0 shadow-sm mb-15 text-light '>
								<div className='card-body p-25'>
									<div className='d-flex mb-15'>
										<span>Event</span>
										<span className='ml-auto'>11/01/20 at 11:01 AM</span>
									</div>

									<div className='d-flex align-items-center'>
										<span className='font-weight-normal'>
											Cody Miles Viewed 4473EID-1029.pdf
										</span>
									</div>
								</div>
							</div>

							<div className='card border-0 shadow-sm mb-15 text-light '>
								<div className='card-body p-25'>
									<div className='d-flex mb-15'>
										<span>Version</span>
										<span className='ml-auto'>11/01/20 at 11:01 AM</span>
									</div>

									<div className='d-flex align-items-center'>
										<span className='font-weight-normal'>Document Created</span>
										<button
											type='button'
											className='btn btn-outline btn-md ml-auto'
										>
											View
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='spacer'></div>
			</main>

			<footer className='bg-secondry p-4'>
				<div className='container-fluid py-1'>
					<span className='f-14 font-weight-normal text-white'>
						Copyright 2020 COMPANYNAME, LLC. All Rights Reserved. Privacy Policy
					</span>
				</div>
			</footer>

			<div
				className='modal fade assign-user-modal'
				id='assign-user-modal'
				// tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content border-0'>
						<div className='modal-header border-0'>
							<h5 className='modal-title f-32 font-semi-bold'>
								Assign to User
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
						<div className='modal-body'>
							<label></label>
							<select className='form-control' name=''>
								<option>Select User</option>
							</select>
						</div>
						<div className='modal-footer justify-content-start border-0'>
							<button
								type='button'
								className='btn btn-primary btn-big'
								data-dismiss='modal'
							>
								Assign
							</button>
							<button type='button' className='btn btn-outline btn-big'>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className='modal fade upload-file-modal'
				id='upload-file-modal'
				// tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-dialog-centered modal-xl'
					role='document'
				>
					<div className='modal-content overflow-hidden border-0'>
						<div className='modal-header border-0 pb-0'>
							<div className='row'>
								<div className='col-md-7'>
									<h5 className='modal-title f-24 font-semi-bold mb-15'>
										Upload Files
									</h5>
									<p className='mb-0 font-weight-normal'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Aenean vitae scelerisque risus. Praesent molestie nulla eget
										dictum ornare.
									</p>
								</div>
							</div>

							<button
								type='button'
								className='close p-0 pr-2'
								data-dismiss='modal'
								aria-label='Close'
							>
								<img src='./images/icons/Close.svg' alt='' width='25' />
							</button>
						</div>
						<div className='modal-body'>
							<label className='mb-10'>Upload Files</label>
							<div className='upload-container d-flex align-items-center justify-content-center position-realtive mb-50'>
								<span>
									Drop file here to upload or{' '}
									<a href='#' className='text-dark'>
										<u>select file</u>
									</a>
								</span>
							</div>
							<ul className='list-group'>
								<li className='list-group-item d-flex align-items-center bg-light border-0 f-15'>
									<div className='file-info'>
										<h4 className='mb-1 f-15 font-weight-semi-bold'>
											Attachment-010202.PDF
										</h4>
									</div>
									<div className='d-flex ml-auto align-items-center'>
										<select
											className='form-control form-control-sm border-0 mr-3 font-weight-normal'
											name=''
										>
											<option>ATF F 3310.12</option>
										</select>
										<a href='#'>
											<img src='./images/icons/Delete.svg' alt='' width='20' />
										</a>
									</div>
								</li>
								<li className='list-group-item d-flex align-items-center bg-light border-0 f-15'>
									<div className='file-info'>
										<h4 className='mb-1 f-15 font-weight-semi-bold'>
											Attachment-010202.PDF
										</h4>
									</div>
									<div className='d-flex ml-auto align-items-center'>
										<select
											className='form-control form-control-sm border-0 mr-3 font-weight-normal'
											name=''
										>
											<option>Other</option>
										</select>
										<a href='#'>
											<img src='./images/icons/Delete.svg' alt='' width='20' />
										</a>
									</div>
								</li>
							</ul>
						</div>
						<div className='modal-footer justify-content-start border-0 pb-50'>
							<button
								type='button'
								className='btn btn-secondary'
								data-dismiss='modal'
							>
								Begin Uploading
							</button>
						</div>
						<div className='progress'>
							<div
								className='progress-bar bg-success'
								role='progressbar'
								style={{ width: '75%' }}
								aria-valuenow='75'
								aria-valuemin='0'
								aria-valuemax='100'
							></div>
						</div>
					</div>
				</div>
			</div>

			<div
				className='modal fade add-note-modal'
				id='add-note-modal'
				// tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered ' role='document'>
					<div className='modal-content border-0'>
						<div className='modal-header border-0'>
							<h5 className='modal-title f-32 font-semi-bold'>Add Note</h5>
							<button
								type='button'
								className='close p-0 pr-2'
								data-dismiss='modal'
								aria-label='Close'
							>
								<img src='./images/icons/Close.svg' alt='' width='25' />
							</button>
						</div>
						<div className='modal-body py-0'>
							<textarea
								className='form-control'
								rows='10'
								cols='80'
								placeholder='Your Note Here…'
							></textarea>
						</div>
						<div className='modal-footer justify-content-start border-0'>
							<button
								type='button'
								className='btn btn-primary btn-big'
								data-dismiss='modal'
							>
								Save
							</button>
							<button type='button' className='btn btn-outline btn-big'>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className='modal fade correction-log-modal'
				id='correction-log-modal'
				// tabindex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div
					className='modal-dialog modal-dialog-centered modal-xl'
					role='document'
				>
					<div className='modal-content border-0'>
						<div className='modal-header border-0'>
							<h5 className='modal-title f-32 font-semi-bold'>
								Correction Log
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
						<div className='modal-body py-0 mb-0'>
							<div className='table-responsive mb-0'>
								<table className='table font-weight-normal f-15 table-striped text-secondry mb-0'>
									<thead>
										<tr className='text-secondry'>
											<th width='250' className='text-nowrap'>
												Description of Change
											</th>
											<th width='150'>User</th>
											<th width='150' className='text-nowrap'>
												Initial Date
											</th>
											<th width='100'></th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>Corrected military identification</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>Corrected military identification</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>Corrected military identification</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td>Corrected military identification</td>
											<td>Cody Miles</td>
											<td>11/01/20</td>
											<td>
												<button
													className='btn btn-primary font-weight-normal btn-sm'
													href='#'
												>
													View
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div className='modal-footer justify-content-start border-0'>
							<button
								type='button'
								className='btn btn-primary btn-big'
								data-dismiss='modal'
							>
								Close
							</button>
							<button
								type='button'
								className='btn btn-outline btn-big d-flex align-items-center'
							>
								Export CSV
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
		</div>
	)
}

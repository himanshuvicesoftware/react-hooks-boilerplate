import React from 'react'
import './dashboardContent.css'
import {
	FormControl,
	Button,
	Table,
	Container,
	Row,
	Col,
	Image,
} from 'react-bootstrap'
const imageIcon = require('../dashboard/user-thumb.jpg')

function DashboardContent() {
	return (
		<div>
			<div className='row py-50'>
				<div className='col-xl-7 col-lg-5 col-md-5 col-sm-12 mb-3 mb-md-0'>
					<h2 className='page-title m-0 font-semi-bold'>Users</h2>
				</div>
				<div className='col-xl-3 col-lg-4 col-md-4 col-sm-6'>
					<FormControl
						className='form-control form-control-md'
						placeholder='Search Users'
					></FormControl>
				</div>
				<div className='col-xl-2 col-lg-3 col-md-3 col-sm-6'>
					<Button className='btn btn-secondary btn-md btn-block'>
						Invite User
					</Button>
				</div>
			</div>
			<div className='table-responsive'>
				<Table className='table font-weight-normal f-15 table-striped text-secondry'>
					<thead>
						<tr>
							<th className='pt-3 pb-0'>Users</th>
						</tr>
						<tr>
							<th width='200'>Name</th>
							<th width='100'>Permission </th>
							<th width='200'>Last Sign In </th>
							<th width='150'>Invitation Status</th>
							<th>User Status </th>
							<th width='30'></th>
							<th width='80'></th>
						</tr>
					</thead>
					<tbody>
						<tr className='text-secondry'>
							<td>
								<div className='d-flex align-items-center'>
									<Container>
										<Row>
											<Col xs={0} md={0}></Col>
											<Col>
												<Image src={imageIcon} roundedCircle fluid />
											</Col>
											<Col xs={6} md={6}></Col>
										</Row>
									</Container>

									<span>Cody Miles</span>
								</div>
							</td>
							<td>Admin</td>
							<td>Yesterday at 11:00pm</td>
							<td>
								<a href='#'>
									<u>Invite Accepted</u>
								</a>
							</td>
							<td>Enabled</td>

							<td>
								<Button className='btn btn-primary font-weight-normal btn-sm'>
									View
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<div className='d-flex align-items-center'>
									<Container>
										<Row>
											<Col xs={0} md={0}></Col>
											<Col>
												<Image src={imageIcon} roundedCircle fluid />
											</Col>
											<Col xs={6} md={6}></Col>
										</Row>
									</Container>

									<span>Cody Miles</span>
								</div>
							</td>

							<td>Admin</td>
							<td>Yesterday at 11:00pm</td>
							<td>
								{' '}
								<a href='#'>
									<u>Resend Invite</u>
								</a>
							</td>
							<td>Enabled</td>
							<td>
								<Button className='btn btn-primary font-weight-normal btn-sm'>
									View
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<div className='d-flex align-items-center'>
									<Container>
										<Row>
											<Col xs={0} md={0}></Col>
											<Col>
												<Image src={imageIcon} roundedCircle fluid />
											</Col>
											<Col xs={6} md={6}></Col>
										</Row>
									</Container>

									<span>Cody Miles</span>
								</div>
							</td>

							<td>Admin</td>
							<td>Yesterday at 11:00pm</td>
							<td>
								<a href='#'>
									<u>Invite Accepted</u>
								</a>
							</td>

							<td>Enabled</td>
							<td>
								<Button className='btn btn-primary font-weight-normal btn-sm'>
									View
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	)
}
export default DashboardContent

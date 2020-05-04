import React from 'react'
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Image,
	Table,
} from 'react-bootstrap'

const Users = () => {
	return (
		<Container>
			<Container>
				<Row className='pb-20'>
					<Col xl='3' lg='4' md='4' sm='6' className='ml-auto'>
						<Form.Control
							type='text'
							className='form-control-md mb-3 mb-sm-0'
							placeholder='Search Users'
						/>
					</Col>
					<Col
						xl='2'
						lg='3'
						md='3'
						sm='6'
						data-target='#manage-user-modal'
						data-toggle='modal'
					>
						<Button
							type='button'
							className='btn btn-secondary btn-md btn-block mb-3 mb-sm-0'
						>
							Invite User
						</Button>
					</Col>
				</Row>
				<Table striped className='font-weight-normal f-15 text-secondry'>
					<thead>
						<tr>
							<th className='pt-3 pb-0' colSpan='7'>
								Users
							</th>
						</tr>
						<tr className='text-secondry'>
							<th width='200'>Name</th>
							<th width='100'>Permission</th>
							<th width='200'>Last Sign In</th>
							<th width='150'>Invitation Status</th>
							<th>User Status</th>
							<th width='30'></th>
							<th width='80'></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Container className='d-flex align-items-center'>
									<Image
										roundedCircle
										className='mr-3'
										src='./images/user-thumb.jpg'
										alt=''
										width='30'
									/>
									<span>Cody Miles</span>
								</Container>
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
								<a
									href='#'
									data-target='#delete-user-modal'
									data-toggle='modal'
								>
									<Image src='./images/icons/Delete.svg' alt='' width='25' />
								</a>
							</td>
							<td>
								<Button
									className='btn btn-primary font-weight-normal btn-sm'
									data-target='#manage-user-modal'
									data-toggle='modal'
								>
									Edit
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<Container className='d-flex align-items-center'>
									<Image
										roundedCircle
										className='mr-3'
										src='./images/user-thumb.jpg'
										alt=''
										width='30'
									/>
									<span>Jeff Ross</span>
								</Container>
							</td>
							<td>Admin</td>
							<td>Yesterday at 11:00pm</td>
							<td>
								<a href='#'>
									<u>Resend Invite</u>
								</a>
							</td>
							<td>Enabled</td>
							<td>
								<a
									href='#'
									data-target='#delete-user-modal'
									data-toggle='modal'
								>
									<Image src='./images/icons/Delete.svg' alt='' width='25' />
								</a>
							</td>
							<td>
								<Button
									className='btn btn-primary font-weight-normal btn-sm'
									data-target='#manage-user-modal'
									data-toggle='modal'
								>
									Edit
								</Button>
							</td>
						</tr>
						<tr>
							<td>
								<Container className='d-flex align-items-center'>
									<Image
										roundedCircle
										className='mr-3'
										src='./images/user-thumb.jpg'
										alt=''
										width='30'
									/>
									<span>Daniel Rayes</span>
								</Container>
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
								<a
									href='#'
									data-target='#delete-user-modal'
									data-toggle='modal'
								>
									<Image src='./images/icons/Delete.svg' alt='' width='25' />
								</a>
							</td>
							<td>
								<Button
									className='btn btn-primary font-weight-normal btn-sm'
									data-target='#manage-user-modal'
									data-toggle='modal'
								>
									Edit
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</Container>
	)
}

export default Users

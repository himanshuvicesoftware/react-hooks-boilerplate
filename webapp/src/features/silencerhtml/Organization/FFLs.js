import React from 'react'
import { Container, Button, Image, Table } from 'react-bootstrap'

const FFLs = () => {
	return (
		<Container>
			<Container>
				<Container className='table-responsive'>
					<Table striped className='font-weight-normal f-15 text-secondry'>
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
										View
									</Button>
								</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			</Container>
		</Container>
	)
}

export default FFLs

import React from 'react'
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap'

const Setting = () => {
	return (
		<Container>
			<Container>
				<Container className='mb-50'>
					<h5 className='font-semi-bold opacity-50 mb-25'>Details</h5>
					<Row>
						<Col md='6'>
							<Form.Group>
								<Form.Label>Organization Name</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='Name'
								/>
							</Form.Group>
						</Col>
						<Col md='6'>
							<Form.Group>
								<Form.Label>Your Organization Phone Number</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='Your Phone Number'
								/>
							</Form.Group>
						</Col>
					</Row>

					<Row>
						<Col md='6'>
							<Form.Group>
								<Form.Label>Street Address 1</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='Street Address 1'
								/>
							</Form.Group>
						</Col>
						<Col md='6'>
							<Form.Group>
								<Form.Label>Street Address 2</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='Street Address 2'
								/>
							</Form.Group>
						</Col>
					</Row>

					<Row className='mb-15'>
						<Col md='6'>
							<Form.Group>
								<Form.Label>City</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='City'
								/>
							</Form.Group>
						</Col>
						<Col md='6'>
							<Form.Group>
								<Form.Label>State</Form.Label>
								<Form.Control
									type='text'
									className='form-control'
									placeholder='Zip'
								/>
							</Form.Group>
						</Col>
					</Row>

					<Container className='mb-25'>
						<Container className='custom-control custom-switch'>
							<Form.Control
								type='checkbox'
								className='custom-control-input d-none'
								id='customSwitch1'
								checked
							/>
							<Form.Label
								className='custom-control-label f-18 pl-2'
								for='customSwitch1'
							>
								Automatically Delete Documents When Expired
							</Form.Label>
						</Container>
					</Container>

					<Button type='button' className='btn btn-secondary'>
						Save
					</Button>
				</Container>

				<Container className='py-50'>
					<h5 className='font-semi-bold opacity-50 mb-15'>
						Delete Your Organization
					</h5>
					<p className='f-15 font-weight-normal mb-50'>
						This cannot be undone. Prior to deleting your account, please
						download your files using our file exporter.
					</p>

					<Row>
						<Col lg='3' md='4'>
							<Button
								type='button'
								className='btn btn-secondary btn-block mb-md-0 mb-3'
								data-target='#delete-user-modal'
								data-toggle='modal'
							>
								Delete Account
							</Button>
						</Col>
						<Col lg='4' md='5'>
							<Button
								type='button'
								className='btn-block btn btn-outline d-flex align-items-center'
							>
								Download File Exporter
								<Image
									className='ml-auto'
									src='./images/icons/Download.svg'
									alt=''
								/>
							</Button>
						</Col>
					</Row>
				</Container>
			</Container>
		</Container>
	)
}

export default Setting

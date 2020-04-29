import React from 'react'
import './Settings.css'
import { Formik } from 'formik'
import {
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Button,
	Image,
	InputGroup,
} from 'react-bootstrap'
const imageIcon = require('../settings/Download.svg')
function Settings() {
	return (
		<div>
			<h2 className='page-title m-0 font-semi-bold'>FFL Settings</h2>
			<a href='#' className='nav-link py-1 active'>
				Settings
			</a>
			<h5 className='font-semi-bold opacity-50 mb-25'>Details</h5>
			<div>
				<Formik
					initialValues={{
						fflName: '',
						phoneNo: '',
						address1: '',
						address2: '',
						city: '',
						state: '',
						digits3ffl: '',
						digits5ffl: '',
					}}
				>
					{(props) => (
						<Form>
							<FormGroup>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>FFL Name</FormLabel>
											<FormControl
												type='text'
												placeholder='FFL Name'
												onChange={props.handleChange}
												value={props.values.fflName}
												name='fflName'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>Your Phone Number</FormLabel>
											<FormControl
												type='text'
												placeholder='Your Phone Number'
												onChange={props.handleChange}
												value={props.values.phoneNo}
												name='phoneNo'
											/>
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>Street Address 1</FormLabel>
											<FormControl
												type='text'
												placeholder='Street Address 1'
												onChange={props.handleChange}
												value={props.values.address1}
												name='address1'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>Street Address 2</FormLabel>
											<FormControl
												type='text'
												placeholder='Street Address 2'
												onChange={props.handleChange}
												value={props.values.address2}
												name='address2'
											/>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>City</FormLabel>
											<FormControl
												type='text'
												placeholder='City'
												onChange={props.handleChange}
												value={props.values.city}
												name='city'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>State</FormLabel>
											<FormControl
												type='text'
												placeholder='Zip'
												onChange={props.handleChange}
												value={props.values.state}
												name='state'
											/>
										</div>
									</div>
								</div>

								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>First 3 Digits of FFL #</FormLabel>
											<FormControl
												type='text'
												placeholder='First 3 Digits'
												onChange={props.handleChange}
												value={props.values.digits3ffl}
												name='digits3ffl'
											/>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<FormLabel>First 5 Digits of FFL #</FormLabel>
											<FormControl
												type='text'
												placeholder='First 5 Digits'
												onChange={props.handleChange}
												value={props.values.digits5ffl}
												name='digits5ffl'
											/>
										</div>
									</div>
								</div>

								<div className='mb-25'>
									<div className='custom-control custom-switch'>
										<InputGroup className='custom-control-input d-none' />
										<label className='custom-control-label f-18 pl-2'>
											Automatically Delete Documents When Expired
										</label>
									</div>
								</div>

								<Button type='button' className='btn btn-secondary'>
									Save
								</Button>

								<div className='py-50'>
									<h5 className='font-semi-bold opacity-50 mb-15'>
										Delete FFL
									</h5>
									<p className='f-15 font-weight-normal mb-50'>
										This cannot be undone. Prior to deleting this FFL, please
										download your files using our file exporter.
									</p>

									<div className='row'>
										<div className='col-lg-3 col-md-4'>
											<Button
												type='button'
												className='btn btn-secondary btn-block mb-md-0 mb-3'
											>
												Delete FFL
											</Button>
										</div>
										<div className='col-lg-4 col-md-5'>
											<Button
												type='button'
												className='btn-block btn btn-outline d-flex align-items-center'
											>
												Download File Exporter
												<Image className='ml-auto' src={imageIcon} alt='' />
											</Button>
										</div>
									</div>
								</div>
							</FormGroup>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
export default Settings

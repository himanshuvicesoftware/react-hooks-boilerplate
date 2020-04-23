import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import { Button, Form, FormControl } from 'react-bootstrap'
import './ChangePasswordForm.css'

const ChangePasswordForm = () => (
	<div>
		<Formik
			initialValues={{
				currentPassword: '',
				newPassword: '',
				confirmPassword: '',
			}}
			validate={(values) => {
				const errors = {}
				if (!values.currentPassword) {
					errors.currentPassword = 'Required'
				} else if (!values.newPassword) {
					errors.newPassword = 'Required'
				} else if (!values.confirmPassword) {
					errors.confirmPassword = 'Required'
				}
				return errors
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 3))
					setSubmitting(false)
				}, 400)
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<div className='div-body'>
					<div className='div-form-body'>
						<Form onSubmit={handleSubmit}>
							<label className='heading-label'>Change Password</label>
							<h6 htmlFor='currentPassword' id='form-label'>
								Your Current Password
							</h6>
							<FormControl
								id='text-field'
								name='currentPassword'
								type='password'
								placeholder='Your Current Password'
								onChange={handleChange}
								value={values.currentPassword}
							/>
							<div style={{ color: 'red' }}>
								<ErrorMessage name='currentPassword' />
							</div>
							<div className='form-inline'>
								<h6 htmlFor='newPassword' id='form-label'>
									Your New Password
								</h6>
								<h6 htmlFor='confirmPassword' id='form-label-inline'>
									Confirm New Password
								</h6>
								<FormControl
									id='text-field'
									name='newPassword'
									type='password'
									placeholder='Your New Password'
									onChange={handleChange}
									value={values.newPassword}
								/>
								<FormControl
									id='text-field-inline'
									name='confirmPassword'
									type='password'
									placeholder='Confirm Password'
									onChange={handleChange}
									value={values.confirmPassword}
								/>
							</div>
							<Button type='submit' id='form-button'>
								Save
							</Button>
						</Form>
					</div>
				</div>
			)}
		</Formik>
	</div>
)

export default ChangePasswordForm

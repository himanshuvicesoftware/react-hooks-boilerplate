import React from 'react'
import { Formik } from 'formik'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import './ResetPasswordForm.css'
import isEmpty from 'lodash/isEmpty'
import * as Yup from 'yup'
import classNames from 'classnames'

const ResetPasswordForm = () => {
	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string().required('This field cannot be empty'),
		newPassword: Yup.string().required('This field cannot be empty'),
		confirmPassword: Yup.string()
			.required('This field cannot be empty')
			.oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
	})
	const initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					resetForm()
					setSubmitting(false)
				}, 300)
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
				<Form onSubmit={handleSubmit}>
					{!isEmpty(errors) && (
						<Alert variant='danger'>Error: Password does not Match</Alert>
					)}
					<h5>Change Password</h5>

					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Your Current Password</Form.Label>
								<Form.Control
									type='password'
									name='currentPassword'
									placeholder='Your Current Password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.currentPassword}
									className={classNames({
										error: touched.currentPassword && errors.currentPassword,
									})}
								/>
								{touched.currentPassword && errors.currentPassword && (
									<div className='error-message'>{errors.currentPassword}</div>
								)}
							</Form.Group>
						</Col>
						<Col></Col>
					</Row>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label>Your New Password</Form.Label>
								<Form.Control
									type='password'
									name='newPassword'
									placeholder='Your New Password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.newPassword}
									className={classNames({
										error: touched.newPassword && errors.newPassword,
									})}
								/>
								{touched.newPassword && errors.newPassword ? (
									<div className='error-message'>{errors.newPassword}</div>
								) : null}
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Confirm New Password</Form.Label>
								<Form.Control
									type='password'
									name='confirmPassword'
									placeholder='Confirm New Password'
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.confirmPassword}
									className={classNames({
										error: touched.confirmPassword && errors.confirmPassword,
									})}
								/>
								{touched.confirmPassword && errors.confirmPassword && (
									<div className='error-message'>{errors.confirmPassword}</div>
								)}
							</Form.Group>
						</Col>
					</Row>
					<Button type='submit' variant='secondary' disabled={isSubmitting}>
						Save
					</Button>
				</Form>
			)}
		</Formik>
	)
}

export default ResetPasswordForm

import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Alert } from 'react-bootstrap'
import './profileForm.styles.css'
import isEmpty from 'lodash/isEmpty'
import { PHONE_NUMBER_REG_EXP } from './profileForm.constants'
import classNames from 'classnames'

const ProfileForm = ({ profileData }) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('E-mail is invalid')
			.required('E-mail is required'),
		phone: Yup.string()
			.matches(PHONE_NUMBER_REG_EXP, 'Phone number is not valid')
			.min(10, 'Phone number should be atleast 10 character')
			.required('Phone number is required'),
	})
	const initialValues = {
		name: profileData.name,
		email: profileData.email,
		phone: profileData.phone,
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
				<>
					{!isEmpty(errors) && (
						<Alert variant='danger'>Error: All fields need to be correct</Alert>
					)}
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='profileFormName'>
							<Form.Label>Your Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								placeholder='Your Name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								className={classNames({ error: touched.name && errors.name })}
							/>
							{touched.name && errors.name && (
								<div className='error-message'>{errors.name}</div>
							)}
						</Form.Group>
						<Form.Group controlId='profileFormEmail'>
							<Form.Label>Your Email</Form.Label>
							<Form.Control
								type='email'
								name='email'
								placeholder='Your Email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								className={classNames({ error: touched.email && errors.email })}
							/>
							{touched.email && errors.email && (
								<div className='error-message'>{errors.email}</div>
							)}
						</Form.Group>
						<Form.Group className='mb-15' controlId='profileFormPhone'>
							<Form.Label>Your Phone Number</Form.Label>
							<Form.Control
								type='text'
								name='phone'
								placeholder='Your Phone Number'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone}
								className={classNames({ error: touched.email && errors.email })}
							/>
							{touched.phone && errors.phone && (
								<div className='error-message'>{errors.phone}</div>
							)}
						</Form.Group>
						<Button variant='secondary' type='submit' disabled={isSubmitting}>
							Save
						</Button>
					</Form>
				</>
			)}
		</Formik>
	)
}

export default ProfileForm

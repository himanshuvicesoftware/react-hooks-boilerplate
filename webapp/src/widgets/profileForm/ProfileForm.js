import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Form, Button, Alert } from 'react-bootstrap'
import './profileForm.styles.css'
import isEmpty from 'lodash/isEmpty'

export default function ProfileForm() {
	// RegEx for phone number validation
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('E-mail is invalid')
			.required('E-mail is required'),
		phone: Yup.string()
			.matches(phoneRegExp, 'Phone number is not valid')
			.min(10, 'Phone number should be atleast 10 character')
			.required('Phone number is required'),
	})

	return (
		<div>
			<Formik
				initialValues={{ name: '', email: '', phone: '' }}
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
					<div>
						{!isEmpty(errors) && (
							<Alert variant='danger'>Error: Incorrect Password</Alert>
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
									className={touched.name && errors.name ? 'error' : null}
								/>
								{touched.name && errors.name ? (
									<div className='error-message'>{errors.name}</div>
								) : null}
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
									className={touched.email && errors.email ? 'error' : null}
								/>
								{touched.email && errors.email ? (
									<div className='error-message'>{errors.email}</div>
								) : null}
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
									className={touched.phone && errors.phone ? 'error' : null}
								/>
								{touched.phone && errors.phone ? (
									<div className='error-message'>{errors.phone}</div>
								) : null}
							</Form.Group>
							<Button variant='secondary' type='submit' disabled={isSubmitting}>
								Save
							</Button>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	)
}

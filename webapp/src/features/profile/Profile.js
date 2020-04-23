import React from 'react'
import ProfileImage from '../../widgets/ProfileImage/ProfileImage'
import ProfileForm from '../../widgets/profileForm/ProfileForm'
import ResetPasswordForm from '../../widgets/resetPasswordForm/ResetPasswordForm'
import { Card, Row, Col } from 'react-bootstrap'
import './Profile.styles.css'

export default function Profile() {
	return (
		<>
			<h2 className='page-title'>Your Profile</h2>
			<Card>
				<Card.Body>
					<Row>
						<Col md={6} className='text-center'>
							<ProfileImage />
						</Col>
						<Col md={6}>
							<ProfileForm />
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<Card className='shadow-sm'>
				<Card.Body>
					<ResetPasswordForm />
				</Card.Body>
			</Card>
		</>
	)
}

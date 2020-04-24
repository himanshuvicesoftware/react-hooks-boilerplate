import React from 'react'
import ProfileImage from '../ProfileImage'
import ProfileForm from '../ProfileForm'
import ResetPasswordForm from '../ResetPasswordForm'
import { Card, Row, Col } from 'react-bootstrap'
import './Profile.styles.css'

const Profile = () => {
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

export default Profile

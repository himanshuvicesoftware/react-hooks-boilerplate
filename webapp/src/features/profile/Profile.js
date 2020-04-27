import React, { useEffect } from 'react'
import ProfileImage from '../ProfileImage'
import ProfileForm from '../ProfileForm'
import ResetPasswordForm from '../ResetPasswordForm'
import { Card, Row, Col, Container } from 'react-bootstrap'
import './Profile.styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserProfile } from './profile.selectors'
import { fetchAllProfile } from './profile.asyncActions'
import BusyIndicator from '../../widgets/busyIndicator'

const Profile = () => {
	const profile = useSelector(selectUserProfile)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAllProfile())
	}, [dispatch])
	return (
		<Container>
			<h2 className='page-title'>Your Profile</h2>
			<Card>
				<Card.Body>
					<Row>
						<BusyIndicator>
							<Col md={6} className='text-center'>
								{profile.name && (
									<ProfileImage uri={profile.uri} name={profile.name} />
								)}
							</Col>
							<Col md={6}>
								{profile.name && (
									<ProfileForm
										name={profile.name}
										email={profile.email}
										phone={profile.phone}
									/>
								)}
							</Col>
						</BusyIndicator>
					</Row>
				</Card.Body>
			</Card>
			<Card className='shadow-sm'>
				<Card.Body>
					<ResetPasswordForm />
				</Card.Body>
			</Card>
		</Container>
	)
}

export default Profile

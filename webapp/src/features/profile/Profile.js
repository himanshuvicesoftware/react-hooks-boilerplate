import React, { useEffect } from 'react'
import ProfileImage from '../ProfileImage'
import ProfileForm from '../ProfileForm'
import ResetPasswordForm from '../ResetPasswordForm'
import { Card, Row, Col, Container } from 'react-bootstrap'
import './Profile.styles.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserProfile } from './profile.selectors'
import { fetchUserProfile } from './profile.asyncActions'
import BusyIndicator from '../../widgets/busyIndicator'
import isEmpty from 'lodash/isEmpty'

const Profile = () => {
	const profile = useSelector(selectUserProfile)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchUserProfile(1))
	}, [dispatch])
	return (
		<Container>
			<h2 className='page-page-title pt-50 mb-35 m-0 font-semi-bold'>
				Your Profile
			</h2>
			<Card>
				<Card.Body>
					<Row>
						<BusyIndicator>
							<Col md={6} className='text-center'>
								{!isEmpty(profile) && <ProfileImage profileData={profile} />}
							</Col>
							<Col md={6}>
								{!isEmpty(profile) && <ProfileForm profileData={profile} />}
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

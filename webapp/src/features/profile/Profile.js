import React from 'react'
import ProfileImage from '../../widgets/ProfileImage/ProfileImage'
import ProfileForm from '../../widgets/profileForm/ProfileForm'
import ResetPasswordForm from '../../widgets/resetPasswordForm/ResetPasswordForm'
import { Card, Row, Col } from 'react-bootstrap'
import './Profile.styles.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { selectAllProfile, selectProfileFilter } from './profile.selectors'
// import { actions } from './profile.slice'
// import { fetchAllProfile } from './profile.asyncActions'
// import BusyIndicator from '../../widgets/busyIndicator'

// const { updateFilter } = actions

export default function Profile() {
	// const profile = useSelector(selectAllProfile)
	// const filter = useSelector(selectProfileFilter)

	// const dispatch = useDispatch()

	// useEffect(() => {
	// 	dispatch(fetchAllProfile())
	// }, [dispatch])

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

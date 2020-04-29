import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import './profileImage.css'

const ProfileImage = ({ profileData }) => {
	const [imageFile, setImageFile] = useState(null)
	const [imageBlob, setImageBlob] = useState(null)
	const profilePicSrs = imageBlob || profileData.uri
	const [error, setError] = useState('')

	const userInitials = (name) => {
		const listOfUserInitials = name.split(' ')
		const firstName = listOfUserInitials[0][0]
		const lastName = listOfUserInitials[listOfUserInitials.length - 1][0]
		return firstName + lastName
	}

	const setImage = (e) => {
		const fileType = e.target.files[0].type
		if (
			fileType === 'image/png' ||
			fileType === 'image/jpeg' ||
			fileType === 'image/jpeg'
		) {
			setImageBlob(URL.createObjectURL(e.target.files[0]))
			setImageFile(e.target.files[0])
		} else {
			setError('Only Image type accepted')
		}
	}
	// This console is commit only to use imageFile, otherwise it get compiled error. Will Remove once it use.
	console.log('Image File', imageFile)
	return (
		<>
			<div className='user-circle d-inline-block position-relative mb-50'>
				{error && (
					<Alert variant='danger'>
						<span className='py-1 d-block'>{error}</span>
					</Alert>
				)}
				{profilePicSrs ? (
					<img
						src={profilePicSrs}
						alt='profile-pic'
						className='profile-image bg-primary text-white rounded-circle font-weight-normal'
					/>
				) : (
					<span className='profile-image bg-primary text-white rounded-circle font-weight-normal'>
						{userInitials(profileData.name)}
					</span>
				)}
				<Form.Control
					type='file'
					name='profileImage'
					onChange={setImage}
					className='upload-profile position-absolute w-100 h-100 opacity-0'
					accept='image/jpg, image/png'
				/>
			</div>
			<Button variant='secondary'>Upload Profile Image</Button>
		</>
	)
}

export default ProfileImage

import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './profileImage.css'

export default function ProfileImage() {
	const [imageFile, setImageFile] = useState(null)
	const [imageBlob, setImageBlob] = useState(null)
	const [error, setError] = useState('')
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
		<div>
			<h2>Profile</h2>
			{error ? (
				<div
					className='alert alert-danger border-0 text-white f-22 text-center py-3 mb-5'
					role='alert'
				>
					<span className='py-1 d-block'>{error}</span>
				</div>
			) : null}
			<div className='row'>
				<div className='col-md-6 text-center'>
					<div className='user-circle d-inline-block position-relative mb-50'>
						{imageBlob ? (
							<img
								src={imageBlob}
								alt='profile-pic'
								className='profile-image bg-primary text-white rounded-circle font-weight-normal'
							/>
						) : (
							<span className='profile-image bg-primary text-white rounded-circle font-weight-normal'>
								CM
							</span>
						)}
					</div>
					<div className=''>
						<div className='position-relative d-inline-block'>
							<Form.Control
								type='file'
								name='profileImage'
								onChange={setImage}
								className='upload-profile position-absolute w-100 h-100 opacity-0'
								accept='image/jpg, image/png'
							/>
							<Button type='button' className='btn btn-secondary'>
								Upload Profile Image
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

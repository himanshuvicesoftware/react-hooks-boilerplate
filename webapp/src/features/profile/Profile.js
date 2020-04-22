import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import './profile.css'

export default function Profile() {
	return (
		<div>
			<ProfileImage />
		</div>
	)
}

export function ProfileImage() {
	const [profileImage, setProfileImage] = useState(null)
	const setImage = (e) =>
		setProfileImage(URL.createObjectURL(e.target.files[0]))
	return (
		<div>
			<h2>Profile</h2>
			{/* <input type='file' onChange={(e) => setProfileImage(e.target.files[0])} />
			<Button>Upload Profile Image</Button> */}
			<img id='image' src={profileImage} />
			<div className='row'>
				<div className='col-md-6 text-center'>
					<div className='user-circle d-inline-block position-relative mb-50'>
						<svg
							width='260'
							version='1.1'
							xmlns='http://www.w3.org/2000/svg'
							x='0px'
							y='0px'
							viewBox='0 0 512 512'
							space='preserve'
						>
							<g>
								<path
									fill={profileImage ? profileImage : '#3d71de'}
									d='M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z'
								/>
							</g>
						</svg>
						<input
							type='file'
							name=''
							onChange={setImage}
							className='upload-profile position-absolute w-100 h-100 rounded-circle'
						/>
					</div>
					<div className=''>
						<button type='button' className='btn btn-secondary'>
							Upload Profile Image
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

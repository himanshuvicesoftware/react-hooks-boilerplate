import React from 'react'
import Modal, { showModal, hideModal } from '../modal'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './AssignUserModal.css'

const AssignUser = () => {
	const dispatch = useDispatch()
	const footer = (
		<>
			<div className='modal-footer justify-content-start border-0'>
				<Button
					type='button'
					className='btn btn-primary btn-big'
					data-dismiss='modal'
					onClick={() => {
						dispatch(hideModal())
					}}
				>
					Assign
				</Button>
				<Button
					type='button'
					className='btn btn-outline btn-big'
					onClick={() => {
						dispatch(hideModal())
					}}
				>
					Cancel
				</Button>
			</div>
		</>
	)
	return (
		<div>
			<Button
				onClick={() => {
					dispatch(showModal())
				}}
			>
				Assign
			</Button>
			<Modal header='Assign To User' footer={footer}>
				<div className='modal-body'>
					<label htmlFor=''></label>
					<select className='form-control' name=''>
						<option>Select User</option>
					</select>
				</div>
			</Modal>
		</div>
	)
}

export default AssignUser

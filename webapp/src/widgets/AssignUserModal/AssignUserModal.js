import React from 'react'
import Modal, { showModal, hideModal } from '../modal'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const AssignUser = () => {
	const dispatch = useDispatch()
	const footer = (
		<>
			<Button
				className='btn-big'
				onClick={() => {
					dispatch(hideModal())
				}}
			>
				Assign
			</Button>
			<Button
				variant='outline'
				className=' btn-big'
				onClick={() => {
					dispatch(hideModal())
				}}
			>
				Cancel
			</Button>
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
				<Form.Group controlId='exampleForm.SelectCustom'>
					<Form.Label>Select User</Form.Label>
					<Form.Control as='select' custom>
						<option>User1</option>
						<option>User2</option>
					</Form.Control>
				</Form.Group>
			</Modal>
		</div>
	)
}

export default AssignUser

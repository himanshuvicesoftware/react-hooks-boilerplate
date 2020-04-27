import React from 'react'
import Modal, { hideModal } from '../modal'
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
		<Modal header='Assign To User' footer={footer}>
			<Form.Group controlId='assignUserControl'>
				<Form.Label>Select User</Form.Label>
				<Form.Control as='select' custom>
					<option>User1</option>
					<option>User2</option>
				</Form.Control>
			</Form.Group>
		</Modal>
	)
}

export default AssignUser

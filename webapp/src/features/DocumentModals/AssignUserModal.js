import React, { useEffect } from 'react'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { actions } from '../documentItem/documentItem.slice'
const { setSelectedDocumentModal } = actions

const AssignUser = () => {
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedDocumentModal(null))
	useEffect(() => {
		dispatch(showModal())
	})

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}

	const footer = (
		<>
			<Button className='btn-big' onClick={handleClose}>
				Assign
			</Button>
			<Button variant='outline' className=' btn-big' onClick={handleClose}>
				Cancel
			</Button>
		</>
	)
	return (
		<Modal header='Assign To User' footer={footer} reset={resetModal}>
			<Form.Group controlId='assignUserControl'>
				<Form.Label>Select User</Form.Label>
				<Form.Control as='select'>
					<option>User1</option>
					<option>User2</option>
				</Form.Control>
			</Form.Group>
		</Modal>
	)
}

export default AssignUser

import React from 'react'
import { Modal, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'
import './Modal.css'
import Icons from '../../assets/icons'

const { hideModal } = actions

export default function ViceModal({ children, header, footer, title, reset }) {
	const show = useSelector(selectShowModal)
	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(hideModal())
		if (reset) reset()
	}
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='modal-dialog-centered'
			size='lg'
		>
			<Modal.Header className='border-0'>
				{header || (
					<Modal.Title className='f-32 font-semi-bold'>{title}</Modal.Title>
				)}
				<button className='close p-0 pr-2' onClick={handleClose}>
					<Image src={Icons.closeIcon} alt='' width='25' />
				</button>
			</Modal.Header>
			<Modal.Body className='py-0 mb-0'>{children}</Modal.Body>
			<Modal.Footer className='justify-content-start border-0'>
				{footer}
			</Modal.Footer>
		</Modal>
	)
}

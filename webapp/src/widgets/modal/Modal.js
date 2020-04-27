import React from 'react'
import { Modal, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'
import './Modal.css'
const closeIcon = require('../../assets/icons/Close.svg')

const { hideModal } = actions

export default function ViceModal({ children, header, footer }) {
	const show = useSelector(selectShowModal)
	const dispatch = useDispatch()
	return (
		<Modal
			show={show}
			onHide={() => dispatch(hideModal())}
			dialogClassName='modal-dialog-centered modal-xl'
		>
			<Modal.Header className='border-0'>
				<h5 className='f-32 font-semi-bold'>
					<Modal.Title>{header}</Modal.Title>
				</h5>
				<button
					className='close p-0 pr-2'
					onClick={() => dispatch(hideModal())}
				>
					<Image src={closeIcon} alt='' width='25' />
				</button>
			</Modal.Header>
			<Modal.Body className='py-0 mb-0'>{children}</Modal.Body>
			<Modal.Footer className='justify-content-start border-0'>
				{footer}
			</Modal.Footer>
		</Modal>
	)
}

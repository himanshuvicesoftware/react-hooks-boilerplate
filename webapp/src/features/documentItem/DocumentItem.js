import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DocumentDetailsSidebar from './DocumentDetailsSidebar'
import DocumentHistory from './DocumentHistory'
import FileList from './FileList'
import { Row, Col, Container } from 'react-bootstrap'
import {
	fetchDocumentHistoryByDocumentId,
	fetchAttachmentsByDocumentId,
	fetchDocumentItemCorrectionLog,
} from './documentItem.asyncActions'
import {
	selectDocumentHistory,
	selectAttachments,
} from './documentItem.selectors'
import './DocumentItem.css'

const DocumentItem = () => {
	const attachmentsData = useSelector(selectAttachments)
	const documentHistoryData = useSelector(selectDocumentHistory)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchAttachmentsByDocumentId(123))
		dispatch(fetchDocumentHistoryByDocumentId(2))
		dispatch(fetchDocumentItemCorrectionLog())
	}, [dispatch])

	return (
		<>
			<Container fluid>
				<Row className='mb-50 pt-50'>
					<Col md={5} lg={7}>
						<h2 className='page-title  m-0 font-semi-bold'>[CustomerName]</h2>
					</Col>
				</Row>
				<Row>
					<DocumentDetailsSidebar />
					<Col md={8} lg={9}>
						<FileList attachmentsData={attachmentsData} />
						<DocumentHistory documentHistoryData={documentHistoryData} />
					</Col>
				</Row>
			</Container>

			<div className='spacer'></div>
		</>
	)
}

export default DocumentItem

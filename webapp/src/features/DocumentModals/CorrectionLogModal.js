import React, { useEffect } from 'react'
import Modal, { showModal, hideModal } from '../../widgets/modal'
import { Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../widgets/Table'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'
import Icons from '../../assets/icons'
import { actions } from '../documentItem/documentItem.slice'
import { selectDocumentCorrectionLogs } from '../documentItem/documentItem.selectors'

const { setSelectedDocumentModal } = actions
const { ExportCSVButton } = CSVExport

const viewButtonFormatter = () => (
	<Button className='font-weight-normal btn-sm'>View</Button>
)

const columns = [
	{
		dataField: 'descriptionOfChange',
		text: 'Descripition of Change',
	},
	{
		dataField: 'user',
		text: 'User',
		sort: true,
	},
	{
		dataField: 'initialDate',
		text: 'Initial Date',
		sort: true,
	},
	{
		dataField: 'button',
		csvExport: false,
		text: '',
		formatter: viewButtonFormatter,
	},
]

const CorrectionLog = () => {
	const correctionLogs = useSelector(selectDocumentCorrectionLogs)
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedDocumentModal(null))
	useEffect(() => {
		dispatch(showModal())
		return () => {
			dispatch(hideModal())
		}
	})

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}
	const footer = (props) => (
		<>
			<Button className='btn-big' onClick={handleClose}>
				Close
			</Button>
			<ExportCSVButton
				className='btn btn-outline btn-big d-flex align-items-center'
				{...props}
			>
				Export CSV
				<Image src={Icons.downloadIcon} alt='' className=' ml-3 pl-5' />
			</ExportCSVButton>
		</>
	)
	return (
		<ToolkitProvider
			keyField='id'
			data={correctionLogs}
			columns={columns}
			exportCSV
		>
			{(props) => (
				<Modal
					title='Correction Log'
					footer={footer(props.csv)}
					reset={resetModal}
				>
					<Table {...props.baseProps} />
				</Modal>
			)}
		</ToolkitProvider>
	)
}

export default CorrectionLog

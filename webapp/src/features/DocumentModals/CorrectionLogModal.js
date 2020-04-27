import React, { useEffect } from 'react'
import Modal, { showModal, hideModal } from '../../widgets/modal'
import { Button, Image } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import BootstrapTable from 'react-bootstrap-table-next'
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit'
import Icons from '../../assets/icons'
const { ExportCSVButton } = CSVExport

const viewButtonFormatter = () => (
	<Button className='font-weight-normal btn-sm'>View</Button>
)

const dummyLogs = [
	{ id: 1, name: 'DummyLog', price: 20 },
	{ id: 2, name: 'DummyLog2', price: 200 },
]
const columns = [
	{
		dataField: 'id',
		text: 'Descripition of Change',
	},
	{
		dataField: 'name',
		text: 'User',
		sort: true,
	},
	{
		dataField: 'price',
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
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(showModal())
	})
	const footer = (props) => (
		<>
			<Button
				className='btn-big'
				onClick={() => {
					dispatch(hideModal())
				}}
			>
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
		<ToolkitProvider keyField='id' data={dummyLogs} columns={columns} exportCSV>
			{(props) => (
				<Modal header='Correction Log' footer={footer(props.csv)}>
					<BootstrapTable
						bordered={false}
						bootstrap4={true}
						hover
						striped
						{...props.baseProps}
					/>
				</Modal>
			)}
		</ToolkitProvider>
	)
}

export default CorrectionLog

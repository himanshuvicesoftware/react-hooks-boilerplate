import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
// import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
import {
	getScreenTimeReportsByUserId,
	getScreenTimeReportsConfig,
} from '../screenTimeReports.selectors'
import {
	useGetScreenTimeReportByUserId,
	useGetScreenTimeReportsConfig,
	useCreateActivity,
	useGetAllScreenTimeReports,
} from '../screenTimeReports.effects'
import { BusyIndicator } from '../../../widgets/busyIndicator'
import modal from '../../../widgets/modal'

const {
	actions: { useShowModal, useHideModal },
} = modal

export default function ScreenTimeReports() {
	const { userId } = useParams()

	useGetScreenTimeReportByUserId(userId)

	useGetScreenTimeReportsConfig()
	useGetAllScreenTimeReports()
	const activities = useSelector(getScreenTimeReportsByUserId(userId))

	const config = useSelector(getScreenTimeReportsConfig)

	const showModal = useShowModal()

	const hasReportDataToDisplay = !!(
		activities &&
		config &&
		config.activities &&
		activities.length
	)

	console.log(JSON.stringify(activities))

	return (
		<Container>
			<Row>
				<Col>
					<h1>Screen Time Reports</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<BusyIndicator>
						<Table striped bordered hover variant='dark'>
							<thead>
								<tr>
									<th>Activity Type</th>
									<th>Conversion Rate</th>
									<th>Minutes Spent</th>
									<th>Screen Minutes</th>
								</tr>
							</thead>
							<tbody>
								{hasReportDataToDisplay &&
									activities.map((activity) => (
										<tr key={activity.type + activity.duration}>
											<td>
												{getConfigActivity(activity.type, config).description}
											</td>
											<td>
												{getConfigActivity(activity.type, config).conversion}
											</td>
											<td>{activity.duration}</td>
											<td>
												{(+activity.duration *
													+getConfigActivity(activity.type, config)
														.conversion) /
													100}
											</td>
										</tr>
									))}
							</tbody>
						</Table>
					</BusyIndicator>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button onClick={showModal}>Add New Activity</Button>
				</Col>
			</Row>
			<AddActivityModal activities={config.activities} userId={userId} />
		</Container>
	)
}

function AddActivityModal({ activities, userId }) {
	const hideModal = useHideModal()
	const createActivity = useCreateActivity()

	return (
		<modal.components.Modal>
			<Formik
				initialValues={{
					activeMinutes: 0,
					color: '',
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						createActivity(
							{
								type: values.activityType,
								duration: values.activeMinutes,
							},
							userId
						)
						setSubmitting(false)
						hideModal()
					}, 400)
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Modal.Header closeButton>
							<Modal.Title>Add Activity</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Field
								component={Form.Control}
								type='number'
								name='activeMinutes'
							/>
							<Field
								name='activityType'
								as='select'
								placeholder='Select an activity...'
							>
								<>
									<option value='' disabled defaultValue>
										Select an activity...
									</option>
									{activities.map((activity) => (
										<option
											key={activity.type}
											value={activity.type}
											label={activity.description}
										/>
									))}
								</>
							</Field>
						</Modal.Body>
						<Modal.Footer>
							<Button variant='secondary' onClick={hideModal}>
								Close
							</Button>
							<Button type='submit' variant='primary' disabled={isSubmitting}>
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				)}
			</Formik>
		</modal.components.Modal>
	)
}

function getConfigActivity(activityType, config) {
	return config.activities.find((activity) => activity.type === activityType)
}

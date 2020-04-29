import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import { Form, Button } from 'react-bootstrap'
import './DatePicker.css'

const CustomDatePicker = () => {
	const [startDate, setStartDate] = useState(undefined)
	const [endDate, setEndDate] = useState(undefined)
	const [selectionComplete, toggleSelectionComplete] = useState(false)
	const [rangeDate, setRangeDate] = useState()
	const [datePickerRef, setDatePickerRef] = useState(false)

	const handleDateChange = (date) => {
		if (!selectionComplete && !startDate) {
			setStartDate(date)
		}

		if (!selectionComplete && startDate && !endDate) {
			setEndDate(date)
			setRangeDate(
				`${moment(startDate).format('ll')} - ${moment(date).format('ll')}`
			)
			toggleSelectionComplete(true)
		}

		if (selectionComplete && startDate && endDate) {
			setStartDate(date)
			setEndDate(undefined)
			toggleSelectionComplete(false)
		}
	}

	// eslint-disable-next-line
	const ref = React.createRef()
	// eslint-disable-next-line react/display-name
	const CustomInput = React.forwardRef(({ onClick }, ref) => (
		<Form.Control
			type='text'
			defaultValue={rangeDate}
			className='calender-input'
			placeholder='Feb 1 - Feb 28, 2020'
			onClick={onClick}
		/>
	))

	const closeDatePicker = () => {
		datePickerRef.setOpen(false)
	}

	return (
		<DatePicker
			showPopperArrow={false}
			onChange={handleDateChange}
			selectsEnd={Boolean(startDate)}
			startDate={startDate}
			endDate={endDate}
			shouldCloseOnSelect={false}
			customInput={<CustomInput />}
			ref={(r) => setDatePickerRef(r)}
			popperModifiers={{
				preventOverflow: {
					enabled: true,
				},
			}}
		>
			<div>
				<Button
					className='btn-block'
					variant='primary'
					size='lg'
					type='button'
					onClick={closeDatePicker}
				>
					Save
				</Button>
			</div>
		</DatePicker>
	)
}

export default CustomDatePicker

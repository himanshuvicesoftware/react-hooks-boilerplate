import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'

var count = true
function DatePickerComponent() {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())

	const selectedDateRange = (date) => {
		if (!count) {
			setEndDate(date)
		} else {
			setStartDate(date)
			setEndDate(date)
		}
		count = !count
	}
	return (
		<>
			<DatePicker
				selected={endDate}
				onChange={selectedDateRange}
				startDate={startDate}
				endDate={endDate}
			/>
		</>
	)
}
export default DatePickerComponent

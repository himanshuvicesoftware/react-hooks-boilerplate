import React from 'react'
import { Line } from 'react-chartjs-2'

const state = {
	labels: [
		'11/19',
		'12/19',
		'01/20',
		'02/20',
		'03/20',
		'04/20',
		'05/20',
		'06/20',
		'07/20',
		'08/20',
		'09/20',
		'10/20',
		'11/20',
	],
	datasets: [
		{
			// label: '',
			// borderJoinStyle: false,
			fill: false,
			lineTension: 0.5,
			// backgroundColor: 'rgba(75,192,192,1)',
			borderColor: 'rgba(0,0,0,1)',
			// borderWidth: 2,
			// lineJoin: 'round',
			data: [
				88,
				150,
				180,
				200,
				230,
				210,
				170,
				205,
				250,
				210,
				270,
				273,
				300,
				350,
				380,
			],
		},
	],
}

export function Chart() {
	return (
		<div>
			<h6>Engagment</h6>
			<Line
				data={state}
				options={{
					title: {
						display: true,
						// text: 'Average Rainfall per month',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'right',
					},
				}}
			/>
		</div>
	)
}

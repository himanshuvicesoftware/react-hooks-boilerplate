import React from 'react'
import { Line } from 'react-chartjs-2'
var d = new Date()
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
		d,
		'10/20',
		'11/20',
	],
	datasets: [
		{
			fill: false,
			lineTension: 0.5,
			borderColor: 'rgba(0,0,0,1)',
			pointRadius: 0,
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
					responsive: true,
					tooltips: {
						//  intersect: state.labels[10] === d,
						intersect: state.labels[10] === d,

						callbacks: {
							title: () => {
								// if (state.labels[10] === d) {
								return 'Active Employees 120 '
								// }
							},
						},
					},

					title: {
						display: true,

						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'top',
					},
				}}
			/>
		</div>
	)
}

import React from 'react'
import { Line } from 'react-chartjs-2'
var d = new Date()
var date = d.getDate()
var mon = d.getMonth()
var year = d.getFullYear()
var fdate = date + '/' + mon + '/' + year
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
		fdate,
		'10/20',
		'11/20',
	],
	datasets: [
		{
			fill: false,
			lineTension: 0.5,
			borderColor: 'rgba(0,0,0,1)',
			pointHoverBackgroundColor: 'rgba(255,255,255)',

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
			<Line
				data={state}
				options={{
					responsive: true,

					tooltips: {
						callbacks: {
							textColor: () => {},
							label: () => {
								return [
									'Active Employess        120 ',
									'Documents created       99',
									'Documents Flagged       1',
								]
							},
						},
						backgroundColor: '#808080',
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

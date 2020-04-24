import React from 'react'
import { useSelector } from 'react-redux'
import { getAllDashboardChart } from '../dashboardChart.selectors'
// import { useGetAllDashboardChart } from '../dashboardChart.effects'
import { Line } from 'react-chartjs-2'
export default function DashboardChart() {
	const dashboardChart = useSelector(getAllDashboardChart)
	console.log(dashboardChart)

	// useGetAllDashboardChart()

	return (
		<div>
			<div>
				<Line
					data={dashboardChart}
					options={{
						responsive: true,
						// layout: {
						// 	padding: {
						// 		left: 50,
						// 		right: 0,
						// 		top: 0,
						// 		bottom: 0,
						// 		text: 'hggg',
						// 	},
						// },

						tooltips: {
							callbacks: {
								textColor: function () {
									return {
										backgroundColor: 'rgb(255, 0, 0)',
									}
								},

								// textColor: () => {},
								label: () => {
									return [
										'Active Employess        120 ',
										'Documents created       99',
										'Documents Flagged       1',
									]
								},
							},
							backgroundColor: '#808080',
							// borderColor: '#FF0000',
							// labelTextColor:()=>{
							// 	textColor:'#FFFFFF',
							// }
						},

						title: {
							display: true,
							text: 'Engagement',
							position: 'top',
							fontSize: 20,
						},
						legend: {
							display: true,
							position: 'top',
						},
					}}
				/>
			</div>
			{/* <h1>DashboardChart</h1>
			{dashboardChart.length === 0 ? (
				'Loading...'
			) : (
				<ul>
					{dashboardChart.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			)} */}
		</div>
	)
}
// export default DashboardChart

import {
	GET_ALL_DASHBOARD_CHART,
	GET_DASHBOARD_CHART_BY_ID,
} from './dashboardChart.actionsTypes'
import { mergeCollections } from '../../infrastructure/reduxHelpers'

// const intitialState = {
// 	allDashboardChart: [],
// }
var d = new Date()
var date = d.getDate()
var mon = d.getMonth()
var year = d.getFullYear()
var fdate = date + '/' + mon + '/' + year

const intitialState = {
	allDashboardChart: {
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
			'12/20',
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
	},
}

export default function reducer(state = intitialState, action) {
	switch (action.type) {
		case GET_ALL_DASHBOARD_CHART.RECEIVED:
			return {
				...state,
				allDashboardChart: action.payload,
			}
		case GET_DASHBOARD_CHART_BY_ID.RECEIVED:
			return {
				...state,
				allDashboardChart: mergeCollections(
					state.allDashboardChart,
					action.payload
				),
			}
		default: {
			return state
		}
	}
}

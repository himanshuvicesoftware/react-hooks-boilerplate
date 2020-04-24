import * as dashboardChartActions from './dashboardChart.actionsTypes'
import useAsync from '../../infrastructure/useAsync'

export function useGetAllDashboardChart(dependencies) {
	useAsync({
		url: '/dashboard-chart',
		actionType: dashboardChartActions.GET_ALL_DASHBOARD_CHART,
		dummyResponse: ['Dummy Result 1', 'Dummy Result 2'], // Delete dummyResponse to have live api called or update it to have dummy data you want to fake
	})
}

export function useGetDashboardChartById(dashboardChartId) {
	useAsync({
		url: '/dashboard-chart/' + dashboardChartId, // We have to do a string conncat for now because I can't figure out how to escape a string template properly. Issue: https://github.com/reesemclean/blueprint/issues/69#issuecomment-605670252
		actionType: dashboardChartActions.GET_DASHBOARD_CHART_BY_ID,
		dependencies: [dashboardChartId],
	})
}

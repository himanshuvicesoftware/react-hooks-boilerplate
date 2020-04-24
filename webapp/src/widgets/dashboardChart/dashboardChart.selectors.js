export const getAllDashboardChart = (state) =>
	state.dashboardChart.allDashboardChart
export const getDashboardChartById = (dashboardChartId) => (state) =>
	state.dashboardChart.allDashboardChart.find(
		(item) => item.id === dashboardChartId
	)

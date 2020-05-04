import { buildAsyncActionType } from '../../infrastructure/reduxHelpers'

export const GET_ALL_DASHBOARD_CHART = buildAsyncActionType(
	'dashboardChart',
	'GET_ALL_DASHBOARD_CHART'
)
export const GET_DASHBOARD_CHART_BY_ID = buildAsyncActionType(
	'dashboardChart',
	'GET_DASHBOARD_CHART_BY_ID'
)

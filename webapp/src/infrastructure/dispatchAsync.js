const DUMMY_ASYNC_DELAY = 1500

export default function dispatchAsync({
	url,
	actionType,
	dispatch,
	stubSuccess,
	stubError,
} = {}) {
	if (!url) {
		throw new Error('url is required!')
	}

	if (
		!actionType ||
		!(actionType.REQUESTED && actionType.RECEIVED && actionType.ERROR)
	) {
		throw new Error(
			'actionType is required and must be an async action. Use the buildAsyncAction() factor method to create async actions.'
		)
	}

	if (stubSuccess && stubError) {
		throw new Error(
			"It's invalid to specify stubSuccess and stubError. You must specify one or the other."
		)
	}

	dispatch({ type: actionType.REQUESTED })

	if (stubSuccess) {
		setTimeout(
			() => dispatch({ type: actionType.RECEIVED, payload: stubSuccess }),
			DUMMY_ASYNC_DELAY
		)
		return
	} else if (stubError) {
		setTimeout(
			() => dispatch({ type: actionType.ERROR, stubError }),
			DUMMY_ASYNC_DELAY
		)
	}

	fetch(url)
		.then((response) => response.json())
		.then((json) => dispatch({ type: actionType.RECEIVED, payload: json }))
		.catch((e) => dispatch({ type: actionType.ERROR, payload: e }))
}

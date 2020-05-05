import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './createStore'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import PSPDFKit from 'pspdfkit'

PSPDFKit.load({
	container: '#pspdfkit',
	document: 'Downloadsomename.pdf',
	licenseKey:
		'O9_-2uSSnzMhLONp-kpDasG2AnDO12lWSbwlvKUFRLV2jmY8it6awRrxcJ8hYWdoO1HJXhFg8GoKAZJrCU08sfbchqQy6QHIR4cYUPWqNwnCJDYGtmC6i2RhvClnm1E1vgvNVhqJOBUM8DpDBk9ju3HP6S2Zu7nm8EVrLd-IQZhDp9XbNPB-yJsT-Za_TH_o78Q6LsSh-rPb2amJt6kE3lc4mtvOy8wDYxFIR56TE41_yxEH83Da6aQN_5qslnhSW0MXB36I0H0agch2H6tUIK4XASKZkAT2-K5xGWvT_GOG97SLPvgF30gyx0bu2XVZVSnJ0rtx9F8wisr6isnk8BiA6d6f_FNPElWbp0nhBIUKL8MThG69tca7kxvCf-sGSlDvn2GMDNK4AFpUz2PHssw6tR-mhMroUPcocyGpasLzs-fxoeAbgwMaGXRX1x3H',
})
	.then((instance) => {
		console.log('PSPDFKit loaded', instance)
	})
	.catch((error) => {
		console.error(error.message)
	})

const store = createStore()

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

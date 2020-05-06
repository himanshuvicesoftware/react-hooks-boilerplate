import React, { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import './Style.css'

function DemoCanvasDraw() {
	const [height, setHeight] = useState(400)
	const [width, setWidth] = useState(400)
	const [brushRadius, setBrushRadius] = useState(10)
	return (
		<div>
			<h1>Signature Digitally</h1>
			<div>
				<button>Save</button>
				<button>Clear</button>
				<button>Undo</button>
				<label>Width: </label>
				<input
					type='number'
					value={width}
					onChange={(e) => setWidth(parseInt(e.target.value))}
				/>
				<label>Height: </label>
				<input
					type='number'
					value={height}
					onChange={(e) => setHeight(parseInt(e.target.value))}
				/>
				<label>Brush-Radius: </label>
				<input
					type='number'
					value={brushRadius}
					onChange={(e) => setBrushRadius(parseInt(e.target.value))}
				/>
			</div>
			<div className='Draw'>
				<CanvasDraw
					style={{
						boxShadow:
							'0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)',
					}}
					// ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
					brushRadius={brushRadius}
					canvasWidth={width}
					canvasHeight={height}
					hideGrid
				/>
			</div>
		</div>
	)
}

export default DemoCanvasDraw

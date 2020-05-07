import React, { useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function DemoCanvasDraw() {
	const [height, setHeight] = useState(400)
	const [width, setWidth] = useState(400)
	const [brushRadius, setBrushRadius] = useState(10)
	var saveableCanvas
	var loadableCanvas
	return (
		<Container>
			<h1>Signature Digitally</h1>
			<Row>
				<Col>
					<Button
						onClick={() => {
							localStorage.setItem('savedDrawing', saveableCanvas.getSaveData())
						}}
						variant='success'
						size='sm'
					>
						Save
					</Button>
				</Col>
				<Col>
					<Button
						onClick={() => {
							saveableCanvas.clear()
						}}
						variant='danger'
						size='sm'
					>
						Clear
					</Button>
				</Col>
				<Col>
					<Button
						onClick={() => saveableCanvas.undo()}
						variant='warning'
						size='sm'
					>
						Undo
					</Button>
				</Col>
				<Col>
					<Form.Label>Width: </Form.Label>
					<Form.Control
						type='number'
						value={width}
						onChange={(e) => setWidth(parseInt(e.target.value))}
					/>
				</Col>
				<Col>
					<Form.Label>Height: </Form.Label>
					<Form.Control
						type='number'
						value={height}
						onChange={(e) => setHeight(parseInt(e.target.value))}
					/>
				</Col>
				<Col>
					<Form.Label>Brush-Radius: </Form.Label>
					<Form.Control
						type='number'
						value={brushRadius}
						onChange={(e) => setBrushRadius(parseInt(e.target.value))}
					/>
				</Col>
				<Col>
					<Button
						onClick={() => {
							loadableCanvas.loadSaveData(localStorage.getItem('savedDrawing'))
						}}
						variant='primary'
						size='sm'
					>
						Load
					</Button>
				</Col>
			</Row>
			<br />
			<br />
			<Row>
				<Col>
					<CanvasDraw
						style={{
							boxShadow:
								'0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)',
						}}
						ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
						brushRadius={brushRadius}
						canvasWidth={width}
						canvasHeight={height}
						hideGrid
					/>
				</Col>
				<Col>
					<CanvasDraw
						style={{
							boxShadow:
								'0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)',
						}}
						disabled
						hideGrid
						ref={(canvasDraw) => (loadableCanvas = canvasDraw)}
						saveData={localStorage.getItem('savedDrawing')}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default DemoCanvasDraw

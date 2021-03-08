class Renderer {

	frameCount:number
	canvas:any
	ctx:any
	imgData:any
	size:Vector
	camera:Camera
	world:World

	constructor(world:World) {

		this.world = world
		this.frameCount = 0
		this.camera = new Camera(new Vector(0,0), 100, 10)

		this.canvas = $('#canvas')[0]
		this.ctx = this.canvas.getContext('2d')

		this.canvas.width = window.innerWidth
		this.canvas.height = window.innerHeight
		
		this.imgData = this.ctx.createImageData(this.canvas.width, this.canvas.height)
		this.size = new Vector(this.canvas.width, this.canvas.height)
	}
	clearCanvas() : void {

		// clear screen
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

	}
	frame() : void {
		this.frameCount++

		let canvas = this.canvas
		let ctx = this.ctx

		// rerun frame
		window.requestAnimationFrame(() => { this.frame() })

		this.clearCanvas()

		// draw stuff
		this.drawGrid()

		
	}
	drawGrid() : void {

		let canvas = this.canvas
		let ctx = this.ctx
		let world = this.world

		let cp = this.camera.pos
		let wH = window.innerHeight
		let wW = window.innerWidth
		
		ctx.strokeStyle = 'rgb(255,255,255)'
		for(let x = cp.x-wW/2; x < cp.x+wW/2; x += 100) {
			x = Math.round(x/100)*100
			ctx.moveTo(x, cp.y-wH/2)
			ctx.lineTo(x, cp.y+wH/2)
			ctx.closePath()
		}
		for(let y = cp.y-wH/2; y < cp.y+wH/2; y += 100) {
			y = Math.round(y/100)*100
			ctx.moveTo(cp.x-wW/2, y)
			ctx.lineTo(cp.x+wW/2, y)
			ctx.closePath()
		} 
	}
}
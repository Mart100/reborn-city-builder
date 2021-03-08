import { Renderer } from './renderer'
import { World } from './world'

const globalAny:any = global;

  let renderer:Renderer
  let world:World

$(() => {
	world = new World()
	renderer = new Renderer(world)
	
	globalAny.world = world
})
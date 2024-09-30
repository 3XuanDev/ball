const circleRatio = document.getElementById("circle-ratio")
const circleSpeed = document.getElementById("circle-speed")
const circleAngle = document.getElementById("circle-angle")

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

var ratio = 5
var speed = 1
var angle = 2

var position = {
  x: canvas.width / 2,
  y: canvas.height / 2,

  dX: -speed,
  dY: -speed
}

const drawCircle = (x, y) => {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)

  ctx.beginPath()
  ctx.arc(x, y, ratio, 0, Math.PI * 2)
  ctx.fill()
}

circleRatio.addEventListener("change", () => ratio = parseInt(circleRatio.value))

circleSpeed.addEventListener("change", () => {
  speed = parseInt(circleSpeed.value)
  position.dX = (position.dX > 0) ? speed : -speed;
  position.dY = (position.dY > 0) ? speed : -speed;
})

circleAngle.addEventListener("change", () => angle = circleAngle.value)

function createCircle() {
  if(position.x < 0) position.dX = speed
  if(position.y < 0) position.dY = speed

  if(position.y > canvas.height) position.dY = -speed
  if(position.x > canvas.width) position.dX = -speed

  position.x += position.dX + Math.cos(0.5 * speed * 0.01)
  position.y += position.dY

  drawCircle(position.x, position.y)
  
  requestAnimationFrame(createCircle)
}

createCircle()
rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

score = 0

brickRowCount = 9
brickColumnCount = 5

//create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height /2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

// Create Paddle properties
paddle = {
    x: canvas.wdith / 2 - 40,
    y: canvas.height - 20,
    w: 80,
    h: 10,
    speed: 8,
    dx: 0,
}

//create brick properties
brickInfo = {
    w: 70,
    h: 20,
    padding: 10 ,
    offsetX: 45,
    offsetY: 60,
    visible: true
}

// Create bricks
bricks = []
for (let i = 0; i < brickRowCount; i++) {
    bricks[i] = []
    for (let j = 0; j < brickColumnCount; j++) {
        const x = i * (brickInfo.w + brickInfo.padding) + brinkInfo.offsetX
        const y = j * (brinkInfo.h + brinkInfo.padding) + brinkInfo.offsetY
        bricks[i][j] = {x,y, ...brickInfo}
    }
}

//Draw ball on canvas
function drawBall () {
    ctx.beginPath()
    ctx.arx(ball.x, ball.y, ball.sixe, 0, Math.PI * 2)
    ctx.fillStyle = '#009599'
    ctx.fill
    ctx.closePath()
}

//Draw Paddle on canvas
function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
    ctx.fillStyle = '#009599'
    ctx.fill()
    ctx.closePath()
}


// Draw score on canvas
function drawScore() {

    ctx.fillText('Score: ${score}', canvas.width-100, 30)
}

// Draw bricks on canvas
function drawBricks() {
    bricks.forEach(column => {
        column.forEach(brick => {
            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brick.w, brick.h)
            ctx.fillStyle = brick.visible ? '#0095dd'  : 'transparent';
            ctx.fill()
            ctx.closePath
        })
    })
}

//draw everything
function draw() {
    drawPaddle()
    drawBall()
    drawScore()
    drawBricks()
}

draw()


function update() {

    draw()
    requestAnimationFrame(update)
}

// rules open and close event handlers
rulesBtn.addEventListener('click', () => {

})

function CovertToScreen (tall: number) {
    Result = Math.map(tall, -512, 512, 0, 4)
    return Result
}
let Result = 0
let Speed_x = randint(-10, 10)
let Speed_y = randint(-10, 10)
let X = 0
let Y = 0
basic.forever(function () {
    led.plot(CovertToScreen(X), CovertToScreen(Y))
    led.unplot(CovertToScreen(X), CovertToScreen(Y))
    X += Speed_x
    Y += Speed_y
    led.plot(CovertToScreen(X), CovertToScreen(Y))
    if (0 < 0) {
    	
    }
    if (true) {
    	
    }
})

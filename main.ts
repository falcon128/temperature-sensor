basic.forever(function () {
    led.plotBarGraph(
    (pins.analogReadPin(AnalogPin.P0) - 230) / 12 - 10,
    30
    )
    basic.pause(100)
})

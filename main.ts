let tempo = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(tempo)
        basic.pause(100)
    }
    music.play(music.stringPlayable("C5 G B A F A C5 B ", 120), music.PlaybackMode.LoopingInBackground)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(10)
    tempo = 10
})

let geluidsterkte = 127
music.setVolume(geluidsterkte)
basic.forever(function () {
    music.ringTone(440)
    geluidsterkte = input.lightLevel()
    basic.pause(100)
    music.setVolume(geluidsterkte)
})

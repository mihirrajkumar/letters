music.playMelody("G A G A G A G A ", 500)
music.playTone(262, music.beat(BeatFraction.Eighth))
music.ringTone(440)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    basic.showNumber(26)
    basic.showString("letters")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # . . # .
        # . . # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.showLeds(`
        # . . # .
        # . # . .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # #
        # . # . #
        # . . . #
        # . . . #
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # # # # #
        . . . . #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # # . . .
        # . # . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showString("now you now your abc,s next time wont you sing with me")
})

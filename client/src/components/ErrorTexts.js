import { now } from 'mongoose';
import React from 'react'
import Typewriter from 'typewriter-effect';

export function ErrorTextTest() {

    return (
        <>
            <Typewriter
                options={{
                    // cursor: "",
                    delay: 30,
                }}
                onInit={(typewriter) => {
                    typewriter
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')
                    .typeString('hello again' + Date(now) + '<br><br>')

                    .start()

                }}
            />
        </>
    )
}

export function ErrorTxtTitle() {

    const refrenceLink = '<a href="https://imgur.com/a/tQDr7vy" target="_blank">CLICK HERE</a>';

    return (
        <>
            <Typewriter
                options={{
                    // cursor: "",
                    delay: 30,
                    // delay: 1,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('DESIGN BASEAD')
                        .pauseFor(1000)
                        .changeDeleteSpeed(10)
                        .deleteChars(27)
                        .typeString('DESIGN INSPIRATION')
                        .pauseFor(500)
                        .typeString('<br>//')
                        .pauseFor(500)
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('INSPIRED BY THE PIXEL VISION 8. MINEDATA SEEKS TO REPLICATE THE SAME IDEA OF DISPLAY ON THE SCREEN OF /GAME/SFX OF THE MENTIONED PROGRAM.')
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('THIS UNIQUE SCREEN BROUGHT ME THE IDEA OF RECREATING THE LOOK OF MINEDATA IN A RETRO AND PIXELIZED STYLE, BECAUSE IN MY VISION IT IS SOMETHING THAT MATCHES MINECRAFT.')
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString(`THE REFERENCE IMAGE USED WAS THIS:${refrenceLink}`)
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('//<br>')
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .pauseFor(500)
                        .changeDelay(20)
                        .typeString('LOADING')
                        .changeDelay(1500)
                        .typeString('...')
                        .changeDelay(30)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('TECHNOLOGIES USED')
                        .pauseFor(500)
                        .typeString('<br>//')
                        .pauseFor(500)
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .changeDelay(60)
                        .typeString('* JAVASCRIPT <br><br>')
                        .typeString('* NODEJS <br><br>')
                        .typeString('* EXPRESS <br><br>')
                        .typeString('* MONGODB <br><br>')
                        .typeString('* AXIOS <br><br>')
                        .typeString('* REACTJS <br><br>')
                        .typeString('* REACT-ROUTER <br><br>')
                        .typeString('* REACT-SPINNERS <br><br>')
                        .typeString('* TYPEWRITERJS')
                        .changeDelay(30)
                        .pauseFor(500)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('<br>')
                        .pauseFor(500)
                        .typeString('//<br>')
                        .changeDelay(30)
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('<br>')
                        .typeString('END OF TRANSMISSION.')
                        .start()
                }}
            />
        </>
    )
}
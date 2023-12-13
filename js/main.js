TweenMax.from('.navbar', 2, {
    left: '-20%',
    ease: Expo.easeInOut,
    delay: 0.4,
})

let t1 = new TimelineMax({ paused: true })

t1.to('.nav', 2.2, {
    width: '94%',
    ease: Expo.easeInOut,
})

t1.staggerTo('.nav-item a', 1, {
    top: '0px',
    ease: Expo.easeInOut,
}, 0.1, '-=0.8')

t1.reverse()
$(document).on('click', '.nav-toggle', function () {
    t1.reversed(!t1.reversed())
})

$(document).on('click', '.nav-item a', function () {
    t1.reversed(!t1.reversed())
})
//Add Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play play pause reverse"
})

gsap.fromTo('.overlay-1', {
    y:"100%",
    duration: 1
},{
    y:"-100%",
    duration: 1,

})
gsap.to('.overlay-2', {
    x:"-100%",
    delay: .9,
    duration: 1,

})
tl.from('.line p', 2.8, {
    opacity: 0,
    delay: 1,
    ease: 'power4.out',
    y: 250,
    skewY: 15,
    stagger: {
        amount: .5
    }
});

follower = document.querySelectorAll('.cursor');
posX = 0;
posY = 0;
mouseX=0;
mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -2,
    onRepeat: function() {
        posX += (mouseX - posX)/10;
        posY += (mouseY - posY)/10;


        TweenMax.set(follower, {
            css: {
                left: posX - 80, 
                top: posY - 80
            }
        })
    }
})

document.addEventListener('mousemove', (e)=>{
    mouseX = e.pageX;
    mouseY = e.pageY;
})
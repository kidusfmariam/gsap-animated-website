//Add Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play play pause reverse"
})

gsap.fromTo('.overlay-1', {
    x:"100%",
    duration: 1
},{
    x:"-100%",
    duration: 1.5,
    stagger: .4

})
gsap.to('.overlay-2', {
    y:"-100%",
    delay: 1.5,
    duration: 1.5,
    stagger: .4

})
gsap.to('.navbar', {
    color: "rgb(252, 240, 224)"
})
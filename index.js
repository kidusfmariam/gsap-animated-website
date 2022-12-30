//Add Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "play play pause reverse"
})

//Video playback slow-motion
document.querySelector('#myVideo').playbackRate = 0.5;
//ANIMATIONS

//Intro animation
gsap.to('.intro-section', {
    scale: 10,
    ease: "ease",
    opacity: 0,
    'z-index': -999,
    scrollTrigger: {
        trigger: '.wrapper',
        scrub: 0,
        start: "top top",
        end: "150",
        pin: true,
        autoRefreshEvents: "DOMContentLoaded,load"

    }
});

const tl = gsap.timeline()
tl.from('.intro-text', {
    opacity: 0,
    y: "-100%",
    duration: 1.5,
})
//Home-page Animations

gsap.from('.text-md', {
    opacity: 0,
    duration: 1.4,
    stagger: {
        amount: .5,
    },
    scrollTrigger: {
        trigger: '.text-md',
        start: "top center",
        end: "bottom"
    }
})
gsap.from('.img-about', {
    x: 1000,
    duration: 1.4,
    stagger: {
        amount: .5
    },
    scrollTrigger: {
        trigger: '.img-about',
        start: 'top center',
        end: 'bottom'

    }
})

gsap.from('.left', {
    opacity: 0,
    duration: 1.4,
    stagger: .5,
    scroller: '.about-2',
    scrollTrigger: {
        trigger: '.left',
        start: "top center",

    }
})
gsap.from('.right', {
    opacity: 0,
    x: 1000,
    duration: 1.4,
    scroller: '.about-2',
    scrollTrigger: {
        trigger: '.right',
        start: "top center",
        end: "bottom",
    }
})
//Hero-text animation
gsap.from('.hero-section', {
    opacity: 0,
    duration: 1.5,
    delay: .3,
    scrollTrigger: {
        start: 2,
        toggleActions: "play none none none"
    }
})

//Navbar color change on scroll
gsap.to('.navbar', {
    color: "#000",
    'border-bottom': "1px solid rgba(0, 0, 0,.2)",
    scrollTrigger: {
        trigger: '.navbar-change',
        start: "top top",
        scrub: .4,
    }
})


//Menu Toggle
const menuBtn = document.querySelector(".ul-1");
const exitBtn = document.querySelector(".close");
const navItem = document.querySelectorAll(".nav-item")

let t1 = gsap.timeline({ paused: true });
t1.to(".menu", {
    opacity: 1,
    duration: 1,
    transform: "translateY(0%)",
    ease: "power2.easeInOut"
})
t1.from(".nav-item", {
    opacity: 0,
    duration: 1,
    x: -300,
    stagger: 0.3,
    ease: "power2.easeInOut"
}, ">-0.5")

t1.from(".right-menu-item", {
    opacity: 0,
    duration: 1,
    y: -300,
    stagger: 0.3,
    ease: "power2.easeInOut"

})
menuBtn.addEventListener("click", () => {
    t1.play().timeScale(2);
})

exitBtn.addEventListener("click", () => {
    t1.timeScale(2.5)
    t1.reverse()

})
navItem.addEventListener("click", () => {
    t1.timeScale(2)
    t1.reverse()
})





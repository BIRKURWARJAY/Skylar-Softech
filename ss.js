let projects = document.querySelector(".projects");
let img = document.querySelectorAll(".projects img");

function entryAnimation() {
    let tl = gsap.timeline();

    tl.from(".nav_logo, .navbar-nav li, .Qbtn",{
        opacity: 0,
        scale: 0,
        stagger: .1,
        delay: 1
    })
    tl.from(".img-1", {
        scale: 0.4,
        opacity: 0,
        duration: .5
    })
}

entryAnimation();

gsap.to(img, {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: projects,
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2,
    }
})
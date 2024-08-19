let tl = gsap.timeline();

let projects = document.querySelector(".projects");

gsap.to(projects, {
    transform: "translateX(-30%)",
    scrollTrigger: {
        trigger: "#expro",
        scroller: "body",
        start: "top 40%",
        end: "top 100%",
        scrub: 5,
        pin: true
    },
})
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const sctollH = () => {
    gsap.utils.toArray(".page-section").forEach(function (section) => {

    gsap.to(section, 1, {

        ease: "power3.easeInOut",

        ScrollTrigger.create({
            trigger: section,
            //start: "top top", 
            scrub: true,
            pin: true,
            snap: true
        });

    });

});

gsap.utils.toArray(".horizontal-scroll").forEach(function (sub_section) => {

    ease: "none",
    xPercent: -100,

    ScrollTrigger.create({
        trigger: sub_section,
        //start: "top top", 
        scrub: true,
        pin: true,
        snap: true,
        end: () => "+=" + home_services.offsetWidth
    });

});



return (<>
</>)
}



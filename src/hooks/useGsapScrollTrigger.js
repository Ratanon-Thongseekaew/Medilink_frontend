import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollTrigger = () => {
  useEffect(() => {
    // Fade-in จากล่าง
    gsap.utils.toArray(".fade-in-up-one").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Fade-in จากซ้าย (ตัวอย่างเพิ่ม)
    gsap.utils.toArray(".fade-in-left").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    });

    // Fade-in จากซ้ายแบบ stagger ทีละอัน
    gsap.from(".stagger-fade-left .card", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2, // <-- จังหวะ delay ทีละอัน
        ease: "power3.out",
        scrollTrigger: {
        trigger: ".stagger-fade-left",
        start: "top 80%",
        toggleActions: "play none none reverse",
        },
    });

    // Fade-in จากซ้ายแบบ stagger ทีละอัน
    gsap.from(".stagger-fade-left-doctor .card", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2, // <-- จังหวะ delay ทีละอัน
        ease: "power3.out",
        scrollTrigger: {
        trigger: ".stagger-fade-left-doctor",
        start: "top 80%",
        toggleActions: "play none none reverse",
        },
    });

    // Fade-in จากซ้ายแบบ stagger ทีละอัน
    gsap.from(".stagger-fade-left-package .card", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2, // <-- จังหวะ delay ทีละอัน
        ease: "power3.out",
        scrollTrigger: {
        trigger: ".stagger-fade-left-package",
        start: "top 80%",
        toggleActions: "play none none reverse",
        },
    });

    gsap.from(gsap.utils.toArray(".fade-in-up"), {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, // 👈 delay ทีละตัว
        scrollTrigger: {
          trigger: ".fade-in-up-wrapper", // 👈 ใช้ container ครอบไว้
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });    
  
  }, []);
};

export default useGsapScrollTrigger;

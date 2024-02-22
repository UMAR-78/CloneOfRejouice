initLocoScroll();
initCursorMovement();
initCursorMovement2();
animatePage2();
animatePage4();
animatePage6();
loaderAnimation();
footeranimation();
// ----------------------------Locomotive SCROLL---------------------------------------------

function initLocoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

// ----------------------------Cursor Movement---------------------------------------------

function initCursorMovement() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (value1) {
    gsap.to(cursor, {
      x: value1.x,
      y: value1.y,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}

function initCursorMovement2() {
  var page5Content = document.querySelector("#page5");
  var cursor2 = document.querySelector("#TakeOnecursor");
  // black cursor content
  page5Content.addEventListener("mousemove", function (value1) {
    gsap.to(cursor2, {
      x: value1.x,
      y: value1.y,
    });
  });

  page5Content.addEventListener("mouseenter", function () {
    gsap.to(cursor2, {
      scale: 1,
      opacity: 1,
    });
  });

  page5Content.addEventListener("mouseleave", function () {
    gsap.to(cursor2, {
      scale: 0,
      opacity: 0,
    });
  });
}

// ----------------------------Page Animations---------------------------------------------

function animatePage2() {
  gsap.from("#page2-upperContent h3", {
    y: 120,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });

  gsap.from("#page2-bottomContent h1", {
    y: 120,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      scrub: 2,
    },
  });

  gsap.from("#verticalLine", {
    duration: 2,
    delay: 2.5,
    opacity: 0,
    width: 20,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });
}

function animatePage4() {
  gsap.from("#page4-upperContent h3", {
    y: 120,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });

  gsap.from("#page4-bottomContent h1", {
    y: 120,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      scrub: 2,
    },
  });
}

function animatePage6() {
  gsap.from("#page6-upperContent h3", {
    y: 120,
    duration: 1,
    delay: 1.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 47%",
      end: "top 46%",
      scrub: 2,
    },
  });

  gsap.from("#page6-bottomContent h1", {
    y: 120,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      scrub: 2,
    },
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from(".loader h3", {
    x: 120,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.to(".loader h3", {
    x: -40,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
  });
  tl.to(".loader", {
    // opacity: 0,
    display: "none",
  });
  tl.from("#page1-content h1 span", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    delay: -0.5,
    stagger: 0.1,
  });
  tl.to(".loader", {
    // opacity: 0,
    display: "none",
  });
}

function footeranimation() {
  var tl = gsap.timeline();
  tl.to(".page8topdiv ,.page8centerdiv", {
    y: 50,
    duration: 1,
    delay: 1.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 17%",
      end: "top 16%",
      scrub: 2,
    },
  });
  tl.from(".page8bottomdiv h1 span", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    // delay: -0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 17%",
      end: "top 16%",
      scrub: 2,
    },
  });
}

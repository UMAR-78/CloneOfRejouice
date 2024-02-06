initLocoScroll();
initCursorMovement();
animatePage2UpperContent();
animatePage2BottomContent();
animateVerticalLine();

animatePage4UpperContent();
animatePage4BottomContent();
animateVerticalLineforPage4();
animatePage3Content();

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

// ----------------------------Curson Movement---------------------------------------------

function initCursorMovement() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");
  
  var page5Content = document.querySelector("#page5");
  var cursor2 = document.querySelector("#TakeOnecursor");
  
  page1Content.addEventListener("mousemove", function (value1) {
    gsap.to(cursor, {
      x: value1.x,
      y: value1.y,
    });
  });

  page1Content.addEventListener("mouseenter", function (value) {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Content.addEventListener("mouseleave", function (value) {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

// black curson content
  page5Content.addEventListener("mousemove", function (value1) {
    gsap.to(cursor2,{
      x:value1.x,
      y:value1.y
    })
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

// ----------------------------Page 2 Animtaion---------------------------------------------

function animatePage2UpperContent() {
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
      //   markers: true,
      scrub: 2,
    },
  });
}

function animatePage2BottomContent() {
  gsap.from("#page2-bottomContent h1", {
    y: 120,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      //   markers: true,
      scrub: 2,
    },
  });
}

function animateVerticalLine() {
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
      //   markers: true,
      scrub: 2,
    },
  });
}

// Page 4 animations
// ----------------------------Page 2 Animtaion---------------------------------------------

function animatePage4UpperContent() {
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
      //   markers: true,
      scrub: 2,
    },
  });
}

function animatePage4BottomContent() {
  gsap.from("#page4-bottomContent h1", {
    y: 120,
    duration: 2,
    delay: 2.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      //   markers: true,
      scrub: 2,
    },
  });
}

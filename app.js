function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "aye"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "aye"
    )
    .to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.1,
        scale: 1,
        ease: Power4,
      },
      "bye"
    )
    .to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.1,
        scale: 1,
        ease: Power4,
      },
      "bye"
    );
}

function horizontalScroll() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -205,
    ease: Power4,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        scale: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        scale: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function scrolltextAnimation() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function loco() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsuleAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 80%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

function pageThemeTransition() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

loco();
homepageAnimation();
horizontalScroll();
teamAnimation();
scrolltextAnimation();
capsuleAnimation();
pageThemeTransition();

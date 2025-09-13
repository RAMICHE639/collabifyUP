function callParallax(e, $buttonMagnetic) {
  parallaxIt(e, $buttonMagnetic.find(".button"), 60);
  parallaxIt(e, $buttonMagnetic.find(".button .text"), 80);
}
function parallaxIt(e, target, movement) {
  var $this = jQuery(target).parent();
  var boundingRect = $this[0].getBoundingClientRect();
  var relX = e.pageX - boundingRect.left;
  var relY = e.pageY - boundingRect.top;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  gsap.to(target, 0.3, {
    x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
    y:
      ((relY - boundingRect.height / 2 - scrollTop) / boundingRect.width) *
      movement,
    ease: Power2.easeOut,
  });
}
jQuery(".button-magnetic").mouseenter(function (e) {
  var $this = jQuery(this);
  if ($this.hasClass("btn-black")) {
    gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
    gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
    gsap.to($this.find(".button .text"), 0.3, { color: "#000" });
    gsap.to($this.find(".button"), 0.3, { background: "rgba(255,255,255,0)" });
  } else if ($this.hasClass("btn-purple")) {
    gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
    gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
    gsap.to($this.find(".button .text"), 0.3, { color: "#040404" });
    gsap.to($this.find(".button"), 0.3, { background: "rgba(255,255,255,0)" });
  } else if ($this.hasClass("img-anim")) {
    gsap.to(this, 0.3, { transformOrigin: "0 0", scale: 1 });
    gsap.to($this.find(".button"), 0.3, { scale: 1.1 });
    gsap.to($this.find(".button .text"), 0.3, { color: "#040404" });
    gsap.to($this.find(".button"), 0.3, { background: "rgba(255,255,255,0)" });
  }
});
jQuery(".button-magnetic").mouseleave(function (e) {
  var $this = jQuery(this);
  if ($this.hasClass("btn-black")) {
    gsap.to(this, 0.3, { scale: 1 });
    gsap.to($this.find(".button, .button .text"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
    });
    gsap.to($this.find(".button .text"), 0.3, { color: "#fff" });
    gsap.to($this.find(".button"), 0.3, { background: "#000" });
  } else if ($this.hasClass("btn-purple")) {
    gsap.to(this, 0.3, { scale: 1 });
    gsap.to($this.find(".button, .button .text"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
    });
    gsap.to($this.find(".button .text"), 0.3, { color: "#fff" });
    gsap.to($this.find(".button"), 0.3, { background: "#6E5AFD" });
  } else if ($this.hasClass("img-anim")) {
    gsap.to(this, 0.3, { scale: 1 });
    gsap.to($this.find(".button, .button .text"), 0.3, {
      scale: 1,
      x: 0,
      y: 0,
    });
    gsap.to($this.find(".button .text"), 0.3, { color: "#fff" });
    gsap.to($this.find(".button"), 0.3, { background: "#6E5AFD" });
  }
});
jQuery(".button-magnetic").mousemove(function (e) {
  callParallax(e, jQuery(this));
});

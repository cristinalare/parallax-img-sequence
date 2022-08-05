gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("hero");
const context = canvas.getContext("2d");
const section = document.querySelector(".img-sequence-container");
const frameCount = 12;
const currentFrame = index => `./images/${index.toString().padStart(2, '0')}.svg`;
canvas.width = 733.4;
canvas.height = 485;
const images = [];
const unis = {
  frame: 0
};

for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(unis, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    // duration: 1,
    scrollTrigger: {
      trigger: section,
      pin: true,
      scrub: 0.5,
      end: "+=200%"
    },
    onUpdate: render
  });

images[0].onload = render;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[unis.frame], 0, 0); 
}
<script>
// Typing Effect for Header
const typingEffect = document.getElementById("typing-effect");
const text = "Software Developer";
let i = 0;

function typeText() {
  if (i < text.length) {
    typingEffect.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}

// Start typing effect
typeText();

// Carousel Scroll
const slideLeft = document.getElementById("slide-left");
const slideRight = document.getElementById("slide-right");
const carousel = document.getElementById("carousel");

slideLeft.addEventListener("click", () => {
  carousel.scrollLeft -= 120;
});

slideRight.addEventListener("click", () => {
  carousel.scrollLeft += 120;
});

// Pause carousel animation on hover (if using CSS animation)
const track = document.querySelector('.carousel-track');
if (track) {
  track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

// Particle Background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.size = Math.random() * 5 + 1;
  this.speedX = Math.random() * 2 - 1;
  this.speedY = Math.random() * 2 - 1;
  this.color = "rgba(255, 255, 255, 0.5)";
}

Particle.prototype.update = function () {
  this.x += this.speedX;
  this.y += this.speedY;
  if (this.size > 0.2) this.size -= 0.1;
};

Particle.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
};

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animateParticles);
}

canvas.addEventListener("mousemove", (event) => {
  for (let i = 0; i < 5; i++) {
    particles.push(new Particle(event.x, event.y));
  }
});

animateParticles();

// Resize Canvas on Window Resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>

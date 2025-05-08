<script>
// Typing Effect
const typingElement = document.getElementById("typing-effect");
const text = "A Web Developer";
let index = 0;
function type() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form handler (Optional: Add `id="contactForm"` to your form in HTML)
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

    if (!name || !email || !msg) {
        alert('Please fill out all fields.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message: msg })
    })
    .then(res => res.json())
    .then(() => {
        alert('Message sent successfully!');
        form.reset();
    })
    .catch(() => {
        alert('Failed to send message. Try again.');
    });
});

// Particle Background Canvas Animation
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const mouse = { x: null, y: null, radius: 100 };

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;

    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    this.update = function() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) this.directionX = -this.directionX;
        if (this.y + this.size > canvas.height || this.y - this.size < 0) this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    };
}
canvas.style.width = '100%';
canvas.style.height = '100%';


function connectParticles() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
                let opacity = 1 - distance / 120;
                ctx.strokeStyle = `rgba(255,105,180,${opacity})`; // Pink lines
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.width * canvas.height) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (canvas.width - size * 2) + size;
        let y = Math.random() * (canvas.height - size * 2) + size;
        let directionX = (Math.random() - 0.5) * 2;
        let directionY = (Math.random() - 0.5) * 2;
        let color = 'rgba(255,20,147,1)'; // DeepPink
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => p.update());
    connectParticles();
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
</script>


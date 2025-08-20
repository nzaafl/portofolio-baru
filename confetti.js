// Confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
const colors = ['#ff9f9f','#ffd6d6','#ffe9c8','#c94f4f','#fff'];

function ConfettiPiece() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height - canvas.height;
  this.size = Math.random() * 6 + 4;
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.speed = Math.random() * 3 + 2;
  this.opacity = Math.random();

  this.update = function() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
  };

  this.draw = function() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };
}

for (let i = 0; i < 150; i++) {
  confetti.push(new ConfettiPiece());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
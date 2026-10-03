/**
 * Interactive Neural Constellation Background Canvas
 * High performance, zero dependency, mouse interactive & parallax aware
 */
(function () {
  const canvas = document.getElementById('neural-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Particle configuration
  const particleCount = width < 768 ? 36 : 72;
  const maxDistance = width < 768 ? 110 : 160;
  const mouseRadius = 180;

  const particles = [];
  const mouse = { x: -1000, y: -1000, active: false };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * (isReducedMotion ? 0.2 : 0.6);
      this.vy = (Math.random() - 0.5) * (isReducedMotion ? 0.2 : 0.6);
      this.radius = Math.random() * 1.8 + 1.2;
      // Palette: cyan, sky, violet, emerald
      const colors = [
        'rgba(56, 189, 248, ',  // sky
        'rgba(0, 242, 254, ',   // cyan
        'rgba(168, 85, 247, ',  // purple
        'rgba(16, 185, 129, '   // emerald
      ];
      this.baseColor = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce on borders
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction (subtle repel or attraction)
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          const force = (1 - dist / mouseRadius) * 0.8;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor + this.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.baseColor + '0.8)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Event Listeners
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      // Connect with nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const opacity = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Connect with mouse cursor
      if (mouse.active) {
        const dx = particles[i].x - mouse.x;
        const dy = particles[i].y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          const opacity = (1 - dist / mouseRadius) * 0.35;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
})();

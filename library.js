// Hamburger menu
const ham = document.getElementById('hamburger');
const navEl = document.getElementById('navLinks');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  navEl.classList.toggle('open');
});
navEl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  ham.classList.remove('open');
  navEl.classList.remove('open');
}));

// Typing animation
const roles = ['Software Engineer', 'Tech Lead', 'Problem Solver', 'Team Player'];
let ri = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const current = roles[ri];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++ci);
    if (ci === current.length) { deleting = true; return setTimeout(type, 1800); }
  } else {
    typedEl.textContent = current.slice(0, --ci);
    if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in, .timeline-item').forEach(el => observer.observe(el));

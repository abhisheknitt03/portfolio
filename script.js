// =========================================================
// Theme toggle (persisted in localStorage)
// =========================================================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else if (prefersLight) {
  root.setAttribute('data-theme', 'light');
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  if (next === 'dark') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', 'light');
  }
  localStorage.setItem('theme', next);
});

// =========================================================
// Mobile nav toggle
// =========================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

document.querySelectorAll('[data-nav]').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// =========================================================
// Header scroll state + scroll progress bar
// =========================================================
const siteHeader = document.getElementById('siteHeader');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

  scrollProgress.style.width = `${progress}%`;
  siteHeader.classList.toggle('scrolled', scrollTop > 10);
  backToTop.classList.toggle('visible', scrollTop > 500);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// =========================================================
// Active nav link on scroll (IntersectionObserver)
// =========================================================
const sections = document.querySelectorAll('main section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
);
sections.forEach((section) => navObserver.observe(section));

// =========================================================
// Reveal-on-scroll animations
// =========================================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
  revealObserver.observe(el);
});

// =========================================================
// Typing effect for hero role
// =========================================================
const roles = [
  'Software Engineer',
  'Go & Java Backend Developer',
  'Distributed Systems Enthusiast',
  'Microservices Architect',
  'Cloud-Native Problem Solver',
];
const typedEl = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 35 : 70;
  setTimeout(typeLoop, speed);
}
typeLoop();

// =========================================================
// Animated stat counters
// =========================================================
const statEls = document.querySelectorAll('.stat-num');
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1400;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      statObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
statEls.forEach((el) => statObserver.observe(el));

// =========================================================
// Cursor glow (desktop only)
// =========================================================
const cursorGlow = document.getElementById('cursorGlow');
if (window.matchMedia('(min-width: 900px)').matches) {
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  });
}

// =========================================================
// Footer year
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

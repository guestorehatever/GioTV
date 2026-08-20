document.addEventListener('contextmenu', (event) => {
  if (event.target.tagName === 'IMG') event.preventDefault();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const memorialBtn = document.getElementById('memorialToggleBtn');
const memorialPanel = document.getElementById('memorialPanel');
if (memorialBtn && memorialPanel) {
  memorialBtn.addEventListener('click', () => {
    const isOpen = memorialPanel.classList.toggle('open');
    memorialBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    const toggle = document.getElementById('nav-toggle');
    if (toggle) toggle.checked = false;
  });
});

// ── Hamburger (unchanged behaviour)
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const overlay   = document.getElementById('mobileOverlay');
function openMenu()  { hamburger.classList.add('open'); navLinks.classList.add('open'); overlay.classList.add('active'); hamburger.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden'; }
function closeMenu() { hamburger.classList.remove('open'); navLinks.classList.remove('open'); overlay.classList.remove('active'); hamburger.setAttribute('aria-expanded','false'); document.body.style.overflow=''; }
hamburger.addEventListener('click', () => hamburger.classList.contains('open') ? closeMenu() : openMenu());
overlay.addEventListener('click', closeMenu);
document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());
window.addEventListener('resize', () => { if (window.innerWidth > 960) closeMenu(); });

// ── Scroll reveal
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e,i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i*70); ro.unobserve(e.target); } });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── Skill bars
const bo = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { const b = e.target.querySelector('.skill-bar'); if (b) setTimeout(() => b.style.width = b.dataset.width + '%', 180); bo.unobserve(e.target); } });
}, { threshold: .25 });
document.querySelectorAll('.skill-card').forEach(c => bo.observe(c));
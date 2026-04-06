// Shared nav + footer — edit here to update every page

const TOPBAR = `
<div class="topbar">
  <div class="topbar-left">
    <a href="https://facebook.com/aldercreekfarm1" target="_blank" rel="noopener" aria-label="Facebook">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <a href="https://instagram.com/aldercreeksheep" target="_blank" rel="noopener" aria-label="Instagram">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    </a>
  </div>
  <p class="topbar-tagline">Quality Ontario Lamb. Raised in the heart of the Ottawa Valley.</p>
  <div class="topbar-right">
    <a href="mailto:info@aldercreek.ca">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      info@aldercreek.ca
    </a>
    <a href="tel:6137173795">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.95-.95a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 17z"/></svg>
      613 717 3795
    </a>
  </div>
</div>`;

const NAV = `
<header class="site-header" id="site-header">
  <nav class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <span class="logo-text">
        <span class="logo-top">Alder Creek</span>
        <span class="logo-bottom"><span class="logo-small">Est</span> Farm <span class="logo-small">1920</span></span>
      </span>
    </a>
    <button class="nav-toggle" aria-label="Open menu" id="nav-toggle">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="nav-links">
      <li><a href="/about.html">About the Farm</a></li>
      <li><a href="/recipes.html">Recipes</a></li>
      <li><a href="/pricing.html">Pricing</a></li>
      <li><a href="/contact.html" class="nav-cta">Contact</a></li>
    </ul>
  </nav>
</header>`;

const FOOTER = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <p class="footer-logo-text">
          <span class="logo-top">Alder Creek</span>
          <span class="logo-bottom"><span class="logo-small">Est</span> Farm <span class="logo-small">1920</span></span>
        </p>
        <p class="footer-tagline">Quality Ontario Lamb.<br>Raised in the heart of the Ottawa Valley.</p>
      </div>
      <div class="footer-nav">
        <h4>Navigate</h4>
        <ul>
          <li><a href="/about.html">About the Farm</a></li>
          <li><a href="/recipes.html">Recipes</a></li>
          <li><a href="/pricing.html">Pricing</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <p><a href="tel:6137173795">613-717-3795</a></p>
        <p><a href="mailto:info@aldercreek.ca">info@aldercreek.ca</a></p>
        <p>Golden Lake, Ontario</p>
        <div class="footer-social">
          <a href="https://facebook.com/aldercreekfarm1" target="_blank" rel="noopener">Facebook</a>
          <a href="https://instagram.com/aldercreeksheep" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Alder Creek Farm. All rights reserved.</p>
    </div>
  </div>
</footer>`;

// Inject components
document.getElementById('topbar-mount').innerHTML = TOPBAR;
document.getElementById('header-mount').innerHTML = NAV;
document.getElementById('footer-mount').innerHTML = FOOTER;

// Mark active nav link
const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === path || (path === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Sticky nav scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// Mobile nav toggle
document.getElementById('nav-toggle').addEventListener('click', () => {
  const links = document.getElementById('nav-links');
  const toggle = document.getElementById('nav-toggle');
  const isOpen = links.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('open');
    document.getElementById('nav-toggle').classList.remove('open');
  });
});

// Alder Creek Farm — main.js
// Nav/footer injection and scroll behaviour is in components.js

// Scroll-reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.practice-card, .animal-card, .pricing-col, .recipe-card, .cut-card'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form feedback
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#444';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// Duplicate banner strip for seamless marquee (home page only)
const bannerInner = document.querySelector('.banner-inner');
if (bannerInner) bannerInner.innerHTML += bannerInner.innerHTML;

// Tap-to-check ingredients
document.querySelectorAll('.ingredients-list li:not(.ingredients-divider)').forEach(li => {
  li.addEventListener('click', () => li.classList.toggle('checked'));
});

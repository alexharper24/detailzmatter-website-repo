/* Detailz Matter, LLC — shared behavior */

/* Mobile nav drawer */
(function () {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (!toggle || !links) return;
  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  links.parentElement.appendChild(overlay); /* true sibling of the drawer */
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.classList.toggle('active', open);
    overlay.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  overlay.addEventListener('click', () => setMenu(false));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
})();

/* Scroll reveal — fails open */
(function () {
  const revs = Array.from(document.querySelectorAll('.reveal'));
  if (!revs.length) return;
  const showAll = () => revs.forEach(el => el.classList.add('in'));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    showAll(); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  revs.forEach(el => io.observe(el));
  requestAnimationFrame(() => {
    revs.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in');
    });
  });
  setTimeout(showAll, 2500);
})();

/* Gallery filters */
(function () {
  const btns = document.querySelectorAll('.filters button');
  const items = document.querySelectorAll('.g-item');
  if (!btns.length) return;
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => {
      it.style.display = (f === 'all' || it.dataset.cat === f) ? '' : 'none';
    });
  }));
})();

/* Lightbox — shared across gallery + zoomable page images */
(function () {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('img');
  const close = lb.querySelector('.lb-close');
  const open = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  const shut = () => {
    lb.classList.remove('open');
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
  };
  document.querySelectorAll('.g-item, [data-zoom]').forEach(el => {
    const img = el.matches('img') ? el : el.querySelector('img');
    if (!img) return;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.style.cursor = 'zoom-in';
    const go = () => open(img.currentSrc || img.src, img.alt);
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
  });
  close.addEventListener('click', shut);
  lb.addEventListener('click', e => { if (e.target === lb) shut(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') shut(); });
})();

/* Quote form — AJAX submit, on-page thank-you, un-configured guard */
(function () {
  const form = document.getElementById('quoteForm');
  const thanks = document.getElementById('formThanks');
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  const showError = (t) => {
    const prev = form.querySelector('.form-error'); if (prev) prev.remove();
    const d = document.createElement('div');
    d.className = 'form-error';
    d.textContent = t;
    form.querySelector('.submit-row').after(d);
  };
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const prev = form.querySelector('.form-error'); if (prev) prev.remove();
    if (form.action.includes('YOUR_FORM_ID')) {
      return showError("This form isn't connected yet. Please call or text (812) 621-6478 instead.");
    }
    const original = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, {
        method: 'POST', body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        form.hidden = true;
        thanks.hidden = false;
        thanks.scrollIntoView({ behavior: 'smooth', block: 'center' });
        form.reset();
      } else {
        const d = await res.json().catch(() => ({}));
        showError(((d.errors && d.errors.map(x => x.message).join(', ')) || 'Something went wrong.') +
          ' Please try again, or call or text (812) 621-6478.');
      }
    } catch {
      showError("Couldn't reach the server. Check your connection and try again, or call or text (812) 621-6478.");
    } finally {
      btn.disabled = false; btn.textContent = original;
    }
  });
})();

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

/* Gallery filters — filters whole job cards, and loose .g-item tiles if present */
(function () {
  const btns = document.querySelectorAll('.filters button');
  if (!btns.length) return;
  const items = document.querySelectorAll('.jobcard[data-cat], .g-item[data-cat]');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    items.forEach(it => {
      const cats = (it.dataset.cat || '').split(/\s+/);
      it.style.display = (f === 'all' || cats.includes(f)) ? '' : 'none';
    });
  }));
})();

/* Flip cards — before on the front, after on the back */
(function () {
  document.querySelectorAll('.flip').forEach(card => {
    const toggle = () => {
      const flipped = card.classList.toggle('flipped');
      card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
      const hint = card.querySelector('.flip-hint span');
      if (hint) hint.textContent = flipped ? 'Tap for before' : 'Tap for after';
    };
    card.setAttribute('aria-pressed', 'false');
    card.addEventListener('click', toggle);
  });
})();

/* Lightbox — shared across gallery, before/after pairs, and zoomable page images.
   Steps through the currently visible set (respects active gallery filter). */
(function () {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const lbImg = lb.querySelector('img');
  const close = lb.querySelector('.lb-close');
  const prev = lb.querySelector('.lb-prev');
  const next = lb.querySelector('.lb-next');
  const cap = lb.querySelector('.lb-cap');
  const triggers = Array.from(document.querySelectorAll(
    '.g-item, .ba-pair figure, .jc-lead, .jc-thumb:not(.more), [data-zoom]'));
  let list = [], idx = -1;

  const imgOf = el => (el.matches('img') ? el : el.querySelector('img'));
  const isVisible = el => el.offsetParent !== null;

  const render = () => {
    const el = list[idx];
    const img = imgOf(el);
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    if (cap) {
      const fc = el.querySelector('figcaption')
        || el.closest('.ba-pair')?.querySelector('.cap')
        || el.closest('.jobcard')?.querySelector('.jc-head h3');
      const tag = el.querySelector('.tag');
      const label = [tag && tag.textContent, fc && fc.textContent.trim()].filter(Boolean).join(': ');
      cap.textContent = list.length > 1 ? `${label ? label + ' · ' : ''}${idx + 1} of ${list.length}` : label;
      cap.hidden = !cap.textContent;
    }
    const many = list.length > 1;
    if (prev) prev.hidden = !many;
    if (next) next.hidden = !many;
  };
  const open = (el) => {
    // Inside a job card, the set is that job's photos, so the arrows walk one
    // vehicle's visit. Elsewhere it is every visible trigger on the page.
    const card = el.closest('.jobcard');
    list = card
      ? Array.from(card.querySelectorAll('.jc-lead, .jc-thumb:not(.more)')).filter(isVisible)
      : triggers.filter(isVisible);
    idx = list.indexOf(el);
    if (idx < 0) { list = [el]; idx = 0; }
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
    render();
  };
  const shut = () => {
    lb.classList.remove('open');
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
  };
  const step = (d) => { idx = (idx + d + list.length) % list.length; render(); };

  triggers.forEach(el => {
    const img = imgOf(el);
    if (!img) return;
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    el.style.cursor = 'zoom-in';
    el.addEventListener('click', () => open(el));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el); }
    });
  });
  close.addEventListener('click', shut);
  if (prev) prev.addEventListener('click', () => step(-1));
  if (next) next.addEventListener('click', () => step(1));
  lb.addEventListener('click', e => { if (e.target === lb) shut(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') shut();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
  });
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

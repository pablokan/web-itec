// iTec Río Cuarto — interacciones: menú móvil, nav activa, reveals
document.addEventListener('DOMContentLoaded', () => {
  // --- Menú móvil ---
  const btn = document.querySelector('[data-menu-btn]');
  const menu = document.querySelector('[data-mobile-menu]');
  const iconOpen = btn?.querySelector('[data-icon-open]');
  const iconClose = btn?.querySelector('[data-icon-close]');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
      iconOpen?.classList.toggle('hidden', !open);
      iconClose?.classList.toggle('hidden', open);
      document.body.classList.toggle('overflow-hidden', !open);
    });
    // Submenús en móvil: tap para expandir
    menu.querySelectorAll('[data-submenu-btn]').forEach((b) => {
      b.addEventListener('click', () => {
        const sub = b.nextElementSibling;
        sub?.classList.toggle('hidden');
        b.querySelector('svg')?.classList.toggle('rotate-180');
      });
    });
  }

  // --- Nav activa según URL ---
  const path = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
  document.querySelectorAll('a[data-nav-link]').forEach((a) => {
    const href = (a.getAttribute('href') || '').replace(/\/index\.html$/, '/').replace(/\/$/, '');
    try {
      const target = new URL(href, location.origin).pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '');
      if (target === path && path !== '') {
        a.classList.add('text-paper-50');
        a.setAttribute('aria-current', 'page');
        a.closest('[data-nav-group]')?.querySelector('[data-nav-parent]')?.classList.add('text-paper-50');
      }
    } catch (_) {}
  });

  // --- Reveals (jerarquía: secciones entran al hacer scroll) ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
});

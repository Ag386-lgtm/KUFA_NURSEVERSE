/* ═══════════════════════════════════════════════════════════
   ⚙️ السكربت العام — يعمل في كل الصفحات
   (يجب تحميله بعد config.js)
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1) الشعارات من config ── */
  const logoCollege    = document.getElementById('logoCollege');
  const logoUniversity = document.getElementById('logoUniversity');
  if (logoCollege)    logoCollege.src    = CONFIG.site.logoCollege;
  if (logoUniversity) logoUniversity.src = CONFIG.site.logoUniversity;
  const brandSub = document.getElementById('brandSub');
  if (brandSub) brandSub.textContent = CONFIG.site.subtitle;

  /* ── 2) المظهر الليلي/النهاري ── */
  const root = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('knv-theme', theme);
    if (themeBtn) {
      themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.title = theme === 'dark' ? 'المظهر النهاري' : 'المظهر الليلي';
    }
  }
  const savedTheme = localStorage.getItem('knv-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);
  themeBtn?.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ── 3) القائمة الجانبية ── */
  const menu       = document.getElementById('sideMenu');
  const overlay    = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu  = document.getElementById('closeMenu');

  const openMenu  = () => { menu?.classList.add('open');  overlay?.classList.add('show'); };
  const closeMenuFn = () => { menu?.classList.remove('open'); overlay?.classList.remove('show'); };

  menuToggle?.addEventListener('click', openMenu);
  closeMenu?.addEventListener('click', closeMenuFn);
  overlay?.addEventListener('click', closeMenuFn);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenuFn(); });

})();

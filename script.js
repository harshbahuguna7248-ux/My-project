(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };

  // ---- Static text ----
  $('heroTitle').textContent = SITE.title.toUpperCase();
  $('heroHeadline').textContent = SITE.headline;
  $('heroIntro').textContent = SITE.intro;
  $('aboutText').innerHTML = SITE.about.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('');
  $('skillsBox').innerHTML = SITE.skills.map(function (g) {
    return '<div class="group"><h3>' + esc(g.group) + '</h3><ul class="chips">' + g.items.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul></div>';
  }).join('');
  $('expBox').innerHTML = SITE.experience.map(function (e) {
    return '<article class="item"><h3>' + esc(e.role) + '</h3><div>' + esc(e.org) + '</div><div class="when">' + esc(e.period) + '</div><p>' + esc(e.summary) + '</p>' +
      (e.points.length ? '<ul>' + e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') + '</article>';
  }).join('');
  $('eduBox').innerHTML = SITE.education.map(function (e) {
    return '<article class="item"><h3>' + esc(e.degree) + '</h3><div>' + esc(e.org) + '</div><div class="when">' + esc(e.period) + '</div>' + (e.status ? '<p>' + esc(e.status) + '</p>' : '') + '</article>';
  }).join('');
  var mail = $('mailLink'); mail.href = 'mailto:' + SITE.email; mail.textContent = SITE.email;
  $('loc').textContent = '📍 ' + SITE.location;
  $('socials').innerHTML = Object.keys(SITE.links).map(function (k) {
    var u = SITE.links[k];
    return u ? '<li><a href="' + esc(u) + '" target="_blank" rel="noopener noreferrer">' + esc(k) + ' ↗</a></li>' : '<li class="dashed">' + esc(k) + ': not added yet</li>';
  }).join('');
  $('fName').textContent = SITE.name; $('fName2').textContent = SITE.name; $('fTitle').textContent = SITE.title;
  $('year').textContent = new Date().getFullYear();

  // ---- Mobile menu ----
  var menuBtn = $('menuBtn'), navList = $('navList');
  menuBtn.addEventListener('click', function () {
    var open = navList.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open); menuBtn.textContent = open ? '✕' : '☰';
  });
  navList.addEventListener('click', function (e) { if (e.target.tagName === 'A') { navList.classList.remove('open'); menuBtn.textContent = '☰'; menuBtn.setAttribute('aria-expanded', 'false'); } });

  // ---- Hero image ----
  var feat = PROJECTS.filter(function (p) { return p.featured; })[0] || PROJECTS[0];
  if (feat) {
    $('heroFig').innerHTML = '<img src="' + esc(feat.thumbnail) + '" alt="' + esc(feat.title) + '">' + (feat.placeholder ? '<figcaption class="badge">Placeholder image, not my work</figcaption>' : '');
  } else { $('heroFig').hidden = true; }

  // ---- Projects grid + filters ----
  var filter = 'All';
  var cats = CATEGORY_ORDER.filter(function (c) { return PROJECTS.some(function (p) { return p.category === c; }); });
  function renderFilters() {
    $('filters').innerHTML = ['All'].concat(cats).map(function (c) {
      return '<button type="button" data-cat="' + esc(c) + '" aria-pressed="' + (c === filter) + '">' + esc(c) + '</button>';
    }).join('');
  }
  function renderGrid() {
    var list = PROJECTS.filter(function (p) { return filter === 'All' || p.category === filter; });
    $('empty').hidden = PROJECTS.length > 0; $('filters').hidden = PROJECTS.length === 0;
    $('grid').innerHTML = list.map(function (p) {
      return '<li><button type="button" class="card" data-slug="' + esc(p.slug) + '" aria-haspopup="dialog"><div class="thumb"><img src="' + esc(p.thumbnail) + '" alt="' + esc(p.title) + ' thumbnail" loading="lazy">' +
        (p.placeholder ? '<span class="badge">Placeholder</span>' : '') + (p.videos && p.videos.length ? '<span class="badge right">▶ Video</span>' : '') + '</div><h3>' + esc(p.title) + '</h3><p>' + esc(p.category) + ' · ' + esc(p.software.join(', ')) + '</p></button></li>';
    }).join('');
  }
  $('filters').addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; filter = b.getAttribute('data-cat'); renderFilters(); renderGrid(); });
  $('grid').addEventListener('click', function (e) { var b = e.target.closest('.card'); if (b) openModal(b.getAttribute('data-slug'), b); });
  renderFilters(); renderGrid();

  // ---- Modal ----
  var modal = $('modal'), dialog = $('dialog'), cur = null, idx = 0, opener = null;
  function openModal(slug, from) {
    cur = PROJECTS.filter(function (p) { return p.slug === slug; })[0]; if (!cur) return;
    idx = 0; opener = from; renderModal(); modal.hidden = false; document.body.style.overflow = 'hidden';
    var c = dialog.querySelector('.close'); if (c) c.focus();
  }
  function closeModal() { modal.hidden = true; dialog.innerHTML = ''; document.body.style.overflow = ''; if (opener) opener.focus(); }
  function renderModal() {
    var p = cur, n = p.gallery.length;
    var meta = [['Category', p.category], ['Type', p.type], ['My role', p.role], ['Software', p.software.join(', ')], ['Duration', p.duration]]
      .filter(function (m) { return m[1]; }).map(function (m) { return '<div><dt>' + m[0] + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('');
    dialog.innerHTML =
      '<div class="dhead"><h3 id="mTitle">' + esc(p.title) + '</h3><button type="button" class="close" aria-label="Close project">✕</button></div>' +
      (p.placeholder ? '<p class="note">Demo placeholder: this is not real work.</p>' : '') +
      '<div class="stage"><img src="' + esc(p.gallery[idx]) + '" alt="' + esc(p.title) + ', image ' + (idx + 1) + ' of ' + n + '">' +
      (n > 1 ? '<button type="button" class="nav-arrow prev" aria-label="Previous image">‹</button><button type="button" class="nav-arrow next" aria-label="Next image">›</button>' : '') + '</div>' +
      (n > 1 ? '<div class="thumbs">' + p.gallery.map(function (g, k) { return '<button type="button" data-i="' + k + '" aria-label="Show image ' + (k + 1) + '" aria-current="' + (k === idx) + '"><img src="' + esc(g) + '" alt="" loading="lazy"></button>'; }).join('') + '</div>' : '') +
      '<p class="desc">' + esc(p.description) + '</p><dl class="meta">' + meta + '</dl>' + videosHtml(p) +
      (p.breakdown && p.breakdown.length ? '<h4>Breakdown</h4><div class="bd">' + p.breakdown.map(function (b) {
        return '<figure style="margin:0"><img src="' + esc(b.image) + '" alt="' + esc(p.title + ' ' + b.label) + '" loading="lazy"><figcaption><strong>' + esc(b.label) + '</strong>' + (b.note ? ': ' + esc(b.note) : '') + '</figcaption></figure>';
      }).join('') + '</div>' : '');
  }
  function embedUrl(u) {
    var m = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/);
    if (m) return 'https://www.youtube.com/embed/' + m[1];
    m = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (m) return 'https://player.vimeo.com/video/' + m[1];
    return u;
  }
  function videosHtml(p) {
    if (!p.videos || !p.videos.length) return '';
    return '<h4>Videos</h4><div class="vids">' + p.videos.map(function (v) {
      var t = esc(v.title || 'Project video');
      var media = v.embed
        ? '<iframe src="' + esc(embedUrl(v.embed)) + '" title="' + t + '" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>'
        : '<video controls preload="metadata"' + (v.poster ? ' poster="' + esc(v.poster) + '"' : '') + ' src="' + esc(v.src) + '"></video>';
      return '<figure style="margin:0">' + media + '<figcaption>' + t + '</figcaption></figure>';
    }).join('') + '</div>';
  }
  function go(d) { var n = cur.gallery.length; idx = (idx + d + n) % n; renderModal(); }
  dialog.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest('.close')) return closeModal();
    if (t.closest('.prev')) return go(-1);
    if (t.closest('.next')) return go(1);
    var th = t.closest('[data-i]'); if (th) { idx = +th.getAttribute('data-i'); renderModal(); }
  });
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    else if (cur.gallery.length > 1 && e.key === 'ArrowLeft') go(-1);
    else if (cur.gallery.length > 1 && e.key === 'ArrowRight') go(1);
  });
})();

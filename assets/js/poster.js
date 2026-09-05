// Hero org-type shuffle. Words are rendered into #hero-shuffle-box as
// data-org-types by the template; JS only animates between them.
(function () {
  var box = document.getElementById('hero-shuffle-box');
  if (!box) return;

  var words;
  try {
    words = JSON.parse(box.getAttribute('data-org-types') || '[]');
  } catch (e) {
    return;
  }
  if (!words.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var idx = 0;
  var current = null;

  function measureWidth(text) {
    var probe = document.createElement('span');
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;';
    probe.className = 'hero-shuffle-word is-active';
    probe.textContent = text;
    box.appendChild(probe);
    var w = probe.getBoundingClientRect().width;
    probe.remove();
    return w;
  }

  function show(i) {
    var span = document.createElement('span');
    span.className = 'hero-shuffle-word';
    span.textContent = words[i];
    box.appendChild(span);
    box.style.width = measureWidth(words[i]) + 'px';
    requestAnimationFrame(function () {
      span.classList.add('is-active');
    });
    return span;
  }

  // Clear the no-JS fallback text before taking over.
  box.textContent = '';
  current = show(idx);

  if (reduceMotion) return;

  setInterval(function () {
    var leaving = current;
    leaving.classList.remove('is-active');
    leaving.classList.add('is-leaving');
    setTimeout(function () {
      leaving.remove();
    }, 400);

    idx = (idx + 1) % words.length;
    current = show(idx);
  }, 2000);

  window.addEventListener('resize', function () {
    if (current) box.style.width = measureWidth(words[idx]) + 'px';
  });
})();

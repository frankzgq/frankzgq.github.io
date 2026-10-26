// Shared by every page: copy-email button, abstract toggles. The site is light-only.
(function () {
  var copy = document.getElementById('copyBtn');
  var email = document.getElementById('email');
  if (copy && email) copy.addEventListener('click', function () {
    var done = function () { copy.textContent = 'Copied'; setTimeout(function () { copy.textContent = 'Copy'; }, 1600); };
    var select = function () { var r = document.createRange(); r.selectNodeContents(email); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(email.textContent).then(done, select);
    else select();
  });

  document.querySelectorAll('button[aria-controls]').forEach(function (b) {
    b.addEventListener('click', function () {
      var panel = document.getElementById(b.getAttribute('aria-controls'));
      var open = b.getAttribute('aria-expanded') === 'true';
      b.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });
  try {
    if (new URLSearchParams(location.search).get('open') === '1') {
      var first = document.querySelector('button[aria-controls]');
      if (first) first.click();
    }
  } catch (e) {}
})();

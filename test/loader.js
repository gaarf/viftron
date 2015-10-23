(function() {
  window.__karma__.loaded = function() {
    window.addEventListener('WebComponentsReady', function() {
      window.__karma__.start();
    });
  };

  var l = document.createElement('link');
  l.rel = 'import';
  l.href = '/base/app/elements/everything.html';
  document.head.appendChild(l);
})();
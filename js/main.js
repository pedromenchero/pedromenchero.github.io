// Keeps the page from going stale: the current role's block in the career bar
// grows with the months since it started, and the footer shows this year.
(function () {
  var now = new Date();

  var current = document.querySelector('[data-since]');
  if (current) {
    var since = current.getAttribute('data-since').split('-');
    var months = (now.getFullYear() - Number(since[0])) * 12 + (now.getMonth() + 1 - Number(since[1]));
    if (months > 0) current.style.setProperty('--m', months);
  }

  var year = document.getElementById('year');
  if (year) year.textContent = now.getFullYear();
})();

// Compartir desde el h1 (Web Share API o copiar enlace)
document.addEventListener("DOMContentLoaded", function () {
  var shareBtn = document.getElementById("floraShareBtn");
  if (shareBtn) {
    var shareAction = function () {
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: "Visita el sitio de Florencia Finelli",
          url: window.location.href,
        });
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        shareBtn.textContent = "¡Enlace copiado!";
        setTimeout(function () {
          shareBtn.textContent = "flora";
        }, 1200);
      }
    };
    shareBtn.addEventListener("click", shareAction);
    shareBtn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        shareAction();
      }
    });
  }
});
// Registrar el service worker para PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
        return;
      }

      event.preventDefault();

      if ("startViewTransition" in document) {
        document.startViewTransition(() => {
          window.location.href = href;
        });
      } else {
        window.location.href = href;
      }
    });
  });
});
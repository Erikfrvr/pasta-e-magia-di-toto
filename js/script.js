// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.classList.remove("active");
    });
  });
}

// Header muda de sombra ao rolar
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Animação de revelação ao rolar
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));

// Deixa os graozinhos de fundo mais visíveis sobre as seções claras (Sobre + Cardápio)
const pastaBg = document.querySelector(".pasta-bg");
const secoesClaras = document.querySelectorAll(".about, .section-logo, .menu");

if (pastaBg && secoesClaras.length) {
  const emAreaClara = new Set();
  const bgObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emAreaClara.add(entry.target);
        } else {
          emAreaClara.delete(entry.target);
        }
      });
      pastaBg.classList.toggle("pasta-bg--claro", emAreaClara.size > 0);
    },
    { threshold: 0.15 }
  );

  secoesClaras.forEach((secao) => bgObserver.observe(secao));
}

// Sobre o hero e o rodapé (fundo escuro), tira o vermelho/amarelo e deixa neutro
const secoesEscuras = document.querySelectorAll(".hero, .footer");

if (pastaBg && secoesEscuras.length) {
  const emAreaEscura = new Set();
  const darkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          emAreaEscura.add(entry.target);
        } else {
          emAreaEscura.delete(entry.target);
        }
      });
      pastaBg.classList.toggle("pasta-bg--escuro", emAreaEscura.size > 0);
    },
    { threshold: 0.15 }
  );

  secoesEscuras.forEach((secao) => darkObserver.observe(secao));
}

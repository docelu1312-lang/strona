"use strict";

function adresHttps(wartosc) {
  try {
    const adres = new URL(wartosc);
    return adres.protocol === "https:" ? adres.href : "";
  } catch {
    return "";
  }
}

const oferta = window.ofertaEbooka;
const dokumenty = {
  regulamin: "Regulamin sklepu",
  prywatnosc: "Polityka prywatności",
  konsument: "Prawa konsumenta",
};

for (const [pole, nazwa] of Object.entries(dokumenty)) {
  const adres = adresHttps(oferta[pole]);
  if (adres) {
    const link = document.createElement("a");
    link.href = adres;
    link.textContent = nazwa;
    document.querySelector(`[data-legal="${pole}"]`).replaceChildren(link);
  }
}
if (oferta.sprzedawca.trim()) document.getElementById("dane-sprzedawcy").textContent = oferta.sprzedawca;
if (oferta.kontakt.trim()) document.getElementById("kontakt-sprzedawcy").textContent = oferta.kontakt;

const podglad = document.getElementById("podglad");
if (typeof podglad.showModal === "function") {
  const obraz = podglad.querySelector("img");
  const tytul = document.getElementById("podglad-tytul");
  for (const link of document.querySelectorAll(".sample")) {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      tytul.textContent = link.querySelector("span").firstChild.textContent.trim();
      obraz.src = link.href;
      obraz.alt = link.querySelector("img").alt;
      podglad.showModal();
    });
  }
}

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const obserwator = new IntersectionObserver((wpisy) => {
    for (const wpis of wpisy) {
      if (!wpis.isIntersecting) continue;
      wpis.target.classList.replace("pending", "shown");
      obserwator.unobserve(wpis.target);
    }
  });
  for (const sekcja of document.querySelectorAll(".reveal")) {
    if (sekcja.getBoundingClientRect().top >= innerHeight + 80) {
      sekcja.classList.add("pending");
      obserwator.observe(sekcja);
    }
  }
}

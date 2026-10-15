document.querySelectorAll('.ano').forEach((el) => { el.textContent = new Date().getFullYear(); });

function marcarVazio(figura) {
  if (figura.classList.contains('vazio')) return;
  const img = figura.querySelector('img');
  const arquivo = img.getAttribute('src');
  figura.classList.add('vazio');
  figura.insertAdjacentHTML('beforeend',
    `<figcaption><strong>Espaço para ${figura.closest('.prints').dataset.tipo === 'foto' ? 'foto' : 'print'}</strong>${arquivo}</figcaption>`);
}

document.querySelectorAll('.print').forEach((figura) => {
  const img = figura.querySelector('img');
  img.addEventListener('error', () => marcarVazio(figura));
  if (img.complete && img.naturalWidth === 0) marcarVazio(figura);
});

const lightbox = document.getElementById('lightbox');
const imgGrande = lightbox.querySelector('img');

function fecharLightbox() {
  lightbox.hidden = true;
  imgGrande.removeAttribute('src');
}

document.querySelectorAll('.print').forEach((figura) => {
  figura.addEventListener('click', () => {
    if (figura.classList.contains('vazio')) return;
    const img = figura.querySelector('img');
    imgGrande.src = img.src;
    imgGrande.alt = img.alt;
    lightbox.hidden = false;
  });
});

lightbox.addEventListener('click', fecharLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) fecharLightbox(); });

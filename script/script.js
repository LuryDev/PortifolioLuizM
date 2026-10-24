const EMAIL = 'luiz.souza79@outlook.com';

const aviso = document.getElementById('aviso');
let timerAviso;
function mostrarAviso(texto) {
  aviso.textContent = texto;
  aviso.hidden = false;
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => { aviso.hidden = true; }, 2200);
}

document.getElementById('copiar-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    mostrarAviso('E-mail copiado!');
  } catch (e) {
    window.location.href = `mailto:${EMAIL}`;
  }
});

function idade() {
  const hoje = new Date();
  let anos = hoje.getFullYear() - 2009;
  if (hoje.getMonth() < 2 || (hoje.getMonth() === 2 && hoje.getDate() < 29)) anos--;
  return anos;
}
document.getElementById('idade').textContent = idade();
document.querySelectorAll('.ano').forEach((el) => { el.textContent = new Date().getFullYear(); });

const linksMenu = [...document.querySelectorAll('.menu a')];
const secoes = linksMenu.map((a) => document.querySelector(a.getAttribute('href')));

function marcarAtivo(id) {
  linksMenu.forEach((a) => {
    const ativo = a.getAttribute('href') === `#${id}`;
    a.classList.toggle('ativo', ativo);
    if (ativo) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
}

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => { if (e.isIntersecting) marcarAtivo(e.target.id); });
}, { rootMargin: '-35% 0px -60% 0px' });
secoes.forEach((s) => observador.observe(s));

function marcarVazio(figura) {
  if (figura.classList.contains('vazio')) return;
  const img = figura.querySelector('img');
  const tipo = figura.closest('.prints').dataset.tipo === 'foto' ? 'foto' : 'print';
  figura.classList.add('vazio');
  figura.insertAdjacentHTML('beforeend',
    `<figcaption><strong>Espaço para ${tipo}</strong>${img.getAttribute('src')}</figcaption>`);
}

const lightbox = document.getElementById('lightbox');
const imgGrande = lightbox.querySelector('img');

document.querySelectorAll('.print').forEach((figura) => {
  const img = figura.querySelector('img');
  img.addEventListener('error', () => marcarVazio(figura));
  if (img.complete && img.naturalWidth === 0) marcarVazio(figura);
  figura.addEventListener('click', () => {
    if (figura.classList.contains('vazio')) return;
    imgGrande.src = img.src;
    imgGrande.alt = img.alt;
    lightbox.hidden = false;
  });
});

function fecharLightbox() {
  lightbox.hidden = true;
  imgGrande.removeAttribute('src');
}
lightbox.addEventListener('click', fecharLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) fecharLightbox(); });

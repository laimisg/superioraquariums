document.documentElement.classList.add('js');

const hdr = document.querySelector<HTMLElement>('.hdr');
const sticky = document.querySelector<HTMLElement>('.sticky');
const onScroll = () => {
  const y = window.scrollY;
  hdr?.classList.toggle('solid', y > 40);
  sticky?.classList.toggle('show', y > 500);
};
onScroll();
addEventListener('scroll', onScroll, { passive: true });

const burger = document.querySelector<HTMLButtonElement>('.burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) hdr?.classList.add('solid');
});

const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
    const el = e.target as HTMLElement;
    if (el.dataset.count) countUp(el);
  }),
  { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
);
document.querySelectorAll('.rv, [data-count]').forEach((el) => io.observe(el));
// Clipped images report zero visibility, so observe their parent and reveal them together.
const imgIO = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.querySelectorAll(':scope > .reveal-img').forEach((i) => i.classList.add('in'));
  imgIO.unobserve(e.target);
}), { threshold: 0.2 });
document.querySelectorAll('.reveal-img').forEach((el) => el.parentElement && imgIO.observe(el.parentElement));

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const suffix = el.dataset.suffix ?? '';
  const t0 = performance.now(), dur = 1800;
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

// Gentle parallax on [data-parallax] backgrounds
const par = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
if (par.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      par.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom > 0 && r.top < innerHeight) el.style.transform = `translate3d(0,${(r.top * -0.08).toFixed(1)}px,0) scale(1.1)`;
      });
      ticking = false;
    });
  }, { passive: true });
}

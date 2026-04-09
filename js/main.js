const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

function toggleNavState() {
  if (!header || !hero || !about || !contact) return;

  const heroCheckY = window.scrollY + window.innerHeight * 0.3;
  const lightCheckY = window.scrollY + window.innerHeight * 0.15;

  const heroBottom = hero.offsetTop + hero.offsetHeight;

  /* hero 지나면 텍스트 숨김 */
  if (heroCheckY >= heroBottom) {
    header.classList.add('nav-collapsed');
  } else {
    header.classList.remove('nav-collapsed');
  }


}

/* Rgith GNB */ 

window.addEventListener('scroll', toggleNavState);
window.addEventListener('load', toggleNavState);
window.addEventListener('resize', toggleNavState);

const menuBtn = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');
const sideNavLinks = document.querySelectorAll('.side-nav_link');

if (menuBtn && sideNav) {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuBtn.classList.toggle('active');
    sideNav.classList.toggle('open');
  });

  sideNav.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    sideNav.classList.remove('open');
  });

  sideNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      sideNav.classList.remove('open');
    });
  });
}

let resizeTimer;

window.addEventListener('resize', () => {
  if (!sideNav || !menuBtn) return;

  sideNav.classList.add('no-transition');

  /* 데스크탑으로 돌아가면 모바일 메뉴 상태 강제 초기화 */
  if (window.innerWidth > 1200) {
    sideNav.classList.remove('open');
    menuBtn.classList.remove('active');
  }

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    sideNav.classList.remove('no-transition');
  }, 200);
});
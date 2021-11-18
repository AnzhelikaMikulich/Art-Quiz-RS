const sections = document.querySelectorAll('section');
const btnNavigation = document.querySelectorAll('.links-page');

function addNavigations() {
  btnNavigation.forEach((btn) => btn.addEventListener('click', () => {
    const pageName = btn.dataset.link;
    sections.forEach((page) => {
      if (page.id === pageName) {
        page.classList.remove('hide');
      } else {
        page.classList.add('hide');
      }
    });
  }));
}

export default addNavigations;

let elHeaderBtn = document.querySelector('.profile__theme-item');
let elMainList = document.getElementById('main-list');
let elFilter = document.getElementById('filter');
let elProfile = document.querySelector('.site-header__right-link');
let elProfileList = document.querySelector('.profile');
let elChangeTheme = document.querySelector('#change-theme');
let elProfileThemeList = document.querySelector('.profile__theme');
let elProfileBack = document.querySelector('.profile__back');
let elBody = document.querySelector('main');
let elBurgerMenu = document.querySelector('.site-header__left-menu-btn');
let elSiteHideList = document.querySelector('.site-main__left-list');
let elMicBtn = document.querySelector('.site-header__mic-big-btn');
let elMicCloseBtn = document.querySelector('.site-header__mic-close-btn');
let elMicModal = document.querySelector('.site-header__mic-modal-content');
let elMicInnerModal = document.querySelector('.site-header__mic-modal');
let elMicOpenModal = document.querySelector('.site-header__form-mic');

elMicOpenModal.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.classList.contains('site-header__form-mic')) {
    elMicModal.classList.add('d-block');
    console.log(elMicModal.classList === 'site-header__mic-modal-content');
  }
};

elMicModal.addEventListener('click', closeModal);

function closeModal(e) {
  if (e.target.classList.contains('site-header__mic-modal-content')) {
    elMicModal.classList.add('d-none');
  }
  else if (e.target.classList.contains('d-none')) {
    elMicModal.classList.add('d-block');
  }
};

elMicBtn.addEventListener('click', () => {
  elMicBtn.classList.toggle('site-header__mic-animate')
});

elMicCloseBtn.addEventListener('click', () => {
  elMicModal.classList.add('d-none');
});

elProfileBack.addEventListener('click', () => {
  elProfileThemeList.classList.toggle('d-none');
  elProfileList.classList.remove('d-none');
  elProfileList.classList.add('d-block');

});

elChangeTheme.addEventListener('click', () => {
  elProfileThemeList.classList.toggle('d-block');
  elProfileList.classList.add('d-none');
});

elProfile.addEventListener('click', () => {
  elProfileList.classList.toggle('d-block');
});

elHeaderBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

elFilter.addEventListener('keyup', filtered);

function filtered(e) {
  let text = e.target.value.toLowerCase();
  let items = elMainList.getElementsByTagName('h2');
  
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;

    if (itemName.toLocaleLowerCase().indexOf(text) === 0) {
      item.parentNode.parentNode.parentNode.parentNode.style.display = 'block';
    } 
    else {
      item.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
    }
  })
};

elBurgerMenu.addEventListener('click', () => {
  let items = elSiteHideList.getElementsByTagName('a');
  Array.from(items).forEach(function(item) {
    if (item.classList.contains('site-main__left-link')) {
      if (item.classList.contains('d-block')) {
        item.classList.remove('d-block');
        item.classList.add('d-none');
        item.parentNode.parentNode.style.overflow = "hidden";
        item.parentNode.style.paddingRight = '0';
      }
      else if (item.classList.contains('d-none')) {
        item.classList.remove('d-none');
        item.classList.add('d-block');
        item.classList.add('site-main__left-link');
        item.parentNode.parentNode.style.overflow = "scroll";
        item.parentNode.style.paddingRight = '30px';
      }
    }
  })
});

// elBurgerMenu.addEventListener('click', () => {
//   let li = elSiteHideList.getElementsByTagName('li');
//   Array.from(li).forEach(function(i) {
//     // console.log(i.className);
//     if (i.classList.contains('site-main__left-item')) {
//       // i.classList.add('d-none')
//       // console.log(i);
//     }
//     // i.style.paddingRight = '0';
    
//   })
// })

// elBody.addEventListener('click', () => {
//   if (elProfileList.classList.contains('d-block') === true) {
//     elProfileList.classList.add('d-none');
//   }
// });


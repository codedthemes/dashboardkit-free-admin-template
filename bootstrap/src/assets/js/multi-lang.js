/**
=========================================================================
=========================================================================
Template Name: Berry - Admin Template
Author: Phoenixcoded
Support: https://phoenixcoded.authordesk.app/
File: multi-lang.js
Description:  this file will contains snippet code
              about handling language change of the page.
=========================================================================
=========================================================================
*/

// import Fetch from 'i18next-fetch-backend';

'use strict';
const DEFAULT_OPTIONS = {
  flagList: {
    en: 'flag-united-kingdom',
    pl: 'flag-poland',
    ja: 'flag-japan',
    de: 'flag-germany',
  },
  preloadLngs: ['en'],
  fallbackLng: "en",
  loadPath: '../assets/json/locales/{{lng}}.json',
}


class Translator {
  constructor(options = {}) {
    this._options = {...DEFAULT_OPTIONS, ...options}
    this._currentLng = this._options.fallbackLng;

    this._i18nextInit();
    this._listenToLangChange();
  }


  _i18nextInit() {
    i18next
      .use(i18nextHttpBackend)
      .init({
        fallbackLng: this._options.fallbackLng,
        preload: this._options.preloadLngs,
        backend: {
          loadPath: this._options.loadPath,
          stringify: JSON.stringify,
        }
      }).then(() => {
        this._translateAll();
      });
  }

  _listenToLangChange = () => {
    const langSwitchers = document.querySelectorAll('[data-lng]');

    langSwitchers.forEach((langSwitcher) => {
      langSwitcher.addEventListener('click', () => {
        this._currentLng = langSwitcher.getAttribute('data-lng');
        
        i18next.changeLanguage(this._currentLng).then(() => {
          this._translateAll();
          // this._setPickedLanguageFlag();
        });
      })
    });
  }

  _translateAll = () => {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    elementsToTranslate.forEach((el) => {
      const key = el.dataset.i18n;

      el.innerHTML = i18next.t(key);
    })
  }

  // _setPickedLanguageFlag = () => {
  //   const flagIcon = document.getElementById('selected-lang-flag');
  //   const oldFlagClass = flagIcon.classList.value.match(/\bflag-\S+/)[0];
  //   const newFlagClass = this._options.flagList[this._currentLng]

  //   flagIcon.classList.replace(oldFlagClass, newFlagClass);
  // };
}

new Translator

// =========================================
// =========================================
// =========================================


// document.addEventListener('DOMContentLoaded', function () {
//   // internalization
//   i18next.use(i18nextHttpBackend).init(
//     {
//       lng: 'fr', // default language
//       defaultNS:'fr',
//       backend: {
//         loadPath: '../assets/json/locales/{{lng}}.json'
//       }
//     // }
//     // function (err, t) {
//     //   localizeContent();
//     // }
//   // );


//   }).then(() => {
//     localizeContent();
//   });
// });
// // Language chage dropdown start
// function localizeContent() {
//   document.querySelectorAll('[data-i18n]').forEach(function (element) {
//     const key = element.getAttribute('data-i18n');
//     element.textContent = i18next.t(key);
//   });
// }
// document.querySelectorAll('.lng-dropdown a').forEach(function (element) {
//   element.addEventListener('click', function () {
//     const selectedLng = this.getAttribute('data-lng');

//     i18next.changeLanguage(selectedLng, function (err, t) {
//       localizeContent();
//     });

//     // Remove 'active' class from other links and set it on the clicked one
//     this.closest('li')
//       .parentElement.querySelectorAll('li a')
//       .forEach(function (link) {
//         link.classList.remove('active');
//       });

//     this.classList.add('active');
//     document.querySelectorAll('.lng-dropdown a').forEach(function (link) {
//       link.classList.remove('active');
//     });

//     const dropLng = document.querySelector(`.lng-dropdown a[data-lng="${selectedLng}"]`);
//     dropLng.classList.add('active');

//     const dropdownActiveItem = document.querySelector('.lng-dropdown #dropdown-active-item');
//     if (dropdownActiveItem && dropLng) {
//       dropdownActiveItem.innerHTML = dropLng.innerHTML;
//     }
//   });
// });
// // Language chage dropdown end


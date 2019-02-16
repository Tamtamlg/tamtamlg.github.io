'use strict';

svg4everybody();

/**
 * lazy loading
 */
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
  var lazyBgs = [].slice.call(document.querySelectorAll(".lazy-bg"));

  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    let lazyBgObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyBg = entry.target;
          lazyBg.classList.add("lazy-bg--loaded");
          lazyBgObserver.unobserve(lazyBg);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
    lazyBgs.forEach(function(lazyBg) {
      lazyBgObserver.observe(lazyBg);
    });

  } else {
    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
    });
    lazyBgs.forEach(function(lazyBg) {
      lazyBg.classList.add("lazy-bg--loaded");
    });
  }
});

/**
 * demo
 */
var customSelect = document.getElementById('exampleInput4');
var customDropdown = document.getElementById('exempleDropdown');
var menuBtn = document.getElementById('menuBtn');
var mobileMenu = document.getElementById('mobileMenu');
var overlay = document.getElementById('overlay');

customSelect.addEventListener('click', function() {
  customDropdown.classList.toggle('d-none');
});

menuBtn.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle('shown');
  overlay.classList.toggle('shown');
}
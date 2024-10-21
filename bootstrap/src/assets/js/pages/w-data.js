'use strict';
document.addEventListener('DOMContentLoaded', function () {
  if (!!document.querySelector('.customer-scroll')) {
    new SimpleBar(document.querySelector('.customer-scroll'));
  }
  if (!!document.querySelector('.performance-scroll')) {
    new SimpleBar(document.querySelector('.performance-scroll'));
  }
  if (!!document.querySelector('.feed-scroll')) {
    new SimpleBar(document.querySelector('.feed-scroll'));
  }
  if (!!document.querySelector('.activity-scroll')) {
    new SimpleBar(document.querySelector('.activity-scroll'));
  }
  if (!!document.querySelector('.recent-scroll')) {
    new SimpleBar(document.querySelector('.recent-scroll'));
  }
});

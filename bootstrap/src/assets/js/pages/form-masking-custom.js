'use strict';
(function () {
  var regExpMask = IMask(document.querySelector('.date'), { mask: '00/00/0000' });

  var regExpMask = IMask(document.querySelector('.date2'), { mask: '00-00-0000' });

  var regExpMask = IMask(document.querySelector('.hour'), { mask: '00:00:00' });

  var regExpMask = IMask(document.querySelector('.dateHour'), { mask: '00/00/0000 00:00:00' });

  var regExpMask = IMask(document.querySelector('.mob_no'), { mask: '0000-000-000' });

  var regExpMask = IMask(document.querySelector('.phone'), { mask: '0000-0000' });

  var regExpMask = IMask(document.querySelector('.telphone_with_code'), { mask: '(00) 0000-0000' });

  var regExpMask = IMask(document.querySelector('.us_telephone'), { mask: '(000) 000-0000' });

  var regExpMask = IMask(document.querySelector('.ip'), { mask: '000.000.000.000' });

  var regExpMask = IMask(document.querySelector('.ipv4'), { mask: '000.000.000.0000' });

  var regExpMask = IMask(document.querySelector('.ipv6'), { mask: '0000:0000:0000:0:000:0000:0000:0000' });
})();

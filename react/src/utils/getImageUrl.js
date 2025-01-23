export let ImagePath;

(function (ImagePath) {
  ImagePath['USER'] = 'user';
  ImagePath['PRODUCT'] = 'product';
  ImagePath['WIDGET'] = 'widget';
})(ImagePath || (ImagePath = {}));

// ==============================|| NEW URL - GET IMAGE URL ||============================== //

export function getImageUrl(name, path) {
  return new URL(`/src/assets/images/${path}/${name}`, import.meta.url).href;
}

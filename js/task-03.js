const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Method 1
const gallery = document.querySelector('.gallery');

const imageGalleryArray = images.forEach(image => {
  const imageEl = document.createElement('img');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  const imageItem = document.createElement('li');
  imageItem.appendChild(imageEl);
  //console.log(imageItem);
  gallery.appendChild(imageItem);
  
});

console.log(gallery);

//  //Method 2
// const gallery = document.querySelector('.gallery');
// images.forEach(image => {
//   gallery.insertAdjacentHTML('beforeend', '<li><img></img></li>');
//   const imageAlt = image.alt;
//   const imageScr = image.url;
//   const imageTag = gallery.querySelector('img');
//   imageTag.setAttribute('alt', imageAlt);
//   imageTag.setAttribute('scr', imageScr);
  
// })
// console.log(gallery);
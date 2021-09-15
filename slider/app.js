const images = [
   'images/river-1.jpg',
   'images/river-2.jpg',
   'images/river-3.gif',
   'images/river-4.jpg',
   'images/river-5.jpg',
   'images/river-6.jpg'
];

let imgIndex = 0;
let imgid = document.getElementById('slider-img');
setInterval(()=>{
if(imgIndex>=images.length){
    imgIndex =0;
}
// const imgurl =images[imgIndex];

imgid.setAttribute('src',images[imgIndex++]);


},1500)
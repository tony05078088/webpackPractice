import altText from './altText.txt';
import bmw from './bmw.jpg';

function addImage() {
  const img = document.createElement('img');
  img.alt = altText ;
  img.width = 300;
  img.src =  bmw;
  const body = document.querySelector('body')
  body.appendChild(img)
}

export default addImage;
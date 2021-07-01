import BMW from "./bmw.jpg";
import './bmwimage.scss';


class BMWImage {
  render() {
    const img = document.createElement("img");
    img.src = BMW;
    img.alt = "BMW";
    img.classList.add("Bmw-image");
    const bodyEl = document.querySelector("body");
    bodyEl.appendChild(img);
  }
}

export default BMWImage;

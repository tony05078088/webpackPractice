import "./hello-world.scss";

class HelloWorldButton {
  buttonCssClass = "hello-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    console.log(this.buttonCssClass);
    const body = document.querySelector("body");
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "fire!~";
      p.classList.add("p-text");
      body.appendChild(p);
    };
    button.classList.add(this.buttonCssClass);
    body.appendChild(button);
  }
}

export default HelloWorldButton;

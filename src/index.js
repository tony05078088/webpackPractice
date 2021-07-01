import Heading from "./components/heading/heading.js";
import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";

const helloWorldButton = new HelloWorldButton();
const Header = new Heading();

document.addEventListener("click", helloWorldButton.render);
document.addEventListener("click", Header.render);

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("development mode");
}

//HelloWorldButton.methodThatDoesNotExist()
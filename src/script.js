function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poemBox", {
    strings: "Roses are red<br />violets are blue",
    autoStart: true,
    delay: 30,
  });
}

let poemFormElement = document.querySelector("#poemForm");
poemFormElement.addEventListener("submit", generatePoem);

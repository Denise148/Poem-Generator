function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Poem";
  new Typewriter("#poem", {
    strings: "poem",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);

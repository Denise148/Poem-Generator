function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}
function generatePoem(event) {
  event.preventDefault();
  let apiKey = "20b266eb57t5a497fa9e0073d3a3017o";
  let context =
    "You are a very good poet and like to write short poems. You are to write a 4 line poem in basic html. Sign the poem with 'SheCodes AI' in a <strong> element Please follow the users instructions";
  let instructionsInput = document.querySelector("#user-input");
  let prompt = `User instructions: Write me a short poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);

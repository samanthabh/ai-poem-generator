function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "e4d7d87d81aef5843860374o00tff38b";
  let prompt = `User instructions: Generate a poem about ${userInput.value}`;
  let context =
    "You are a poetry expert and you write poems. The poems must be no more than 6 lines long. You should have start a new line after each comma ',' using a <br /> of the poem. You must also listen carefully to the user instructions.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class="blink">💭 Generating a poem about ${userInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

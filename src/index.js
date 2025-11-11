function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `Of morning light the rivers sing,
            Soft winds awaken everything,
            And quiet hope begins to ring.`,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

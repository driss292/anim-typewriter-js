const textAnim = document.querySelector("h1");
new Typewriter(textAnim, {
  deleteSpeed: 20,
})
  .typeString(`Bonjour,`)
  .typeString(`je suis Driss Kaci`)
  .pauseFor(300)
  .typeString(`<strong>, développeur fullstack junior !</strong>`)
  .pauseFor(1000)
  .deleteChars(25)
  .typeString()
  .start();

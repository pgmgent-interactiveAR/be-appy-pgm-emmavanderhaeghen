const App = {
  
  init() {
    this.cacheElements();
    this.addEventListener();
  },

  cacheElements() {
    this.splashScreen = document.querySelector(".splash-screen");
    this.splashBtn = document.querySelector(".splash-btn");
    this.mainScreen = document.querySelector(".main-screen");

    this.btnClose = document.querySelector(".close-btn");
    this.btnOpen = document.querySelector(".open-btn");
    this.container = document.querySelector(".container");

    this.tutorial = document.querySelector("#tutorial");
    this.tutorialCard = document.querySelector(".tutorial-card");

    this.danceBtn = document.querySelector("#dance");
    this.danceModel = document.querySelector(".dance-model");
  
    this.quoteBtn = document.querySelector("#quote");
    this.quoteGenerator = document.querySelector(".quote-generator");
    
    this.petBtn = document.querySelector("#pet");
    this.petModel = document.querySelector(".pet-model");
  },

  addEventListener() {
    // add event listener to splash button
    this.splashBtn.addEventListener('click', () => {
      this.splashScreen.classList.add("hidden");
      this.mainScreen.classList.remove("hidden");
    });

    // add event listener to nav up button
    this.btnOpen.addEventListener('click', () => {
      this.btnOpen.classList.toggle("hidden");
      this.btnClose.classList.toggle("hidden");
      this.container.classList.toggle("hidden");
    });

    this.btnClose.addEventListener('click', () => {
      this.btnOpen.classList.toggle("hidden");
      this.btnClose.classList.toggle("hidden");
      this.container.classList.toggle("hidden");
    });

    // add event listener to tutorial button
    this.tutorial.addEventListener('click', () => {
      this.tutorialCard.classList.toggle("hidden");
    });

    // add event listener to dance button
    this.danceBtn.addEventListener('click', () => {
      // this.danceModel.toggleAttribute('visible', true);
      this.danceModel.setAttribute('visible', true);
      this.danceModel.setAttribute('animation-mixer', 'clip: step hiphop dance; timeScale: 1; loop: infinite; clampWhenFinished: true');
    });

    // add event listener to quote button
    this.quoteBtn.addEventListener('click', () => {
      this.quoteGenerator.classList.toggle("hidden");
    });

    // add event listener to pet button
    this.petBtn.addEventListener('click', () => {
      // this.petModel.toggleAttribute('visible', true);
      this.petModel.setAttribute('visible', true);
    });
  },
};

App.init();
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
  },
};

App.init();
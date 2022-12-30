const App = {
  init() {
    this.cacheElements();
    this.addEventListener();
  },

  cacheElements() {
    this.splashScreen = document.querySelector(".splash-screen");
    this.splashBtn = document.querySelector(".splash-btn");
    this.mainScreen = document.querySelector(".main-screen");

    this.navUp = document.querySelector(".nav-up");
    this.navDown = document.querySelector(".nav-down");
    this.controls = document.querySelector(".controls");

    this.tutorial = document.querySelector(".tutorial");
    this.tutorialCard = document.querySelector(".tutorial-card");
  },

  addEventListener() {
    // add event listener to splash button
    this.splashBtn.addEventListener('click', () => {
      this.splashScreen.classList.add("hidden");
      this.mainScreen.classList.remove("hidden");
    });

    // add event listener to nav up button
    this.navUp.addEventListener('click', () => {
      this.navUp.classList.toggle("hidden");
      this.navDown.classList.toggle("hidden");
      this.controls.classList.toggle("hidden");
    });

    this.navDown.addEventListener('click', () => {
      this.navUp.classList.toggle("hidden");
      this.navDown.classList.toggle("hidden");
      this.controls.classList.toggle("hidden");
    });


        // add event listener to tutorial button
    this.tutorial.addEventListener('click', () => {
      this.tutorialCard.classList.toggle("hidden");
    });
  },
};

App.init();
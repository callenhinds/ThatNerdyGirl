$(document).ready(function () {

  new TypeIt("#typing", {
    strings: [
      "My job is to make your life easier.",
      "Need help with websites?",
      "Need a virtual assistant?",
      "Need social media management?"
    ],

    speed: 50,
    breakLines: false,
    loop: true
  }).go();

});

var helloSpeaker = {};

(function (window) {
  var speakWord = "Hello";
  
  helloSpeaker.speak = function (name) {
    var greeting = speakWord + " " + name;
    return greeting;
  };
  
  window.helloSpeaker = helloSpeaker;
})(window);

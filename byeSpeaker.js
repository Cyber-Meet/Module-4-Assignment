var byeSpeaker = {};

(function (window) {
  var speakWord = "Good Bye";
  
  byeSpeaker.speak = function (name) {
    var greeting = speakWord + " " + name;
    return greeting;
  };
  
  window.byeSpeaker = byeSpeaker;
})(window);

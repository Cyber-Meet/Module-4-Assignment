(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var greeting = "";

    if (firstLetter === 'j') {
      greeting = byeSpeaker.speak(names[i]);
    } else {
      greeting = helloSpeaker.speak(names[i]);
    }

    displayGreeting(greeting);
  }

  function displayGreeting(greeting) {
    var greetingsContainer = document.getElementById('greetings-container');
    var greetingElement = document.createElement('p');
    greetingElement.textContent = greeting;
    greetingsContainer.appendChild(greetingElement);
  }
})();

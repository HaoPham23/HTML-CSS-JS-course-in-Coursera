// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
(function (window) {
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Hello";
    var helloSpeaker = {};
    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
  // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
  // xxxx.xxxx = byeSpeaker;
  })(window);

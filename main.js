// get all keys
const keys = document.querySelectorAll(".key");

// play notes
function playNote(event) {
  // keycode
  let audioKeyCode = getKeyCode(event);

  // typed or pressed key
  const elementKey = document.querySelector(`.key[data-key="${audioKeyCode}"]`);

  // if key exists
  //   const isKeyExists = elementKey
  //   if (!isKeyExists) {
  //         return;
  //     }
  const cantFoundAnyKey = !elementKey;

  if (cantFoundAnyKey) {
    return;
  }
  addPlayingClass(elementKey)
  playAudio(audioKeyCode);
}

function addPlayingClass(elementKey) {
    elementKey.classList.add('playing')
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === "keydown"; // true or false
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }
  return keyCode;
}

// play audio
function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
  audio.currentTime = 0;
  audio.play();
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

function registerEvents(){
    // clik with mouses
keys.forEach(function (key) {
    key.addEventListener("click", playNote);
    key.addEventListener("transitionend", removePlayingClass);
  });
  
  // keyboard type
  window.addEventListener("keydown", playNote);
}
window.addEventListener("load", registerEvents)
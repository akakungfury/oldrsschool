/* eslint-disable class-methods-use-this */
const piano = document.querySelector(".piano");
const pianoKeys = document.querySelectorAll(".piano-key");
const toggleScreenModeBtn = document.querySelector(".fullscreen");
const containerOfBtnsToggleKeysTitles = document.querySelector(".btn-container");

class VirtualPiano {
  constructor() {
    this.notes = new Map([
      ["KeyD", "c"],
      ["KeyR", "c♯"],
      ["KeyF", "d"],
      ["KeyT", "d♯"],
      ["KeyG", "e"],
      ["KeyH", "f"],
      ["KeyU", "f♯"],
      ["KeyJ", "g"],
      ["KeyI", "g♯"],
      ["KeyK", "a"],
      ["KeyO", "a♯"],
      ["KeyL", "b"],
    ]);
  }

  playPianoNote(noteName) {
    const note = new Audio(`./assets/audio/${noteName}.mp3`);
    note.currentTime = 0;
    note.play();
  }

  pressVirtualPianoKey() {
    const beginToInteractWithMouseoverEvent = (e) => this.playPianoNote(e.target.dataset.note);

    piano.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("piano-key")) {
        this.playPianoNote(e.target.dataset.note);
      }

      // after mousedown event is completed, piano keys will get mouseover/mouseout events: play note
      pianoKeys.forEach((el) => {
        el.addEventListener("mouseover", beginToInteractWithMouseoverEvent);
      });
    });

    window.addEventListener("mouseup", (e) => {
      pianoKeys.forEach((el) => {
        el.removeEventListener("mouseover", beginToInteractWithMouseoverEvent);
      });
    });
  }

  pressPhysicalPianoKey() {
    window.addEventListener("keydown", (e) => {
      if (this.notes.has(e.code)) {
        if (!e.repeat) this.playPianoNote(this.notes.get(e.code));
      }
    });
  }

  toggleStylesForPianoKey() {
    const toggleActiveClass = (el, classListMethod = "add") => {
      if (el.target) {
        return classListMethod === "add" ? el.target.classList.add("piano-key-active") : el.target.classList.remove("piano-key-active");
      }
      return classListMethod === "add" ? el.classList.add("piano-key-active") : el.classList.remove("piano-key-active");
    };
    const beginToInteractWithMouseoverEvent = (e) => toggleActiveClass(e);
    const finishToInteractWithMouseoutEvent = (e) => toggleActiveClass(e, "remove");

    piano.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("piano-key")) {
        toggleActiveClass(e);
      }

      // after mousedown event is completed, piano keys will get mouseover/mouseout events
      pianoKeys.forEach((el) => {
        el.addEventListener("mouseover", beginToInteractWithMouseoverEvent);
        el.addEventListener("mouseout", finishToInteractWithMouseoutEvent);
      });
    });

    window.addEventListener("mouseup", (e) => {
      if (e.target.classList.contains("piano-key")) {
        toggleActiveClass(e, "remove");
      }

      // after mousedown event is completed, piano keys will lose mouseover/mouseout events
      pianoKeys.forEach((el) => {
        el.removeEventListener("mouseover", beginToInteractWithMouseoverEvent);
        el.removeEventListener("mouseout", finishToInteractWithMouseoutEvent);
      });
    });

    window.addEventListener("keydown", (e) => {
      if (this.notes.has(e.code)) {
        const pianoKey = document.querySelector(`[data-note=${this.notes.get(e.code)}]`);
        toggleActiveClass(pianoKey);
      }
    });

    window.addEventListener("keyup", (e) => {
      if (this.notes.has(e.code)) {
        const pianoKey = document.querySelector(`[data-note=${this.notes.get(e.code)}]`);
        setTimeout(toggleActiveClass, 150, pianoKey, "remove");
      }
    });
  }

  toggleFullScreenMode() {
    toggleScreenModeBtn.addEventListener("click", () => {
      !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
    });
  }

  switchPianoKeyTitles() {
    containerOfBtnsToggleKeysTitles.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn")) {
        if (e.target.classList.contains("btn-active")) {
          return;
        }
        containerOfBtnsToggleKeysTitles.querySelectorAll(".btn").forEach((el) => el.classList.remove("btn-active"));
        e.target.classList.add("btn-active");

        if (e.target.classList.contains("btn-letters")) {
          pianoKeys.forEach((el) => {
            el.classList.add("piano-key-letter");
          });
        } else {
          pianoKeys.forEach((el) => {
            el.classList.remove("piano-key-letter");
          });
        }
      }
    });
  }
}

const virtualPiano = new VirtualPiano();

virtualPiano.pressVirtualPianoKey();
virtualPiano.toggleStylesForPianoKey();
virtualPiano.pressPhysicalPianoKey();
virtualPiano.toggleFullScreenMode();
virtualPiano.switchPianoKeyTitles();

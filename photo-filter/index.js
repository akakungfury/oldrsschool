const filtersContainer = document.querySelector(".filters");
const filtersInput = filtersContainer.querySelectorAll("input");
const resetBtn = document.querySelector(".btn-reset");
const nextPictureBtn = document.querySelector(".btn-next");
const filterablePicture = document.querySelector("img");
const loadPictureBtn = document.querySelector(".btn-load--input");
const toggleScreenModeBtn = document.querySelector(".fullscreen");
const savePictureBtn = document.querySelector(".btn-save");
const canvas = document.querySelector("canvas");

class PhotoFilter {
  constructor() {
    this.blur = localStorage.blur || 0;
    this.invert = localStorage.invert || 0;
    this.sepia = localStorage.sepia || 0;
    this.saturate = localStorage.saturate || 100;
    this.hue = localStorage.hue || 0;
    this.currPictureNumber = 0;
  }

  applyFilterChanges(filterInput) {
    document.querySelector(`[name="${filterInput.name}"]+output`).value = `${filterInput.value} ${filterInput.dataset.sizing}`;
    document.documentElement.style.setProperty(`--${filterInput.name}`, `${filterInput.value}${filterInput.dataset.sizing}`);
    this[`${filterInput.name}`] = filterInput.value;
    localStorage[`${filterInput.name}`] = filterInput.value;
  }

  setUserFiltersValue() {
    filtersContainer.querySelectorAll("input").forEach((filterInput) => {
      if (localStorage[`${filterInput.name}`] !== undefined) {
        filterInput.value = localStorage[`${filterInput.name}`];
        this.applyFilterChanges(filterInput);
      }
    });
  }

  setDefaultPictureSrc() {
    filterablePicture.src = "./assets/img/img.jpg";
    this.currPictureNumber = 0;
  }

  handleFilerChanges() {
    filtersContainer.addEventListener("input", (e) => {
      if (e.target.nodeName === "INPUT") {
        this.applyFilterChanges(e.target);
      }
    });
  }

  resetFilter() {
    resetBtn.addEventListener("click", (e) => {
      photoFilter.setActiveClassForBtns(e.target);
      filtersInput.forEach((filterInput) => {
        if (filterInput.name === "saturate") {
          filterInput.value = 100;
        } else {
          filterInput.value = 0;
        }
        this.applyFilterChanges(filterInput);
      });
    });
  }

  showNextPicture() {
    const picturesRootStorageAddress = "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images";
    const today = new Date();
    const hour = today.getHours();
    const nextPictureNumber = this.currPictureNumber + 1;
    let formattedPictureNumber;
    let partOfDay;
    let pictureSrc;

    const displayImage = (src) => {
      const picture = new Image();
      picture.src = pictureSrc;
      picture.onload = () => {
        filterablePicture.src = src;
      };
    };

    switch (true) {
      case hour < 6:
        partOfDay = "night";
        break;
      case hour < 12:
        partOfDay = "morning";
        break;
      case hour < 18:
        partOfDay = "day";
        break;
      default:
        partOfDay = "evening";
    }
    formattedPictureNumber = nextPictureNumber >= 10 ? `${nextPictureNumber}.jpg` : `0${nextPictureNumber}.jpg`;

    pictureSrc = `${picturesRootStorageAddress}/${partOfDay}/${formattedPictureNumber}`;

    displayImage(pictureSrc);

    switch (true) {
      case this.currPictureNumber === 0:
        this.currPictureNumber = 1;
        break;
      case this.currPictureNumber === 19:
        this.currPictureNumber = 0;
        break;
      default:
        this.currPictureNumber += 1;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  uploadPicture() {
    const file = loadPictureBtn.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      filterablePicture.src = reader.result;
    };
    reader.readAsDataURL(file);
    loadPictureBtn.value = "";
  }

  // eslint-disable-next-line class-methods-use-this
  toggleFullScreenMode() {
    toggleScreenModeBtn.addEventListener("click", () => {
      !document.fullscreenElement ? document.documentElement.requestFullscreen() : document.exitFullscreen();
    });
  }

  drawPicture() {
    const calcBlurCof = (displayedPicture, canvasPicture) => {
      if (displayedPicture.width > displayedPicture.height) {
        return canvasPicture.height / displayedPicture.height;
      }
      return canvasPicture.width / displayedPicture.width;
    };
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = filterablePicture.src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");

      const cof = calcBlurCof(filterablePicture, canvas);
      ctx.filter = `blur(${this.blur * cof}px) invert(${this.invert}%) sepia(${this.sepia}%) saturate(${this.saturate}%) hue-rotate(${this.hue}deg)`;

      ctx.drawImage(img, 0, 0);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  savePicture() {
    const link = document.createElement("a");
    link.download = "download.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    link.delete;
  }

  // eslint-disable-next-line class-methods-use-this
  setActiveClassForBtns(pressedBtn) {
    document.querySelectorAll(".btn-container > .btn").forEach((btn) => {
      btn.classList.remove("btn-active");
    });
    pressedBtn.classList.add("btn-active");
  }
}

const photoFilter = new PhotoFilter();
photoFilter.setDefaultPictureSrc();
photoFilter.setUserFiltersValue();
photoFilter.handleFilerChanges();
photoFilter.resetFilter();
photoFilter.toggleFullScreenMode();

nextPictureBtn.addEventListener("click", (e) => {
  photoFilter.setActiveClassForBtns(e.target);
  photoFilter.showNextPicture();

  nextPictureBtn.disabled = true;
  setTimeout(() => {
    nextPictureBtn.disabled = false;
  }, 1400);
});

loadPictureBtn.addEventListener("change", (e) => {
  photoFilter.setActiveClassForBtns(e.target.parentNode);
  photoFilter.uploadPicture();
});

savePictureBtn.addEventListener("click", (e) => {
  photoFilter.setActiveClassForBtns(e.target);
  photoFilter.drawPicture();
  setTimeout(() => {
    photoFilter.savePicture();
  }, 1400);
});

// TODO: save current displayed picture after reloading the page

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

function showTime() {
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function showDate() {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let today = new Date(),
      day = days[today.getDay()];
      dateNumber = today.getDate();
      month = months[today.getMonth()];

  date.innerHTML = `${day}<span>, </span>${addZero(dateNumber)}<span> of </span>${month}`;
  setTimeout(showDate, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
  let today = new Date();
  let hour = today.getHours();
  let imgNumber;

  if (hour < 6) {
    imgNumber = hour;
    document.body.style.backgroundImage = `url('./assets/images/night/${imgNumber}.jpg')`;
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  } else if (hour < 12) {
    imgNumber = hour - 6;
    document.body.style.backgroundImage = `url('./assets/images/morning/${imgNumber}.jpg')`;
    greeting.textContent = 'Good Morning, ';
    document.body.style.color = '#faff00';
  } else if (hour < 18) {
    imgNumber = hour - 12;
    document.body.style.backgroundImage = `url('./assets/images/day/${imgNumber}.jpg')`;
    greeting.textContent = 'Good Afternoon, ';
    document.body.style.color = '#faff00';
  } else {
    imgNumber = hour - 18;
    document.body.style.backgroundImage = `url('./assets/images/evening/${imgNumber}.jpg')`;
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = '#faff00';
  }
  setTimeout(showDate, 1000);
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Your Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function setName(e) {
  if (name.textContent !== ''){
    localStorage.setItem('name', e.target.innerText);
  }
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  }

  if ((localStorage.getItem('name') === '' || localStorage.getItem('name') === null) && name.textContent === '') {
    localStorage.setItem('name', '[Enter Your Name]');
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

function setFocus(e) {
  if (focus.textContent !== ''){
    localStorage.setItem('focus', e.target.innerText);
  }
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }

  if ((localStorage.getItem('focus') === '' || localStorage.getItem('focus') === null) && focus.textContent === '') {
    localStorage.setItem('focus', '[Enter Focus]');
  }
}

function clearInputOnFocus(e) {
  if (e.type === 'focus') {
    this.textContent = '';
  }
}

function updateInputAfterBlur(e) {
  if (e.type === 'blur' && e.target.textContent === '') {
    this.textContent = localStorage.getItem(this.className);
  }
}

const left_arrow_btn = document.querySelector('.button__arrow-left');
const right_arrow_btn = document.querySelector('.button__arrow-right');
let today = new Date();
let hour = today.getHours();

const getPartOfDay = (hour) => {
  let partOfDayNumber = Math.trunc(hour / 6);

  switch (true) {
    case partOfDayNumber === 0: return 'night';
    case partOfDayNumber === 1: return 'morning';
    case partOfDayNumber === 2: return 'day';
    case partOfDayNumber === 3: return 'evening';
  }
}

let getCurrHourOfPart = (hour) => hour % 6;


let partOfDay = getPartOfDay(hour);
let currHourOfPart= getCurrHourOfPart(hour);
const partsOfDay = ['night', 'morning', 'day', 'evening']

function changeBackground(e){
  let currentPartIndex;
  let backGroundUrl;

  if (e.target.classList.contains('button__arrow-left')) {
    if (currHourOfPart === 0) {
      currHourOfPart = 5;
      currentPartIndex = partsOfDay.findIndex(el => el === partOfDay)
      currentPartIndex === 0 ? partOfDay = partsOfDay[3] : partOfDay = partsOfDay[currentPartIndex - 1]

      backGroundUrl =`url('./assets/images/${partOfDay}/${currHourOfPart}.jpg')`;
    } else {
      backGroundUrl = `url('./assets/images/${partOfDay}/${currHourOfPart - 1}.jpg')`;
      currHourOfPart --;
    }
  } else {
    if (currHourOfPart === 5) {
      currHourOfPart = 0;
      currentPartIndex = partsOfDay.findIndex(el => el === partOfDay)
      currentPartIndex === 3 ? partOfDay = partsOfDay[0] : partOfDay = partsOfDay[currentPartIndex + 1]

      backGroundUrl =`url('./assets/images/${partOfDay}/${currHourOfPart}.jpg')`;
    } else {
      backGroundUrl = `url('./assets/images/${partOfDay}/${currHourOfPart + 1}.jpg')`;
      currHourOfPart ++;
    }
  }

  document.body.style.backgroundImage = backGroundUrl;
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('focus', clearInputOnFocus)
name.addEventListener('blur', updateInputAfterBlur)
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('focus', clearInputOnFocus)
focus.addEventListener('blur', updateInputAfterBlur)
left_arrow_btn.addEventListener('click', changeBackground);
right_arrow_btn.addEventListener('click', changeBackground);

showTime();
showDate();
setBgGreet();
getName();
getFocus();

const dateBtns = document.getElementsByClassName("btn-date");
const btns = document.getElementsByClassName("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementsByClassName("btn3");
const btn4 = document.getElementsByClassName("btn4");

const pageOne = document.getElementById("page1");
const pageTwo = document.getElementById("page2");
const pageThree = document.getElementById("page3");
const pageFour = document.getElementById("page4");
const pageFive = document.getElementById("page5");

const young = document.getElementById("young");
const adult = document.getElementById("adult");
const old = document.getElementById("old");
const loader = document.getElementById("loader");
const percent = document.getElementById("percent");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.stopPropagation;
    pageOne.classList.add("disabled");
    pageTwo.classList.remove("disabled");
  });
}

let day = form.day;
let month = form.month;
let year = form.year;

let dateArr = [day, month, year];
let remember;

btn2.addEventListener("click", (e) => {
  e.preventDefault;
  if (day.value != 0 && month.value != 0 && year.value != 0) {
    pageTwo.classList.add("disabled");
    loader.classList.remove("disabled");
    setTimeout(() => {
      loader.classList.add("disabled");
      pageThree.classList.remove("disabled");
    }, 3100);
    remember = year.value;
  } else {
    dateArr.forEach((elem) => {
      if (elem.value == 0) {
        elem.classList.add("border");
      } else if (elem.value > 0) {
        elem.classList.remove("border");
      }
    });
  }
});

for (let i = 0; i < btn3.length; i++) {
  btn3[i].addEventListener("click", (e) => {
    e.stopPropagation;
    if (remember >= 1986 && remember <= 2003) {
      young.classList.remove("disabled");
    } else if (remember >= 1976 && remember <= 1985) {
      adult.classList.remove("disabled");
    } else if (remember < 1976) {
      old.classList.remove("disabled");
    }
    pageThree.classList.add("disabled");
    pageFour.classList.remove("disabled");
  });
}

for (let i = 0; i < btn4.length; i++) {
  btn4[i].addEventListener("click", (e) => {
    e.stopPropagation;
    pageFour.classList.add("disabled");
    pageFive.classList.remove("disabled");
  });
}

let time = 20;
let count = setInterval(() => {
  time += 20;
  if (time === 100) {
    clearInterval(count);
    setTimeout(() => {
      pageFive.classList.add("disabled");
    }, 1000);
  }
  percent.textContent = `${time}%`;
}, 1000);

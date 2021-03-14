const pageOne = document.getElementById("page1");
const dateBtns = document.getElementsByClassName("btn-date");
const btns = document.getElementsByClassName("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementsByClassName("btn3");
const pageTwo = document.getElementById("page2");
const pageThree = document.getElementById("page3");
const young = document.getElementById("young");
const adult = document.getElementById("adult");
const old = document.getElementById("old");
const pageFour = document.getElementById("page4");

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
    pageThree.classList.remove("disabled");
    remember = year.value;
    console.log(remember);
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

const pageOne = document.getElementById("page1");
const dateBtns = document.getElementsByClassName("btn-date");
const btns = document.getElementsByClassName("btn1");
const btn2 = document.getElementById("btn2");
const pageTwo = document.getElementById("page2");

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

btn2.addEventListener("click", (e) => {
  e.preventDefault;
  if (day.value != 0 && month.value != 0 && year.value != 0) {
    pageTwo.classList.add("disabled");
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

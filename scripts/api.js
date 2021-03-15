const call = document.getElementById("call");
const dataPage = document.getElementById("data-page");
const fullname = document.getElementById("name");
const height = document.getElementById("height");
const mass = document.getElementById("mass");
const hair_color = document.getElementById("hair_color");
const skin_color = document.getElementById("skin_color");
const eye_color = document.getElementById("eye_color");
const birth_year = document.getElementById("birth_year");
const gender = document.getElementById("gender");
const homeworld = document.getElementById("homeworld");
const films = document.getElementById("films");

call.addEventListener("click", () => {
  pageSix.classList.add("disabled");
  dataPage.classList.remove("disabled");
});

data = axios.get("https://swapi.dev/api/people/1/").then((response) => {
  let info = response.data;
  fullname.textContent = info.name;
  height.textContent = info.height;
  mass.textContent = info.mass;
  hair_color.textContent = info.hair_color;
  skin_color.textContent = info.skin_color;
  eye_color.textContent = info.eye_color;
  birth_year.textContent = info.birth_year;
  gender.textContent = info.gender;
  axios.get("https://swapi.dev/api/planets/1/").then((response) => {
    console.log(response);
    homeworld.textContent = response.data.name;
  });
});

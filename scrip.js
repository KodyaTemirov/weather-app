const xhr = new XMLHttpRequest();
const find = document.querySelector("#find");
const findB = document.querySelector(".find");

const avtorizavat = "85486d36";

findB.addEventListener("click", () => {
  const styleTip = document.querySelector(".styleTip");
  const styletolow = styleTip.value.toLowerCase();
  let plot = `&plot=&${find.value}`;
  let op = `&type=${styletolow}`;
  console.log(styletolow);
  const requestURL = `https://www.omdbapi.com/?s=${find.value}${op}${plot}&apikey=${avtorizavat}`;
  xhr.open("GET", requestURL);
  xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log(data);
    const search = data.Search;

    if (!search) {
      visible.style.visibility = "visible";
    } else {
      const cardFilm = document.querySelector(".cardFilm");
      cardFilm.innerHTML = "";
      console.log(search);
      search.forEach((element) => {
        cardFilm.innerHTML += `
        
      <div class="infoMovie">
      <div class="picture">
        <img
          src="${element.Poster}"
          alt=""/>
      </div>
      <div class="needFix"> 
      <h3 class="classMovie">${element.Title}</h3>
        <h2 class="nameOF">
          ${element.Type}
        </h2>
        <h2 class="year">${element.Year}</h2>
        <button class="detailis">detailis</button>
      </div>  
       </div>
        `;
        const xhr1 = new XMLHttpRequest();
        const classMovie = document.querySelectorAll(".classMovie");
        const detailis = document.querySelectorAll(".detailis");
        for (let i = 0; i < detailis.length; i++) {
          detailis[i].addEventListener("click", () => {
            console.log(detailis[i]);
            console.log(classMovie[i].textContent);

            const avtorizavat = "85486d36";
            const requestURL = `https://www.omdbapi.com/?t=${classMovie[i].textContent}&apikey=${avtorizavat}`;
            xhr1.open("GET", requestURL);
            xhr1.onload = function () {
              const data = JSON.parse(xhr1.response);
              console.log(data);

              const shadowForBG = document.querySelector(".shadowForBG");
              shadowForBG.style.display = "flex";
              shadowForBG.innerHTML = `<div class="cardOffilm">
            <div class="poster">
              <img class="posterWidth"
                src="${data.Poster}"
                alt=""
              />
            </div>
            <div class="everythingAboutFilm">
              <h4><strong class="bigban">Title :</strong> "${data.Title}"</h4>
              <h4><strong class="bigban">Type :</strong> "${data.Type}"</h4>
              <h4><strong class="bigban">Writer :</strong> "${data.Writer}"</h4>
              <h4><strong class="bigban">Year :</strong> "${data.Year}"</h4>
              <h4 class="actors">
                <strong class="bigban">Actors :</strong> ${data.Actors}
              </h4>
              <h4 class="country"><strong class="bigban">Country :</strong> ${data.Country}</h4>
              <h4><strong class="bigban">DVD :</strong> "${data.DVD}"</h4>
              <h4><strong class="bigban">Director :</strong> "${data.Director}"</h4>
              <h4>
                <strong class="bigban">Genre :</strong> "${data.Genre}"
              </h4>
              <h4><strong class="bigban">Language :</strong> "${data.Language}"</h4>
              <h4><strong class="bigban">Plot :</strong> "${data.Plot}"</h4>
              <h4><strong class="bigban">Released :</strong> "${data.Released}"</h4>
              <h4><strong class="bigban">Runtime :</strong> "${data.Runtime}"</h4>
            </div>
            <button class="back">
              <img src="./free-icon-turn-back-3585896.png" alt="" />
            </button>
          </div>`;
              const back = document.querySelector(".back");
              back.addEventListener("click", () => {
                shadowForBG.style.display = "none";
              });
            };
            xhr1.send();
          });
        }
      });
    }
  };

  const visible = document.querySelector(".visible");
  const close = document.querySelector(".visible");

  close.addEventListener("click", () => {
    visible.style.visibility = "hidden";
  });

  xhr.send();
});

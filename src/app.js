/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//----------------------------------------//
let who = [" The dog", " My grandma", " His turtle", " My bird"];
let action = [" ate", " peed", " crushed", " broke"];
let what = [" my homework", " the keys", " the car"];
let when = [
  " before the class",
  " right on time",
  " when I finished",
  " during my lunch",
  " while I was praying"
];
//---------------------------------------//
window.onload = function excuseGen() {
  let a = Math.floor(Math.random() * 4);
  let b = Math.floor(Math.random() * 4);
  let c = Math.floor(Math.random() * 4);
  let d = Math.floor(Math.random() * 4);
  let excusa = who[a] + action[b] + what[c] + when[d];
  var excuse = document.getElementById("cambio");
  excuse.innerHTML = excusa;
  console.log(excusa);
};

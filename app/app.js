import { changePage } from "../model/model.js";

const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");
const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");

function initListeners() {
  hamburgerMenu.addEventListener("click", () => {nav.classList.toggle("active");});
}

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  changePage(pageID);
  //console.log("route " + pageID);
}

$(document).ready(function() {
  $(window).on("hashchange", route);
  route();
  initListeners();
})
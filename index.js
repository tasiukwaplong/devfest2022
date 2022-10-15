/*
       Final Tasks : 
                    * Work on Tablet and Mobile View.
                    * Work on Javascript to control slider.
                    * Icon for footer links
                    * add Icon for displaying Navbar on mobile and tab.
      */
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let day = document.querySelector(".days");
let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".seconds");
let mainBox = document.querySelector(".main_box");

setInterval(function () {
  let UpcomingDate = new Date("22 october 2022 07:00:00 AM");
  let NowDate = new Date();
  let differanceTime = Math.floor((UpcomingDate - NowDate) / 1000);

  let differanceDay = Math.floor(differanceTime / 60 / 60 / 24);
  let differanceHour = Math.floor((differanceTime / 60 / 60) % 24);
  let differanceMinute = Math.floor((differanceTime / 60) % 60);
  let differanceSecound = Math.floor(differanceTime % 60);

  if (differanceDay >= 0) {
    day.innerHTML = differanceDay;
    hour.innerHTML = differanceHour;
    minute.innerHTML = differanceMinute;
    second.innerHTML = differanceSecound;
  }
}, 1000);

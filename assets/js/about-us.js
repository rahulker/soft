let count = 1;
let yearCount = setInterval(yearCounter, 501);
let count2 = 1;
let memberCount = setInterval(memberCounter, 11);
let count3 = 1;
let clintCount = setInterval(clintCounter, 8);
let count4 = 1;
let projectCount = setInterval(projectCounter, 1);
function yearCounter() {
  count++;
  document.querySelector("#year-hire-count").innerHTML = count + "Years";
  if (count == 8) {
    clearInterval(yearCount);
  }
}

function memberCounter() {
  count2++;
  document.querySelector("#member-hire-count").innerHTML = count2;
  if (count2 == 300) {
    clearInterval(memberCount);
  }
}

function clintCounter() {
  count3++;
  document.querySelector("#clint-count").innerHTML = count3;
  if (count3 == 425) {
    clearInterval(clintCount);
  }
}
function projectCounter() {
  count4++;
  document.querySelector("#project-complete-counter").innerHTML = count4;
  if (count4 == 855) {
    clearInterval(projectCount);
  }
}

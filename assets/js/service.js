let count = 1;
let yearCount = setInterval(yearCounter, 100);
let count2 = 1;
let memberCount = setInterval(memberCounter, 10);
let count3 = 1;
let clintCount = setInterval(clintCounter, 10);
let count4 = 1;
let projectCount = setInterval(projectCounter, 10);
function yearCounter() {
  count++;
  document.querySelector("#year-counting").innerHTML = count + "Years+";
  if (count == 11) {
    clearInterval(yearCount);
  }
}

function memberCounter() {
  count2++;
  document.querySelector("#member-counting").innerHTML = count2 + "+";
  if (count2 == 300) {
    clearInterval(memberCount);
  }
}

function clintCounter() {
  count3++;
  document.querySelector("#client-counting").innerHTML = count3 + "+";
  if (count3 == 425) {
    clearInterval(clintCount);
  }
}
function projectCounter() {
  count4++;
  document.querySelector("#project-counting").innerHTML = count4 + "+";
  if (count4 == 855) {
    clearInterval(projectCount);
  }
}

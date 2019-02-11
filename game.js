let bear = {
  name: "Harvey",
}
let food = {
  dumpster: 0,
  picnic: 0,
  fish: 0,
  poison: 0
}

let health = 0

function slap(val) {
  health = val + health;
  document.getElementById("health-meter").innerText = health.toString()
}
function ranger(val) {
  health = val + health;
  document.getElementById("health-meter").innerText = health.toString()

}

/*
var slider = document.getElementById("health-meter");
var output = document.getElementById("health-meter");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

}
*/
function rest() {
  health = 0;
  document.getElementById("health-meter").innerText = health.toString()
}
rest()
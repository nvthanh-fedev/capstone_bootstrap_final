document.getElementById("switchButton1").onclick = function () {
  console.log("changed1");
  document.getElementById("myBody").classList.toggle("dark");
};
document.getElementById("switchButton2").onclick = function () {
  console.log("changed2");
  document.getElementById("myBody").classList.toggle("dark");
};

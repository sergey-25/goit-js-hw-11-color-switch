import colors from "./colors.js";
import refs from "./refs.js";

const { buttonStartRef, buttonStopRef, bodyRef } = refs;

buttonStartRef.addEventListener("click", startSvitchColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function svitchColor() {
  bodyRef.style.cssText = `background-color: ${
    colors[randomIntegerFromInterval(0, colors.length - 1)]
  };`;
}

function startSvitchColor() {
  buttonStartRef.disabled = "disabled";
  buttonStartRef.removeEventListener("click", startSvitchColor);
  const intervalInit = setInterval(svitchColor, 1000);
  buttonStopRef.addEventListener("click", stopSvitchColor);
  function stopSvitchColor() {
    buttonStartRef.disabled = "";
    clearInterval(intervalInit);
    buttonStartRef.addEventListener("click", startSvitchColor);
  }
}
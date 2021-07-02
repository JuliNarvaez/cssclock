const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour = now.getHours();

  setProperty(secondsHand, setHandBehavior(seconds, 60, 360));
  setProperty(minutesHand, setHandBehavior(minutes, 60, 360));
  setProperty(hoursHand, setHandBehavior(hour, 12, 360));
}

function setHandBehavior(time, divBy, degs) {
  return (time / divBy) * degs;
}

function setProperty(element, degrees) {
  element.style.transform = `rotate(${degrees}deg)`;
}

setInterval(setDate, 1000);

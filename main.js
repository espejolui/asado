import { list } from "./helpers/list.js";

const updateCountDown = () => {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), 30, 14, 0, 0); // 30 a las 14:00

  const millisecondsToEvent = targetDate - now;

  if (millisecondsToEvent <= 0) {
    document.getElementById("countdown").textContent =
      "¡Ya empezó el asado recolo!";
    return;
  }

  const totalSeconds = Math.floor(millisecondsToEvent / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const format = (n) => (n < 10 ? "0" + n : n);

  document.getElementById("dh").textContent =
    days + " Días " + " - " + hours + " Horas";
  document.getElementById("ms").textContent =
    minutes + " Minutos " + seconds + " Segundos";
};
setInterval(updateCountDown, 1000);
updateCountDown();

const myIngredientes = () => {
  const ingredients = document.getElementById("ingredients");

  let totalSum = 0;
  const dta = list.forEach(({ ingredient, value, quantity, unit, emoji }) => {
    const p = document.createElement("p");
    const sum = parseInt(quantity) * parseInt(value);
    const sumFormat = sum.toLocaleString("es-ES");
    totalSum += sum;
    p.textContent = `${emoji} ${ingredient} a ${value} ${unit} x ${quantity} = ${sumFormat} `;

    ingredients.appendChild(p);
  });

  const total = document.createElement("p");
  total.classList.add("total");
  const totalSumFormat = totalSum.toLocaleString("es-ES");
  total.textContent = "Total: " + totalSumFormat;
  ingredients.appendChild(total);
};
myIngredientes();

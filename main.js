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

const peticion = fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRNxXo-S6Sw2q7e5fgKuFpZsyT2WZBT8ARFa1IMMtBdV8blsYQE6T_0poODJ4ETUjWzIlJsiOPeMIJG/pub?gid=0&single=true&output=json")
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }
        return response.json();
    })
    .then(data => {
        console.log("Datos en formato JSON:", data);
        // const primeraFila = data.values[0];
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error);
    });
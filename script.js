// Script para cuenta regresiva
const countdownElement = document.getElementById('countdown');
const launchDate = new Date('2024-10-20T00:00:00').getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Lanzamiento en ${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "¡Ya estamos en línea!";
  }
}, 1000);

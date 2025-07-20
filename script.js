const targetDate = new Date("2024-07-24T00:00:00Z").getTime();
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((gap % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `Launches in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Tokenomics Chart
const canvas = document.getElementById('tokenChart');
if (canvas?.getContext) {
  const ctx = canvas.getContext('2d');
  const data = [12, 70, 18];
  const colors = ['#ff00ff', '#33ffcc', '#ffffff'];
  let startAngle = 0;

  data.forEach((value, i) => {
    const angle = (value / 100) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, startAngle, startAngle + angle);
    ctx.fillStyle = colors[i];
    ctx.fill();
    startAngle += angle;
  });
}
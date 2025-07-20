const targetDate = new Date("2025-07-24T00:00:00Z").getTime();
const countdownEl = document.getElementById("countdown");
function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24));
  const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((gap % (1000 * 60)) / 1000);
  countdownEl.innerHTML = `Launches in: ${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);

function updateDateTime() {
  const now = new Date();
  const dateEl = document.getElementById('date');
  const timeEl = document.getElementById('time');

  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const dateStr = now.toLocaleDateString(undefined, options);
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const timeStr = `${hours}:${minutes} ${ampm}`;

  dateEl.textContent = dateStr;
  timeEl.textContent = timeStr;
}

setInterval(updateDateTime, 1000);
updateDateTime();

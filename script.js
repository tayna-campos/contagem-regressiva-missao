let interval;

function startCountdown() {
  const birthInput = document.getElementById("birthdate").value;
  if (!birthInput) return;

  const birthDate = new Date(birthInput);
  const targetDate = new Date(
    birthDate.getFullYear() + 18,
    birthDate.getMonth(),
    birthDate.getDate()
  );

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById("timer").innerHTML = "🎉 Já completou 18 anos!";
      clearInterval(interval);
      return;
    }

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = `${
      years > 0 ? years + " anos • " : ""
    }${days} dias • ${hours}h • ${minutes}m • ${seconds}s`;
  }, 1000);
}

function updateCountdown() {
      const now = new Date();
      const currentYear = now.getFullYear();
      const halloween = new Date(`October 31, ${currentYear} 00:00:00`);
      
      if (now > halloween) {
        halloween.setFullYear(currentYear + 1);
      }

      const diff = halloween - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      document.getElementById('countdown').textContent =
        `${days} dage, ${hours} timer, ${minutes} minutter, ${seconds} sekunder`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
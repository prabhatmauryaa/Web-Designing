function showtime() {
    const now = new Date();
    const display = document.getElementById("current-time");
    const formattedTime = now.toLocaleString();

    if (display) {
        display.textContent = formattedTime;
    }

    console.log(now);
}

showtime();
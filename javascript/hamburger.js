let timer;

function Hamburger() {
    const ham = document.getElementById("hamburgercontent");

    if (ham.classList.contains("hidden")) {
        ham.classList.remove("hidden");
        ham.classList.add("visible");

        // Set a timer to hide the hamburger content after 5 seconds (5000 milliseconds)
        timer = setTimeout(() => {
            ham.classList.remove("visible");
            ham.classList.add("hidden");
        }, 20000);
    } else {
        ham.classList.remove("visible");
        ham.classList.add("hidden");

        // Clear the timer if the hamburger is closed manually
        clearTimeout(timer);
    }
}

// Add an event listener to reset the timer on any user activity (e.g., mousemove or keydown)
document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);

function resetTimer() {
    // Clear the timer and restart it
    clearTimeout(timer);
    timer = setTimeout(() => {
        const ham = document.getElementById("hamburgercontent");
        ham.classList.remove("visible");
        ham.classList.add("hidden");
    }, 5000);
}

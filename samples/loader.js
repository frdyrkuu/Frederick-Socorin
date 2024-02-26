const loaded = document.getElementById("loadedcontents")

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loaded.classList.remove("hidden")
    loaded.classList.add("visible")

    loader.classList.remove("visible")
    loader.classList.add("hidden")
});
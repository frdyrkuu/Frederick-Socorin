var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: true,
    margin: 24,
    columns: 4,
    breakAt: {
        1200: 3,
        940: 2,
        520: 2,
        400: 2
    }
});

macy.runOnImageLoad(function () {
    var show = document.getElementById("macy")
    var hide = document.getElementById("loader")
    
    show.classList.remove("hidden")
    show.classList.add("visible")

    hide.classList.remove("visible")
    hide.classList.add("hidden")
    macy.recalculate(true, true);
});
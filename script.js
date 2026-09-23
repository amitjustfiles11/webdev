// Digital Clock

function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

// Theme Toggle

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Welcome Message

// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    // Small cursor follows immediately
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

// Smooth outer ring

function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


// =========================
// CURSOR HOVER EFFECT
// =========================

const interactiveElements = document.querySelectorAll(
    "button, a, .project, .card, h1, h2, h3"
);

interactiveElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("hover");
        cursorRing.classList.add("hover");

        if (element.classList.contains("card")) {
            element.classList.add("cursor-hover");
        }

        if (element.classList.contains("project")) {
            element.classList.add("cursor-hover");
        }
    });

    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("hover");
        cursorRing.classList.remove("hover");

        element.classList.remove("cursor-hover");
    });
});
// =========================
// WALLPAPER SYSTEM
// =========================

const wallpaperBtn = document.getElementById("wallpaperBtn");
const wallpaperPanel = document.getElementById("wallpaperPanel");

const wallpaperOptions =
    document.querySelectorAll("[data-wallpaper]");

// Open / close wallpaper menu

wallpaperBtn.addEventListener("click", () => {
    wallpaperPanel.classList.toggle("active");
});


// Change wallpaper

wallpaperOptions.forEach(option => {

    option.addEventListener("click", () => {

        const wallpaper = option.dataset.wallpaper;

        // Remove previous wallpaper
        document.body.classList.remove(
            "wallpaper-default",
            "wallpaper-neon",
            "wallpaper-aurora",
            "wallpaper-grid",
            "wallpaper-particles"
        );

        // Add selected wallpaper
        document.body.classList.add(
            "wallpaper-" + wallpaper
        );

        // Save user's choice
        localStorage.setItem(
            "selectedWallpaper",
            wallpaper
        );

        wallpaperPanel.classList.remove("active");
    });

});


// Load saved wallpaper

const savedWallpaper =
    localStorage.getItem("selectedWallpaper");

if (savedWallpaper) {

    document.body.classList.add(
        "wallpaper-" + savedWallpaper
    );

} else {

    document.body.classList.add(
        "wallpaper-default"
    );
}
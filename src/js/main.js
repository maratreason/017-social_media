// Sidebar
const menuItems = document.querySelectorAll(".menu-item");

// Messages
const messageNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSize = document.querySelectorAll(".choose-size span");
let root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");


// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => item.classList.remove("active"));
};

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");

        if (item.id != "notifications") {
            document.querySelector(".notification-popup").classList.remove("show");
        } else {
            document.querySelector(".notification-popup").classList.add("show");
            document.querySelector("#notifications .notification-count")
                .style.display = "none";
        }
    });
});

// Messages
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector(".notification-count").style.display = "none";
    messageSearch.focus();
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// Theme/Display Customization
// Open modal
const openThemeModal = () => {
    themeModal.classList.add("show");
};

const closeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.classList.remove("show");
    }
};

// Close modal
themeModal.addEventListener("click", closeModal);
theme.addEventListener("click", openThemeModal);

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove("active");
    });
};

// Fonts
fontSize.forEach(size => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSz;
        size.classList.toggle("active");

        if (size.classList.contains("font-size-1")) {
            fontSz = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSz = "14px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSz = "16px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSz = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSz = "22px";
            root.style.setProperty("--sticky-top-left", "-10rem");
            root.style.setProperty("--sticky-top-right", "-33rem");
        }

        // change font sizeof the root html element
        document.querySelector("html").style.fontSize = fontSz;
    });
});

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(color => {
        color.classList.remove("active");
    });
}

// Change primary colors
colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        changeActiveColorClass();
        let primaryHue;

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        color.classList.add("active");

        root.style.setProperty("--color-primary-hue", primaryHue);
    });
});

// Change backgrounds
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty("--color-light-lightness", lightColorLightness);
    root.style.setProperty("--color-white-lightness", whiteColorLightness);
    root.style.setProperty("--color-dark-lightness", darkColorLightness);
};

bg1.addEventListener("click", () => {
    lightColorLightness = "95%";
    whiteColorLightness = "100%";
    darkColorLightness = "17%";

    window.location.reload();
});

bg2.addEventListener("click", () => {
    lightColorLightness = "15%";
    whiteColorLightness = "20%";
    darkColorLightness = "95%";

    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    changeBg();
});

bg3.addEventListener("click", () => {
    lightColorLightness = "0%";
    whiteColorLightness = "10%";
    darkColorLightness = "95%";

    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");

    changeBg();
});

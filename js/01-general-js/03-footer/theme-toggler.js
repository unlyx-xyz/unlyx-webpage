import AnimationHandler from "../01-general/animations-handler.js";

const THEME_DARK = 0;
const THEME_LIGHT = 1;
const DEFAULT_THEME = THEME_DARK;

const COLOR_PRIMARY = "rgba(250, 135, 161, 1)";
const COLOR_SECONDARY = "rgba(253, 189, 196, 1)";
const COLOR_BLACK = "black";
const COLOR_WHITE = "white";

const USER_THEME_KEY = "user_theme";

const ROOT = document.documentElement;
const TRIGGER = document.querySelector(".theme-toggler__button");
const TRIGGER_LIGHT_THEME_ICON = document.querySelector(".theme-toggler__icon-light");
const TRIGGER_DARK_THEME_ICON = document.querySelector(".theme-toggler__icon-dark");

const BODY = document.body;

const updateTheme = () => {
    const THEME = localStorage.getItem(USER_THEME_KEY);
    if (THEME == THEME_DARK) {
        ROOT.style.setProperty("--color-background", COLOR_BLACK);
        ROOT.style.setProperty("--color-foreground", COLOR_WHITE);
        ROOT.style.setProperty("--color-main", COLOR_SECONDARY);
        TRIGGER_LIGHT_THEME_ICON.style.display = "none";
        TRIGGER_LIGHT_THEME_ICON.style.opacity = 0;
        TRIGGER_DARK_THEME_ICON.style.display = "inline";
        TRIGGER_DARK_THEME_ICON.style.opacity = 1;
        return;
    }
    ROOT.style.setProperty("--color-background", COLOR_WHITE);
    ROOT.style.setProperty("--color-foreground", COLOR_BLACK);
    ROOT.style.setProperty("--color-main", COLOR_PRIMARY);
    TRIGGER_LIGHT_THEME_ICON.style.display = "inline";
    TRIGGER_LIGHT_THEME_ICON.style.opacity = 1;
    TRIGGER_DARK_THEME_ICON.style.display = "none";
    TRIGGER_DARK_THEME_ICON.style.opacity = 0;
}

const toggleTheme = () => {
    const THEME = localStorage.getItem(USER_THEME_KEY);
    if (THEME == THEME_DARK) { localStorage.setItem(USER_THEME_KEY, THEME_LIGHT); return}
    localStorage.setItem(USER_THEME_KEY, THEME_DARK)
}

if (!localStorage.getItem(USER_THEME_KEY)) {localStorage.setItem(USER_THEME_KEY, DEFAULT_THEME)};
updateTheme();

TRIGGER.addEventListener("click", () => {toggleTheme(); AnimationHandler.animationTrigger(BODY, 500); updateTheme()});



import AnimationHandler from "./animations-handler.js";

const ROOT = document.documentElement;

const COOLDOWNS = {
    card: parseFloat(getComputedStyle(ROOT).getPropertyValue("--card-animation-cooldown")) * 1000,
    title_card: parseFloat(getComputedStyle(ROOT).getPropertyValue("--title-card-animation-cooldown")) * 1000
};
const CARD_CLASS_REFERENCE = ".card";
const CARD_TITLE_CLASS_REFERENCE = ".title--card";

console.log(COOLDOWNS.card);
console.log(COOLDOWNS.title_card);

AnimationHandler.animationPlusCooldown(CARD_CLASS_REFERENCE, COOLDOWNS.card);
AnimationHandler.animationPlusCooldown(CARD_TITLE_CLASS_REFERENCE, COOLDOWNS.title_card);



const ON_ANIMATION_STATUS_CLASS = "on-animation";

export const JUST_ADD_IT_MODE = 0;
export const JUST_REMOVE_IT_MODE = -1;

const AnimationHandler = {
    animationTrigger(object, animation_stop_time) {
        if (animation_stop_time != JUST_REMOVE_IT_MODE) object.classList.add(ON_ANIMATION_STATUS_CLASS);
        if (animation_stop_time == JUST_ADD_IT_MODE) return;
        setTimeout(() => {object.classList.remove(ON_ANIMATION_STATUS_CLASS)}, animation_stop_time);
    },
    animationPlusCooldown(objects_reference, cooldown) {

        const OBJECTS = document.querySelectorAll(objects_reference);

        const MOUSE_STATUS_HOVER = 1;
        const MOUSE_STATUS_OUT = 0;

        OBJECTS.forEach(object => {
    
            let mouse_status = MOUSE_STATUS_OUT;
            let animation_active = false;

            const cardHover = () => {
                if (!animation_active && mouse_status == MOUSE_STATUS_HOVER) {
                    animation_active = true;
                    setTimeout(() => {animation_active = false}, cooldown);
                    AnimationHandler.animationTrigger(object, JUST_ADD_IT_MODE);
                };
                requestAnimationFrame(cardHover);
            };

            const cardOut = () => {
                if (!animation_active && mouse_status == MOUSE_STATUS_OUT) {
                    animation_active = true;
                    setTimeout(() => {animation_active = false}, cooldown);
                    AnimationHandler.animationTrigger(object, JUST_REMOVE_IT_MODE);
                };
                requestAnimationFrame(cardOut);
            };

            object.addEventListener("mouseenter", () => {mouse_status = MOUSE_STATUS_HOVER});
            object.addEventListener("mouseleave", () => {mouse_status = MOUSE_STATUS_OUT});

            requestAnimationFrame(cardHover);
            requestAnimationFrame(cardOut);

        });

    }
};


export default AnimationHandler;

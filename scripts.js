document.addEventListener("DOMContentLoaded", function() {
    const typedTextElement = document.querySelector(".typed-text");
    const texts = ["Social Media Manager", "Content Creator"];
    let textIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let pauseBetween = 2000;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typedTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseBetween);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, deletingSpeed);
        } else {
            textIndex++;
            if (textIndex >= texts.length) textIndex = 0;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    type();
});

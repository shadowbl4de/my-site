document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            const inputs = form.querySelectorAll("input");
            let hasError = false;

            inputs.forEach(input => {
                if (input.type !== "submit" && input.value.trim() === "") {
                    hasError = true;
                    input.style.border = "2px solid red";
                } else {
                    input.style.border = "1px solid #ccc";
                }
            });

            if (hasError) {
                e.preventDefault();
            }
        });
    }
});
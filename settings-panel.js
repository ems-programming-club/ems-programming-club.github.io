document.addEventListener("DOMContentLoaded", () => {
    const gearBtn = document.getElementById("gear-btn");
    const settingsPanel = document.getElementById("settings-panel");

    if (!gearBtn || !settingsPanel) return;

    function openPanel() {
        settingsPanel.classList.add("active");
        settingsPanel.setAttribute("aria-hidden", "false");
        gearBtn.classList.add("active");
        gearBtn.setAttribute("aria-expanded", "true");
    }

    function closePanel() {
        settingsPanel.classList.remove("active");
        settingsPanel.setAttribute("aria-hidden", "true");
        gearBtn.classList.remove("active");
        gearBtn.setAttribute("aria-expanded", "false");
    }

    gearBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (settingsPanel.classList.contains("active")) {
            closePanel();
        } else {
            openPanel();
        }
    });

    // Close when clicking outside the panel/gear button
    document.addEventListener("click", (e) => {
        if (
            settingsPanel.classList.contains("active") &&
            !settingsPanel.contains(e.target) &&
            !gearBtn.contains(e.target)
        ) {
            closePanel();
        }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && settingsPanel.classList.contains("active")) {
            closePanel();
        }
    });
});

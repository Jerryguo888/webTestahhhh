const personalInfo = document.getElementById("personal-info");
const aboutSection = document.getElementById("about-section");

console.log("heehee.js �w���J");


window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;

    // ��y�z��r�϶��֭n�i�J�e������ܡu�ӤH��T�v
    if (sectionTop < window.innerHeight - 100) {
        personalInfo.classList.remove("hidden");
    }
});

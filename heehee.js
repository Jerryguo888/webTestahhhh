const personalInfo = document.getElementById("personal-info");
const aboutSection = document.getElementById("about-section");

console.log("heehee.js 已載入");


window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;

    // 當描述文字區塊快要進入畫面時顯示「個人資訊」
    if (sectionTop < window.innerHeight - 100) {
        personalInfo.classList.remove("hidden");
    }
});

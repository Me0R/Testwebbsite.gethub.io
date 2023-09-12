document.addEventListener("DOMContentLoaded", function () {
    // انتظر حتى تحميل الصفحة ثم انزل العنصر
    const welcomeContainer = document.querySelector(".welcome-container");

    setTimeout(function () {
        welcomeContainer.style.top = "0"; // انزل العنصر
    }, 1000); // بعد 1000 ميلي ثانية (1 ثانية)
});

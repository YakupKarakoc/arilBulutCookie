// Aril js kodları
const arilBox = document.querySelector(".arilPolitikasi");
const readButton = document.querySelector("#readButton");

// Local Storage'da "cookieAccepted" adında bir anahtar var mı kontrol ediyoruz
const isCookieAccepted = localStorage.getItem("cookieRead");

if (!isCookieAccepted) {
    arilBox.classList.add("show");
}

readButton.addEventListener("click", () => {
    arilBox.classList.remove("show");
    localStorage.setItem("cookieRead","true");
});

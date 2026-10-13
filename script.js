var jam = new Date().getHours();
var sapaan = "Selamat malam!";

if (jam < 11) {
  sapaan = "Selamat pagi!";
} else if (jam < 15) {
  sapaan = "Selamat siang!";
} else if (jam < 19) {
  sapaan = "Selamat sore!";
}

document.getElementById("sapaan").textContent = sapaan;

document.getElementById("tahun").textContent = new Date().getFullYear();
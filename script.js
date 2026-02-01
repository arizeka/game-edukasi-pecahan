window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const progressFill = document.querySelector(".progress-fill");

  // 1. Jalankan animasi progress bar segera setelah page load
  setTimeout(() => {
    if (progressFill) progressFill.style.width = "100%";
  }, 100);

  // 2. Proses transisi setelah 3 detik
  setTimeout(() => {
    // Efek Fade Out untuk Loading Screen
    loadingScreen.style.opacity = "0";
    loadingScreen.style.transition = "opacity 0.6s ease";

    // Tunggu animasi fade out selesai (0.6s), baru munculkan main
    setTimeout(() => {
      loadingScreen.style.display = "none"; // Hapus agar tidak menghalangi mouse

      // Munculkan main content
      mainContent.classList.remove("hidden");

      // Trigger animasi masuk (fade in + slide up)
      setTimeout(() => {
        mainContent.classList.add("show");
      }, 50); // Delay tipis agar browser sempat membaca perubahan class
    }, 600);
  }, 3000);
});

// Ambil semua elemen <li> di dalam .nav-links
const menuItems = document.querySelectorAll(".nav-links li");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // 1. Hapus class 'active' dari semua menu
    menuItems.forEach((i) => i.classList.remove("active"));

    // 2. Tambahkan class 'active' ke menu yang sedang diklik
    this.classList.add("active");
  });
});

// Menambahkan efek scroll pada navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#ffffff";
    nav.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});

// Contoh sederhana untuk tombol Get Started
document.querySelector(".btn-primary").addEventListener("click", () => {
  alert("Selamat datang di Perjalanan Zero Waste Anda!");
});

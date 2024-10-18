/// Animate Scroll
// Membuat instance IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  // Loop melalui semua entry yang terdeteksi
  entries.forEach((entry) => {
    console.log(entry); // Mencetak entry untuk debugging
    // Cek apakah elemen sedang terlihat di viewport
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Tambahkan kelas "show" jika terlihat
    } else {
      entry.target.classList.remove("show"); // Hapus kelas "show" jika tidak terlihat
    }
  });
});

// Memilih semua elemen dengan kelas "hidden"
const hiddenElements = document.querySelectorAll(".hidden");
// Mulai mengamati setiap elemen yang terpilih
hiddenElements.forEach((el) => observer.observe(el));

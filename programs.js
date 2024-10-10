// Mendefinisikan tanggal dan waktu tujuan sebagai waktu dalam milidetik
const tanggalTujuan = new Date("Oct 31, 2024 23:59:00").getTime();

// Mengatur interval untuk menghitung mundur setiap detik
const hitungMundur = setInterval(function () {
  // Mendapatkan waktu saat ini dalam milidetik
  const sekarang = new Date().getTime();

  // Menghitung selisih antara tanggal tujuan dan waktu saat ini
  const selisih = tanggalTujuan - sekarang;

  // Menghitung jumlah hari dengan membagi selisih dengan jumlah milidetik dalam satu hari
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));

  // Menghitung jam dengan mengambil sisa dari hari dan membaginya dengan jumlah milidetik dalam satu jam
  const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Menghitung menit dengan mengambil sisa dari jam dan membaginya dengan jumlah milidetik dalam satu menit
  const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));

  // Menghitung detik dengan mengambil sisa dari menit dan membaginya dengan jumlah milidetik dalam satu detik
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);

  // Mengambil elemen dengan id "teks" untuk menampilkan hasil
  const teks = document.getElementById("teks");

  // Mengupdate isi elemen dengan waktu yang tersisa
  teks.innerHTML =
    hari +
    " hari " +
    jam +
    " jam " +
    menit +
    " menit " +
    detik +
    " detik lagi ";

  // Mengecek jika waktu sudah habis
  if (selisih <= 0) {
    // Menghentikan interval jika waktu sudah habis
    clearInterval(hitungMundur);
    // Mengupdate isi elemen untuk menampilkan pesan waktu sudah habis
    teks.innerHTML = "Waktu sudah habis";
  }
}, 1000); // Menjalankan fungsi setiap 1000 milidetik (1 detik)

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

// Menunggu hingga seluruh konten halaman telah dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Membuat array yang berisi ID dari semua tombol 'Tampilkan lebih banyak'
  const readMoreButtons = [
    "readMoreBtn1", // ID tombol pertama
    "readMoreBtn2", // ID tombol kedua
    "readMoreBtn3", // ID tombol ketiga
    "readMoreBtn4", // ID tombol keempat
    "readMoreBtn5", // ID tombol kelima
    "readMoreBtn6", // ID tombol keenam
  ];

  // Melakukan iterasi atau perulangan pada setiap ID tombol di dalam array
  readMoreButtons.forEach((buttonId) => {
    // Mendapatkan elemen tombol berdasarkan ID-nya
    const button = document.getElementById(buttonId);

    // Menambahkan event listener untuk menangani klik pada tombol
    button.addEventListener("click", function () {
      // Mendapatkan elemen 'dots' (tiga titik yang menunjukkan teks terpotong)
      // 'dots' disesuaikan dengan angka terakhir dari ID tombol (misalnya, 'dots1', 'dots2', dll.)
      const dots = document.getElementById(
        `dots${buttonId.charAt(buttonId.length - 1)}`
      );

      // Mendapatkan elemen 'more' (teks yang akan ditampilkan lebih banyak)
      // 'more' disesuaikan dengan angka terakhir dari ID tombol
      const moreText = document.getElementById(
        `more${buttonId.charAt(buttonId.length - 1)}`
      );

      // Mengecek apakah teks 'more' sudah terlihat atau tidak (inline artinya terlihat)
      const isExpanded = moreText.style.display === "inline";

      // Jika teks lebih sudah terlihat, maka kita sembunyikan lagi
      if (isExpanded) {
        dots.style.display = "inline"; // Menampilkan kembali 'dots' (titik-titik)
        moreText.style.display = "none"; // Menyembunyikan teks lebih
        button.innerText = "Tampilkan lebih banyak"; // Mengubah teks tombol menjadi 'Tampilkan lebih banyak'
      }
      // Jika teks lebih belum terlihat, maka kita tampilkan
      else {
        dots.style.display = "none"; // Menyembunyikan 'dots'
        moreText.style.display = "inline"; // Menampilkan teks lebih
        button.innerText = "Sembunyikan"; // Mengubah teks tombol menjadi 'Sembunyikan'
      }
    });
  });
});

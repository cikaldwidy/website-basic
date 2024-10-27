// scroll explore
$(document).ready(function () {
  $("#scrollButton").on("click", function (event) {
    event.preventDefault(); // Mencegah default action
    $("html, body").animate(
      {
        scrollTop: $("#marqueForm").offset().top, // Mengatur scroll ke posisi bagian tujuan
      },
      1500
    ); // Durasi animasi dalam milidetik
  });
});

// js jquery membuat teks disembunyikan content-4
$(document).ready(function () {
  // Membuat array yang berisi ID dari semua tombol 'Tampilkan lebih banyak'
  const readMoreButtons = [
    "readMoreBtn1",
    "readMoreBtn2",
    "readMoreBtn3",
    "readMoreBtn4",
    "readMoreBtn5",
    "readMoreBtn6",
  ];

  // Melakukan iterasi pada setiap ID tombol di dalam array
  readMoreButtons.forEach((buttonId) => {
    $(`#${buttonId}`).on("click", function () {
      const index = buttonId.charAt(buttonId.length - 1);
      const $dots = $(`#dots${index}`);
      const $moreText = $(`#more${index}`);

      const isExpanded = $moreText.css("display") === "inline";

      if (isExpanded) {
        $dots.css("display", "inline");
        $moreText.css("display", "none");
        $(this).text("Tampilkan lebih banyak");
      } else {
        $dots.css("display", "none");
        $moreText.css("display", "inline");
        $(this).text("Sembunyikan");
      }
    });
  });
});

//js-jquery form hubungi kami content-6
$(document).ready(function () {
  $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Validasi form
    if (
      $("#nameInput").val() === "" ||
      $("#genderInput").val() === "" ||
      $("#emailInput").val() === "" ||
      $("#phoneInput").val() === "" ||
      $("#addressInput").val() === ""
    ) {
      alert("Terjadi kesalahan, mohon lengkapi field!");
    } else {
      alert("Jawaban anda berhasil dikirim!");
      // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
      $(this).trigger("reset"); // Reset form setelah pengiriman
    }
  });
});
// back to top
$(document).ready(function () {
  // Menampilkan atau menyembunyikan tombol saat menggulir
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#backToTop").fadeIn(); // Tampilkan tombol
    } else {
      $("#backToTop").fadeOut(); // Sembunyikan tombol
    }
  });

  // logic klik pada tombol
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500); // Menggunakan animasi
  });
});

// animasi pop up
$(document).ready(function () {
  $("#getStarted").on("click", function (event) {
    event.preventDefault();
    $("#verificationModal").modal("show");
  });

  $("#loginForm").on("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    showModal(); // Menampilkan modal
  });
  // Menutup modal hanya jika tombol OK diklik
  $(".close").on("click", function () {
    $("#verificationModal").modal("hide");
  });
  $(".close-btn").on("click", function () {
    // Setelah modal ditutup, pindahkan pengguna ke halaman homepage.html
    window.location.href = "login.html"; // Pindah ke halaman homepage.html
  });
  $(".close-btn2").on("click", function () {
    // Setelah modal ditutup, pindahkan pengguna ke halaman homepage.html
    window.location.href = "index.html"; // Pindah ke halaman homepage.html
  });
});
// pop up log in
$(document).ready(function () {
  $("#getLogin").on("click", function (event) {
    event.preventDefault();
    $("#verificationModal").modal("show");
  });

  $("#loginForm").on("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    showModal(); // Menampilkan modal
  });
  // Menutup modal hanya jika tombol OK diklik
  $(".close").on("click", function () {
    $("#verificationModal").modal("hide");
  });
  $(".close-btn").on("click", function () {
    // Setelah modal ditutup, pindahkan pengguna ke halaman homepage.html
    window.location.href = "login.html"; // Pindah ke halaman homepage.html
  });
});
//

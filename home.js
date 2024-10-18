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
// INTERVAL C-4

// INTERVAL C-5

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

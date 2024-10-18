$(document).ready(function() {
  $("#toggleInfoInfantCare").click(function() {
      $("#moreInfoInfantCare").slideToggle("slow", function() {
          if ($(this).is(":visible")) {
              $("#toggleInfoInfantCare").text("Sembunyikan Informasi");
          } else {
              $("#toggleInfoInfantCare").text("Informasi Lebih Lanjut");
          }
      });
  });
  $("#toggleInfoToddlerProgram").click(function() {
      $("#moreInfoToddlerProgram").slideToggle("slow", function() {
          if ($(this).is(":visible")) {
              $("#toggleInfoToddlerProgram").text("Sembunyikan Informasi");
          } else {
              $("#toggleInfoToddlerProgram").text("Informasi Lebih Lanjut");
          }
      });
  });
  $("#toggleInfoPre-SchoolProgram").click(function() {
      $("#moreInfoPre-SchoolProgram").slideToggle("slow", function() {
          if ($(this).is(":visible")) {
              $("#toggleInfoPre-SchoolProgram").text("Sembunyikan Informasi");
          } else {
              $("#toggleInfoPre-SchoolProgram").text("Informasi Lebih Lanjut");
          }
      });
  });
  $("#toggleInfoPre-KindergartenProgram").click(function() {
      $("#moreInfoPre-KindergartenProgram").slideToggle("slow", function() {
          if ($(this).is(":visible")) {
              $("#toggleInfoPre-KindergartenProgram").text("Sembunyikan Informasi");
          } else {
              $("#toggleInfoPre-KindergartenProgram").text("Informasi Lebih Lanjut");
          }
      });
  });

  $('.card').hover(
      function() {
          $(this).addClass('shadow-lg');
      }, 
      function() {
          $(this).removeClass('shadow-lg');
      }
  );

  

// Countdown Timer
function updateTimer() {
    var future = Date.parse("2024-10-31T00:00:00");
    var now = new Date();
    var diff = future - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var mins = Math.floor(diff / (1000 * 60));
    var secs = Math.floor(diff / 1000);

    $('#teks').html(days + " hari " + hours % 24 + " jam " + mins % 60 + " menit " + secs % 60 + " detik");
}
setInterval(updateTimer, 1000);
});
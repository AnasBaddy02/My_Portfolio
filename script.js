$(document).ready(function () {

  flg = true;
  $("#menuBtn").click(function (e) {
    if (flg) {
      setTimeout(function () {
        $("#menuBtnIcon").removeClass("bi-list-nested");
        $("#menuBtnIcon").addClass("bi-x-circle");
      }, 80);
      $(".nav-item").addClass("mx-auto");
      flg = false;
    }
    else {
      setTimeout(function () {
        $("#menuBtnIcon").removeClass("bi-x-circle");
        $("#menuBtnIcon").addClass("bi-list-nested");
      }, 80);
      setTimeout(function () {
        $(".nav-item").removeClass("mx-auto");
      }, 250);
      flg = true;
    }
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
      $("#goBack").show(500);
    }
    else {
      $("#goBack").hide(500);
    }
    // sticky-top section
    // if($(document).scrollTop()<700 ){
    //   $("#navLink1").addClass("text-primary");
    //   $("#navLink2").removeClass("text-primary");
    // }
    // if($(document).scrollTop()>700 ){
    //   $("#navLink2").addClass("text-primary");
    //   $("#navLink1").removeClass("text-primary");
    //   $("#navLink3").removeClass("text-primary");
    // }
    // if($(document).scrollTop()>1400 ){
    //   $("#navLink3").addClass("text-primary");
    //   $("#navLink2").removeClass("text-primary");
    //   $("#navLink4").removeClass("text-primary");
    // }
    // if($(document).scrollTop()>2000 ){
    //   $("#navLink4").addClass("text-primary");
    //   $("#navLink3").removeClass("text-primary");
    // }
  });
  $("#goBack").click(function (e) {
    $(document).scrollTop(0);
  });
});
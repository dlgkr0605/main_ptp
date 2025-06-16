

//////////////////메인슬라이드////////////////
$(document).ready(function () {
  $(".slide").click(function () {
    $(".slide").removeClass("active");
    $(this).addClass("active");
  });
});

///////////////////pager/////////////////
$(document).ready(function () {
  // 페이저 클릭 시
  $(".pager-dot").click(function () {
    var index = $(this).data("index");
    updateSlide(index);
  });

  // 슬라이드 클릭 시
  $(".slide").click(function () {
    var index = $(this).data("index");
    updateSlide(index);
  });

  // 공통 슬라이드/페이저 전환 함수
  function updateSlide(index) {
    $(".slide").removeClass("active");
    $('.slide[data-index="' + index + '"]').addClass("active");

    $(".pager-dot").removeClass("active");
    $('.pager-dot[data-index="' + index + '"]').addClass("active");
  }
});
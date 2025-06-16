$(function () {
  // 탭 전환
  $('.tab-btn').on('click', function (e) {
    e.preventDefault();
    $('.tab-btn').removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('edu')) {
      $('.edu-box').removeClass('hidden');
      $('.work-box').addClass('hidden');
    } else {
      $('.work-box').removeClass('hidden');
      $('.edu-box').addClass('hidden');
    }
  });

  // 슬라이드 롤링 함수
  function setupSlide(mainId, thumbContainerSelector, arrowSelector) {
    const $main = $(mainId);
    const $thumbsContainer = $(thumbContainerSelector);

    function bindThumbClick() {
      $thumbsContainer.find('.thumb').off('click').on('click', function () {
        const temp = $main.attr('src');
        $main.attr('src', $(this).attr('src'));
        $(this).attr('src', temp);
      });
    }

    bindThumbClick();

    $(arrowSelector).on('click', function (e) {
      e.preventDefault();
      const currentSrc = $main.attr('src');
      const $firstThumb = $thumbsContainer.find('.thumb').first();
      const nextSrc = $firstThumb.attr('src');

      // 메인과 첫 썸네일 교체
      $main.attr('src', nextSrc);
      $firstThumb.remove();

      // 썸네일 다시 추가 (맨 뒤로 보내기)
      $thumbsContainer.append(`<img src="${currentSrc}" alt="" class="thumb">`);

      // 다시 이벤트 바인딩
      bindThumbClick();
    });
  }

  // 각각 슬라이드 적용
  setupSlide('#main-edu', '.edu-thumbs', '.edu-next');
  setupSlide('#main-work', '.work-thumbs', '.work-next');
});

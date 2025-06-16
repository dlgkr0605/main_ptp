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
        const newSrc = $(this).attr('src');
        const oldSrc = $main.attr('src');
        const $thumb = $(this);

        // 부드럽게 교체
        $main.fadeOut(300, function () {
          $main.attr('src', newSrc).fadeIn(300);
          $thumb.attr('src', oldSrc); // 썸네일과 교체
        });
      });
    }

    bindThumbClick();

    $(arrowSelector).on('click', function (e) {
      e.preventDefault();
      const currentSrc = $main.attr('src');
      const $firstThumb = $thumbsContainer.find('.thumb').first();
      const nextSrc = $firstThumb.attr('src');

      // 부드럽게 대표 이미지 변경
      $main.fadeOut(300, function () {
        $main.attr('src', nextSrc).fadeIn(300);
      });

      // 썸네일 롤링
      $firstThumb.remove();
      $thumbsContainer.append(`<img src="${currentSrc}" alt="" class="thumb">`);

      // 새로 추가된 썸네일 이벤트 다시 바인딩
      bindThumbClick();
    });
  }

  // 각각 슬라이드에 적용
  setupSlide('#main-edu', '.edu-thumbs', '.edu-next');
  setupSlide('#main-work', '.work-thumbs', '.work-next');
});

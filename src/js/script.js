
jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger ").on("click", function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
          openDrawer();
        } else {
          closeDrawer();
        }
      });

      // backgroundまたはページ内リンクをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
      });

      // drawerにクリックすると閉じる
      $(document).on("click", ".js-drawer", function (event) {
        if (event.target.tagName !== "A") {
          closeDrawer();
        }
      });

      // resizeイベント
      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeDrawer();
        }
      });
    });

    function openDrawer() {
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
    }
  });

  //スクロールでヘッダーの色を変更
  $(function () {
    $(window).on('scroll', function () {
        if ($('.vision , .thanks-top').height() < $(this).scrollTop()) {
            $('.js-header').addClass('change-color');
      } else {
            $('.js-header').removeClass('change-color');
      }
    });
  });

// 最後の.solutions-cardにクラスを追加する
var solutionsCards = document.querySelectorAll('.solutions-card');
if (solutionsCards.length > 0) {
  solutionsCards[solutionsCards.length - 1].classList.add('last-card');
}

//ドロワー展開時に背景の要素をスクロールできないようにする
$(function () {
  // ドロワー展開時に背景のスクロールを無効にする
  $(".js-hamburger, .js-drawer").click(function () {
    $("body").toggleClass("scroll-prevent");
  });

  // ページ遷移後にoverflowをリセットする
  $(window).on('unload', function() {
    $("body").css({ height: "", overflow: "" });
  });
});
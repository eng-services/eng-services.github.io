$(document).ready(function () {
    $('.popup-video').magnificPopup({

        type: 'iframe',

    });
    $('.popup-video-inline').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'custom-popup-class',
        callbacks: {
            open: function () {

                // https://github.com/dimsemenov/Magnific-Popup/issues/125
                $('html').css('margin-right', 0);

                // Play video on open:
                $(this.content).find('video')[0].play();

            },
            close: function () {

                // Reset video on close:
                $(this.content).find('video')[0].load();

            }
        }
    });
    /* scroll */
    var oldactive = $('.sub-nav-menu .active');
    var totoparea = $('.projects-areas').offset().top,
        projectsh = $('.projects-areas').outerHeight();
    $('.sub-nav-menu a').click(function () {
        var target = $($(this).attr('href'));
        var li = $(this).closest('li');
        var header = $('.header').outerHeight();
        if (target.length > 0) {
            var top = target.offset().top;
            $('html, body').animate({
                scrollTop: top - header
            }, 1000);

        }
        return false;
    });
    var aArray = [];
    var aChildren = $(".sub-nav-area a");
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).bind('scroll', function () {
        var top = $('.sub-nav-area').offset().top,
            totop = $(window).scrollTop();
        var header = $('.header').outerHeight();
        if (totop > top - header) {
            $('.sub-nav-area').addClass('fix-nav');
            $('.sub-nav-area .sub-nav-menu').css('top', header);
        } else {
            $('.sub-nav-area .sub-nav-menu').css('top', false);
            $('.sub-nav-area').removeClass('fix-nav');
        }
        if (totop > totoparea - header & totop < totoparea - header + projectsh) {
            for (var i = 0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top - header - 40; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (totop >= divPos && totop < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").closest('li').addClass("active");
                } else {
                    $("a[href='" + theID + "']").closest('li').removeClass("active");
                }
            }
        }
    });
});
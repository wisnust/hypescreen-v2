$(document).ready(function() {


    // Navbar mobile
    var $topNav = $('.navbar-hypescreen .navbar-nav'),
        $sideNav = $('.sidenav nav'),
        $logoHeight = $('.navbar-hypescreen').height(),
        $topNav_height = $topNav.height(),
        $ratingsResult_width = $('.card-2 > .content > .ratings > .show-rating').width();

    $('#show-sidenav').click(function(event) {
        $topNav.add($sideNav).toggleClass('nav-open')
        $(this).toggleClass('active');
        // $('#nav-backdrop').fadeToggle(400);
    });

    // Right position button show ratings
    $('.card-2 > .content > .ratings > .action').css('left', 276 - $ratingsResult_width);
      
    
    // Open Ratings 
    $('.ratings > .show-rating > .result, .ratings > .action > .star, .ratings > .action > .reset').click(function(event) {
        $(this).parent().parent().parent().toggleClass('open-ratings')
    });

    // Load more
    $('.load-more > .action').click(function() {
        $(this).addClass('active');
    });

    // SideNav Prefix
    if ($(window).height() < 725) {
        $sideNav.css({
            overflow: 'auto',
            height: '620px'
        });
    }
    $sideNav.hover(function() {
        $('html, body').css('overflow', 'hidden');
    }, function() {
        $('html, body').css('overflow', 'auto');
    });

    $(window).on("resize", function() {

        $topNav.css('top', $logoHeight + $('.list-menu').height() + 40); // 40 is padding of .list-menu 
        $sideNav.css('top', $logoHeight);
        // $sideNav.css('top', $topNav_height + $logoHeight + 75);

        if ($(window).width() < 669 ) { 

            // More comment
            // $('.more-comments').on('shown.bs.collapse', function() {
            //     $(this).next().next().addClass('active');
            // });
            // $('.more-comments').on('hidden.bs.collapse', function() {
            //     $(this).next().next().removeClass('active');
            // }); 

            var $videoHeight = $('.card > .card-body > .video > .video-inner').height(),
                $videoLikes = $('.card > .card-body > .content > .likes');

            $videoLikes.css('top', $videoHeight - 23);
            $videoLikes.css('opacity', 1);

            // Right position button show ratings mobile screen
            $('.card-2 > .content > .ratings > .action').css('left', 260 - $ratingsResult_width);

            // Move filter tags on mobile
            $('.filter').insertAfter('.content-subheading');
        }
        if ($(window).width() < 322 ) {

            // Right position button show ratings mobile screen
            $('.card-2 > .content > .ratings > .action').css('left', 210 - $ratingsResult_width);

        }

    });
    
     $(window).trigger("resize");   

    // Button Checkbox
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay(); 
        }
        init();
    });

    // Filter tags
    $('.btn-more-tags .btn-link').click(function() {
        $(this).find('span').html($('.btn-more-tags .btn-link span').text() == 'Less tags' ? 'More tags' : 'Less tags');
    });

    $('[data-toggle="popover"]').popover()

    $('.btn-tag').click(function() {
        $(this).toggleClass('active');
    });

    // Filter more tags
    $('#MoreTags').on('show.bs.collapse', function () {

        // Toggle class active
        $(this).addClass('active');
        $(this).on('hidden.bs.collapse', function () {
            $(this).removeClass('active');
        })

        // Toggle Filter Tags Desktop only
        if ($(window).width() > 669 ) {
            $('.filter-tags').slideUp(350);
            $(this).on('hide.bs.collapse', function () {
                $('.filter-tags').slideDown(350);
            })
        }

    });

    // Subscriber Modal on show input focus
    $('#subscriberModal').on('shown.bs.modal', function () {
        $('#email_subscribe').focus()
    })

    // Tooltip init
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // Browse post
    // $('.card-2').each(function(index, el) {
    //     $(this).hover(function() {
    //         $(this).parent().prevAll().addClass('unselected');
    //         $(this).parent().nextAll().addClass('unselected');
    //     }, function() {
    //         $(this).parent().prevAll().removeClass('unselected');
    //         $(this).parent().nextAll().removeClass('unselected');
    //     });
    // });

    // Toggle watchlist
    $('.act-toggle-watchlist').click(function(e) {
        $(this).toggleClass('active');
        e.preventDefault();
    });
});

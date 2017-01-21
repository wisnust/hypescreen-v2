$(document).ready(function() {


    // Navbar mobile
    var $topNav = $('.navbar-hypescreen .navbar-nav'),
        $sideNav = $('.sidenav nav'),
        $logoHeight = $('.navbar-hypescreen').height(),
        $topNav_height = $topNav.height();

        $('#show-sidenav').click(function(event) {
            $topNav.add($sideNav).toggleClass('nav-open')
            $(this).toggleClass('active');
            // $('#nav-backdrop').fadeToggle(400);
        });
          
    $(window).on("resize", function() {

        $topNav.css('top', $logoHeight);
        // $sideNav.css('top', $topNav_height + $logoHeight + 60);

        if ($(window).width() < 500 ) {
           
            // Arrow and Dot more comments
            $('.more-comments').on('shown.bs.collapse', function() {
                $(this).next().next().addClass('active');
            });
            $('.more-comments').on('hidden.bs.collapse', function() {
                $(this).next().next().removeClass('active');
            });

            // Move comments
            $('#newsfeed-post-1 .card-footer > .comments').prependTo('#newsfeed-post-1 .card-footer > .more-comments');
            $('#newsfeed-post-2 .card-footer > .comments').prependTo('#newsfeed-post-2 .card-footer > .more-comments');
        }

    });
    
     $(window).trigger("resize");  

    // $('#nav-backdrop').click(function(event) {
    //     $topNav.add($sideNav).toggleClass('nav-open');
    //     $(this).fadeToggle(400);
    // }); 


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
 
});

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
        $sideNav.css('top', $topNav_height + $logoHeight + 60);

    });
    
     $(window).trigger("resize");  

    // $('#nav-backdrop').click(function(event) {
    //     $topNav.add($sideNav).toggleClass('nav-open');
    //     $(this).fadeToggle(400);
    // }); 

});

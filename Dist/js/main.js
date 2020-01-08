$(function(){
    "use strict";
    $(".toggle-sidebar").on("click",function(){
        $(".content-area, .sidebar").toggleClass("no-sidebar");
    });
    $('.toggle-icon').on('click',function(){
        $(this).next(".child-links").slideToggle();
        $('.fa-angle-right').toggleClass('.down');
   
    });
});

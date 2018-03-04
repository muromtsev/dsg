

$(document).ready(function(){
//-----------menu-link button-------------------
    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var nav_link = $('.menu a');
    
    
    link.click(function(){        
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    nav_link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
//-----------scroll-------------------
    $('.menu a').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); 
        }
	    return false; 
    });
    
});
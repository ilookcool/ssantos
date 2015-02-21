$(function() {
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});
$('#fullpage').fullpage({
        //Navigation
        menu: true,
        anchors:['About Me', 'Skills', 'Portfolio', 'Contacts'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['About Me', 'Skills', 'Portfolio', 'Contacts'],
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        scrollBar: false,
        easing: 'easeInQuart',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : true,
        sectionsColor : ['#000000', '#000000', '#000000', '#000000'],
        paddingTop: '0em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
	
  $('#myform').submit(function(){
        $('#response').html("<b>Loading...</b>");
        $.ajax({
            type: 'POST',
            url: 'contact.php', 
            data: $(this).serialize()
        })
        .done(function(data){
            $('#response').html(data);
			setTimeout( "document.getElementById('myform').reset();",2000 );
			setTimeout( "$('#response').empty();",5000 );
        })
        .fail(function() {
            alert( "Ocorreu um erro!" );
        });
        return false;
 
    });
})
/* 
smooth scroll script 
(별로 안 스무스함)
*/

/* $(document).ready(function(){
  // $fn.scrollSpeed(step, speed, easing);
  jQuery.scrollSpeed(200, 800);
});

// Custom scrolling speed with jQuery
// Source: github.com/ByNathan/jQuery.scrollSpeed
// Version: 1.0.2

(function($) {

jQuery.scrollSpeed = function(step, speed, easing) {
    
    var $document = $(document),
        $window = $(window),
        $body = $('html, body'),
        option = easing || 'default',
        root = 0,
        scroll = false,
        scrollY,
        scrollX,
        view;
        
    if (window.navigator.msPointerEnabled)
    
        return false;
        
    $window.on('mousewheel DOMMouseScroll', function(e) {
        
        var deltaY = e.originalEvent.wheelDeltaY,
            detail = e.originalEvent.detail;
            scrollY = $document.height() > $window.height();
            scrollX = $document.width() > $window.width();
            scroll = true;
        
        if (scrollY) {
            
            view = $window.height();
                
            if (deltaY < 0 || detail > 0)
        
                root = (root + view) >= $document.height() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
        
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
        
                scrollTop: root
            
            }, speed, option, function() {
        
                scroll = false;
            
            });
        }
        
        if (scrollX) {
            
            view = $window.width();
                
            if (deltaY < 0 || detail > 0)
        
                root = (root + view) >= $document.width() ? root : root += step;
            
            if (deltaY > 0 || detail < 0)
        
                root = root <= 0 ? 0 : root -= step;
            
            $body.stop().animate({
        
                scrollLeft: root
            
            }, speed, option, function() {
        
                scroll = false;
            
            });
        }
        
        return false;
        
    }).on('scroll', function() {
        
        if (scrollY && !scroll) root = $window.scrollTop();
        if (scrollX && !scroll) root = $window.scrollLeft();
        
    }).on('resize', function() {
        
        if (scrollY && !scroll) view = $window.height();
        if (scrollX && !scroll) view = $window.width();
        
    });       
};

jQuery.easing.default = function (x,t,b,c,d) {

    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

})(jQuery); */

/* 더보기 btn */
function showMore() {
    const hide = document.querySelectorAll('.hide');
    // 첫번째 배열 표시
    // .from : 변수를 배열로 바꾸기 .slice : 배열 쪼개서 표현
    const first = Array.from(hide).slice(0, 4);
    // forEach : 각각의 배열에 함수들을 실행할때 씀.
    first.forEach(item => {
        item.classList.remove('hide');
    });
    if (hide.length <= 4) {
        hideMoreButton();
    }
    };

    function hideMoreButton() {
    document.getElementById('moreBtn').classList.add('hide');
    };
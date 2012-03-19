// do not access this with $("...")
// See http://codeimpossible.com/2010/01/13/solving-document-ready-is-not-a-function-and-other-problems/
jQuery(document).ready(function(){
    jQuery(".chzn-select").chosen();
    jQuery(".chzn-container").css({
        'margin-bottom': '4px',
        'margin-right': '15px',
        'margin-top': '6px'
    });
    jQuery(".chzn-container ul").css({
        'height': '200px'
    });
    jQuery(".chzn-container li").css({
        'float': 'none',
        'position': 'static',
        'border-left': 'none'
    });
    jQuery(".chzn-container .chzn-results").css('color', '#444444');
});

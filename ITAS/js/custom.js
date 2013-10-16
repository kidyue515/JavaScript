

function initMenu() {
    $('#tree ul ul').hide();
	$('#tree ul li').click(function() {
		$(this).parent().find("ul").slideUp('fast');
		$(this).parent().find("li").removeClass("current");
		$(this).find("ul").slideToggle('fast');
		$(this).toggleClass("current");
  });
}

function init() {
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    var height = h - document.getElementById('nav').offsetHeight - document.getElementById('top').offsetHeight-2;

    var MainFrameWidth = 1056;

    $('#primary_left').css('height',height);

    $('#primary_right').css('height',height);


    if (w > MainFrameWidth && w < 1260) {

        $('#primary_left').hide();

    }

    var oMenu = document.getElementById('primary_left');

    if (w > 1260) {
        if (oMenu.style.display == 'none') {
            $('#primary_left').show();

        }
    }

}
 
$(document).ready(function() {
	initMenu(); // Initialize the menu!
    init();
});

window.onresize = function () {
    init();
};


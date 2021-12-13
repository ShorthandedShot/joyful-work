/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 15000,
	//gap in pixels between the tickers
	gap: 30,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true,
  startVisible: true
});

$('.small-marquee').marquee({
	//duration in milliseconds of the marquee
	duration: 12000,
	//gap in pixels between the tickers
	gap: 15,
	//time in milliseconds before the marquee will start animating
	delayBeforeStart: 0,
	//'left' or 'right'
	direction: 'left',
	//true or false - should the marquee be duplicated to show an effect of continues flow
	duplicated: true,
  pauseOnHover: true,
  startVisible: true
});

// STICKY HEADERS

var stickyHeaders = (function() {

  var $window = $(window),
      $stickies;

  var load = function(stickies) {

    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

      $stickies = stickies.each(function() {

        var $thisSticky = $(this).wrap('<div class="followWrap" />');

        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight())
              .parent()
              .height($thisSticky.outerHeight());
      });

      $window.off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();
      });
    }
  };

  var _whenScrolling = function() {

    $stickies.each(function(i) {

      var $thisSticky = $(this),
          $stickyPosition = $thisSticky.data('originalPosition');

      if ($stickyPosition <= $window.scrollTop()) {

        var $nextSticky = $stickies.eq(i + 1),
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

        $thisSticky.addClass("fixed");

        if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

          $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
        }

      } else {

        var $prevSticky = $stickies.eq(i - 1);

        $thisSticky.removeClass("fixed");

        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".followMeBar"));
});

//STICKY HEADER SLIDE DOWN/FADE OUT
$(window).scroll(function() {
if ($(this).scrollTop()>240) {
$('.topBar').slideDown( 200, "linear");
} else {
$('.topBar').fadeOut(200, "linear");
}
});

// GRID RESIZE....

// function resizeGridItem(item){
//   grid = document.getElementsByClassName("grid")[0];
//   rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//   rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//   rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//     item.style.gridRowEnd = "span "+rowSpan;
// }
//
// function resizeAllGridItems(){
//   allItems = document.getElementsByClassName("item");
//   for(x=0;x<allItems.length;x++){
//     resizeGridItem(allItems[x]);
//   }
// }
//
// function resizeInstance(instance){
// 	item = instance.elements[0];
//   resizeGridItem(item);
// }
//
// window.onload = resizeAllGridItems();
// window.addEventListener("resize", resizeAllGridItems);
//
// allItems = document.getElementsByClassName("item");
// for(x=0;x<allItems.length;x++){
//   imagesLoaded( allItems[x], resizeInstance);
// }

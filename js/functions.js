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

// FEEDIFY HEADER

$(function() {
$('.feedify').feedify();
});

//STICKY HEADER SLIDE DOWN/FADE OUT
$(window).scroll(function() {
if ($(this).scrollTop()>240) {
$('.topBar').fadeIn( 150, "linear");
} else {
$('.topBar').fadeOut(150, "linear");
}
});

// dialog

$(document).ready(function() {
var dialogOptions = {
autoOpen: false,
width: 400,
height: 500,
resizable: false,
};
$("#intro1").dialog(dialogOptions);

$("#toggle_intro").click(function() {
if(!$("#intro1").dialog("isOpen")) {
$("#intro1").dialog("open");
} else {
$("#intro1").dialog("close");
}
});

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

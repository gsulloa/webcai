const options = {
	pager:false
}
const auspiciosOptions = {
	ticker: true,
    speed: 9000,
    minSlides: 1,
    maxSlides: 1,
    tickerHover: true,
    useCSS: false,
    slideMargin: 15,
    slideWidth: 250,
    slideHeight: 50

}

$(document).ready(function () {
	$('.first-carrousel').bxSlider(options);
	$('.second-carrousel').bxSlider(options);
	$('.third-carrousel').bxSlider(options);
	$('ul.auspicios').bxSlider(auspiciosOptions);
})


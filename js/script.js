$(document).ready(function() {
	$('.convenient__slider').slick({
		arrows:true, 
		dots:true, 
		slidesToShow:4, 
		slidesToScroll:1, 
		adaptiveHeight:true,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					
					slidesToShow:3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2,
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow:1,
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow:1,
					arrows:false,
				}
			}
		]
	});
});
const anchors = document.querySelectorAll('a[href*="#"]')

for(let anchor of anchors){
	anchor.addEventListener("click", function(event){
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth", 
			block: "start"
		})
	})
}

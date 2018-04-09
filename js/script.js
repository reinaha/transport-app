//  // slide show //
//  function showSection2(){

//  	console.log('hi');

//  	// var oCurrent = document.querySelector('.current');
//  	// oCurrent.classList.remove('current');

//  	// var oNext;
//  	// if(oCurrent.nextElementSibling != null){
//  	// 	oNext = oCurrent.nextElementSibling;
//  	// }else{
//  	// 	oNext = oCurrent.parentNode.firstElementChild;
//  	// }

//  	// oNext.classList.add('current');

//  }

//  //--main--//
// var oNext1 = document.querySelector('.section1Next');

// console.log(oNextButton);
// oNextButton.addEventListener('click',showSection2);


$(function(){

	$('.section1-next').on('click',function(){
		$('.section').removeClass('current');
		$('.section2').addClass('current');
	});

	$('.section2-next').on('click',function(){
		$('.section').removeClass('current');
		$('.section3').addClass('current');
	});

	$('.section3-next').on('click',function(){
		$('.section').removeClass('current');
		$('.section4').addClass('current');
	});

	$('.section4-next').on('click',function(){
		$('.section').removeClass('current');
		$('.section1').addClass('current');
	});

	$('.section1-prev').on('click',function(){
		$('.section').removeClass('current');
		$('.section4').addClass('current');
	});

	$('.section2-prev').on('click',function(){
		$('.section').removeClass('current');
		$('.section1').addClass('current');
	});

	$('.section3-prev').on('click',function(){
		$('.section').removeClass('current');
		$('.section2').addClass('current');
	});

	$('.section4-prev').on('click',function(){
		$('.section').removeClass('current');
		$('.section3').addClass('current');
	});

	$('.fa-info-circle').on('click',function(){
		$('.section').removeClass('current');
		$('.sectionInfor').addClass('current');
	});

	$('.sectionInfor-prev').on('click',function(){
		$('.section').removeClass('current');
		$('.section2').addClass('current');
	});

	$('.button-dollar').on('click',function(){
		$('.calculator').toggleClass('show');
		$('.button-dollar').toggleClass('click');
		$('.button-dollar>.fa').toggleClass('fa-car');
		// $('.button-dollar>.fa').addClass('fa-car');
	});



	// Number($('#days').val());

});



// Car List

$('#section1>footer>a>.fa-angle-right').on('click',function(){

	var oNumOfPeople = Number($('#ppl').val());
	var oNumOfDays = Number($('#days').val());

	if((1 <= oNumOfPeople) && (2 >= oNumOfPeople) && (1 <= oNumOfDays) && (11 > oNumOfDays)){

		$('.CarList1').addClass('opacity');
		// $('.CarList>li').not(this).removeClass("opacity");

	}else{
		$('.CarList1').removeClass('opacity');
	}

	if((1 <= oNumOfPeople) && (6 > oNumOfPeople) && (3 <= oNumOfDays) && (11 > oNumOfDays)){
		$('.CarList2').addClass('opacity');
		// $('.CarList>li').not(this).removeClass("opacity");
		// $('.CarList1').addClass('opacity');
	}else{
		$('.CarList2').removeClass('opacity');
	}

	if((2 <= oNumOfPeople) && (7 > oNumOfPeople) && (2 <= oNumOfDays) && (16 > oNumOfDays)){
		$('.CarList4').addClass('opacity');
		// $('.CarList>li').not(this).removeClass("opacity");
		// $('.CarList1').addClass('opacity');
	}else{
		$('.CarList4').removeClass('opacity');
	}

	if(2 > oNumOfPeople && (1 <= oNumOfDays) && (6 > oNumOfDays)){
		$('.CarList3').addClass('opacity');
		// $('.CarList>li').not(this).removeClass("opacity");
		// $('.CarList1').addClass('opacity');
	}else{
		$('.CarList3').removeClass('opacity');
	}

});

// Gas fee

$('#StartFrom,#StartTo').on('change',function(){
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-dollar').addClass('animated bounce').one(animationEnd, function() {
        $(this).removeClass('animated bounce');
    });
});

$('#StartFrom,#StartTo').on('change',function(){

	var oStartFromVal = $('#StartFrom').val();
	var oStartToVal = $('#StartTo').val();
	var kms = 0;
	var litres = 0;

	if((oStartFromVal == 'Auckland') && (oStartToVal == 'Wellington')){
		// $('.Km').text("643km");
		kms = 643;
		litres = 32.15;

	}else if((oStartFromVal == 'Wellington') && (oStartToVal == 'Auckland')){
		// console.log('not AKL to WLG');
		kms = 643;
		litres = 32.15;

	}else if((oStartFromVal == 'Auckland') && (oStartToVal == 'Christchurch')){

		kms = 1218;
		litres = 60.9;

	}else if((oStartFromVal == 'Christchurch') && (oStartToVal == 'Auckland')){
		
		kms = 1218;
		litres = 60.9;

	}else if((oStartFromVal == 'Wellington') && (oStartToVal == 'Christchurch')){

		kms = 580;
		litres = 29;

	}else if((oStartFromVal == 'Christchurch') && (oStartToVal == 'Wellington')){
		
		kms = 580;
		litres = 29;

	}else if((oStartFromVal == 'Auckland') && (oStartToVal == 'Auckland')){
		
		kms = 0;
		litres = 0;

	}else if((oStartFromVal == 'Wellington') && (oStartToVal == 'Wellington')){
		
		kms = 0;
		litres = 0;

	}else if((oStartFromVal == 'Christchurch') && (oStartToVal == 'Christchurch')){
		
		kms = 0;
		litres = 0;

	}else {

		kms = 0;
		litres = 0;

	}

	$('.Km').text(kms + "km");
	$('.L').text(litres + "L");

	var oAmoutOfL = Number(litres);
	$('.TotalFuelFee').text("$"+(oAmoutOfL*1.7).toFixed(2));

	var oTotalFuelFee = Number((oAmoutOfL*1.7).toFixed(2));
	$('.FuelFeePer').text("$"+(oTotalFuelFee/2)+" per person");

	$('.C-fuel').text(" $ "+ oTotalFuelFee);

});






//caculator

$('.button-dollar').on('click',function(){

	// console.log('hi');
	// var oNumOfPeople = Number($('#ppl').val());
	var oNumOfDays = Number($('#days').val());

	var oPriceOfCar = $('#SmallCarPrice').data('price');
	var oPriceOfFuel = Number($('.TotalFuelFee').text().replace(/[\$,a-zA-Z]/g,''));
	var oTotalCost = Number(oPriceOfCar*oNumOfDays+oPriceOfFuel);
	
	$('.C-days').text(" x "+oNumOfDays+ " Days ");

	$('.C-totalCost').text(" $ "+(oPriceOfCar*oNumOfDays+oPriceOfFuel));
	$('.C-totalCostP').text(" $ "+(oTotalCost/2));

});

$('.section3-next').on('click',function(){
	
	var oNumOfDays = Number($('#days').val());

	var oPriceOfCar = $('#SmallCarPrice').data('price');
	var oPriceOfFuel = Number($('.TotalFuelFee').text().replace(/[\$,a-zA-Z]/g,''));
	var oTotalCost = Number(oPriceOfCar*oNumOfDays+oPriceOfFuel);

	$('.T-totalCost').text(" $ "+(oPriceOfCar*oNumOfDays+oPriceOfFuel));
	$('.T-totalCostP').text(" $ "+(oTotalCost/2));

	});




// selected buttons

$('#SmallCarButton').on('click',function(){

	// console.log('hi');
	$(this).addClass("selected");
	$('.CarAddButton').not(this).removeClass("selected");

	var oPriceOfCar = $('#SmallCarPrice').data('price');
	$('.C-car').text(" $ "+oPriceOfCar);

	// $('.button-dollar').addClass('animated bounce');

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-dollar').addClass('animated bounce').one(animationEnd, function() {
        $(this).removeClass('animated bounce');
    });

});

$('#LargeCarButton').on('click',function(){

	$(this).addClass("selected");
	$('.CarAddButton').not(this).removeClass("selected");

	var oPriceOfCar = $('#LargeCarPrice').data('price');
	$('.C-car').text(" $ "+oPriceOfCar);

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-dollar').addClass('animated bounce').one(animationEnd, function() {
        $(this).removeClass('animated bounce');
    });

});

$('#MortobikeButton').on('click',function(){

	$(this).addClass("selected");
	$('.CarAddButton').not(this).removeClass("selected");
	
	var oPriceOfCar = $('#MortobikePrice').data('price');
	$('.C-car').text(" $ "+oPriceOfCar);

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-dollar').addClass('animated bounce').one(animationEnd, function() {
        $(this).removeClass('animated bounce');
    });

});

$('#MortoHomeButton').on('click',function(){

	$(this).addClass("selected");
	$('.CarAddButton').not(this).removeClass("selected");
	
	var oPriceOfCar = $('#MortoHomePrice').data('price');
	$('.C-car').text(" $ "+oPriceOfCar);

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	$('.button-dollar').addClass('animated bounce').one(animationEnd, function() {
        $(this).removeClass('animated bounce');
    });

});




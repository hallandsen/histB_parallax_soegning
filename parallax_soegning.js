$(document).ready(function() {
// init controller
	var controller = new ScrollMagic.Controller();

	var windowHeight = $(window).height();
	console.log('windowHeight '+windowHeight);

	var leftW = $('.left').width();
		var brickW = $('#brick22').width();
		var x = leftW - brickW;
		var xPos = x + 24;
		console.log('xPos: '+xPos);
	//Tweens 
	var horizontalTweenB22 = new TweenMax.to('#brick22', 0.5, {

		x: xPos
	});

	var colorTween = new TweenMax.to('#svg-clr', 0.5, {
		fill: '#F15548'
	});

//INTRO

	//tweens
	var timeLineIntro1 = new TimelineMax();
	timeLineIntro1
		.to('#scene-intro-1 h4', 1, {opacity : 0, scale: 0.5})
		.to('#arrow-up', 1, {opacity : 0, scale: 0.5, delay: -1})
		.to('#arrow-down', 1, {opacity : 0, scale: 0.5, delay: 1});

	var timeLineIntro2 = new TimelineMax();
	timeLineIntro2
		.from('#intro-container-2', 1, {opacity : 0, scale: 0, delay:0.3});

	var timeLineIntro2span = new TimelineMax();
	timeLineIntro2span
		.to('#intro-4-span', 1, {opacity:1, ease:Power2.easeIn});

	var timeLineIntro3 = new TimelineMax();
	timeLineIntro3
		.from('#intro-container-4', 1, {opacity : 0, scale: 0});

	//scenes
	var intro1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '100%'
	}).setTween(timeLineIntro1);

	var intro1 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-1',
		triggerHook:'onLeave',
		duration: '50%'
	}).setPin('#intro-container-1');

	//SECTION 2 - DU SKAL LÆRE EN METODE
	var intro2 = new ScrollMagic.Scene({
		triggerElement: '#arrow-down',
		triggerHook:'onLeave',
		//offset: '100',
		duration: '330%'
	}).setPin('#intro-container-2');

	var intro2Time = new ScrollMagic.Scene({
		triggerElement: '#arrow-down',
		//triggerHook: 'onLeave',
		// offset: '1000',
		duration: '100%'
	}).setTween(timeLineIntro2);

	var intro2Expl = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-4 .right .spacer',
		triggerHook:'onLeave',
		duration: '230%'
		//offset: "100"
	}).setPin('#intro-container-3');

	var intro2ExplfadeIn = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-6',
		triggerHook: 'onEnter',
		duration: '100%'
	}).setTween(timeLineIntro2span);

// TRAKT
	var trakt1Pin = new ScrollMagic.Scene({
		triggerElement:'#trakt-1',
		triggerHook: 'onLeave',
		duration: '1000%'
	}).setPin('#trakt-1', {pushFollowers: false});

	var trakt2Pin = new ScrollMagic.Scene({
		triggerElement:'#trakt-2',
		triggerHook: 'onLeave',
		duration: '900%'
	}).setPin('#trakt-2', {pushFollowers: false});

	var trakt3Pin = new ScrollMagic.Scene({
		triggerElement:'#trakt-3',
		triggerHook: 'onLeave',
		duration: '800%'
	}).setPin('#trakt-3', {pushFollowers: false});

	var trakt4Pin = new ScrollMagic.Scene({
		triggerElement:'#trakt-4',
		triggerHook: 'onLeave',
		duration: '700%'
	}).setPin('#trakt-4', {pushFollowers: false});

	var traktTxtPin = new ScrollMagic.Scene({
		triggerElement:'#trakt-txt .right .spacer',
		triggerHook: 'onLeave',
		duration: '100%'
	}).setPin('#trakt-txt-container', {pushFollowers: false});

	var trktList1 = new ScrollMagic.Scene({
		triggerElement: '#scene-trakt-list-1',
		triggerHook: 'onLeave',
		duration: '400%'
	}).setPin('#trakt-list-1', {pushFollowers: false})

	var trktList2 = new ScrollMagic.Scene({
		triggerElement: '#scene-trakt-list-2',
		triggerHook: 'onLeave',
		duration: '300%'
	}).setPin('#trakt-list-2', {pushFollowers: false})

	var trktList3 = new ScrollMagic.Scene({
		triggerElement: '#scene-trakt-list-3',
		triggerHook: 'onLeave',
		duration: '200%'
	}).setPin('#trakt-list-3', {pushFollowers: false})

	var trktList4 = new ScrollMagic.Scene({
		triggerElement: '#scene-trakt-list-4',
		triggerHook: 'onLeave',
		duration: '100%'
	}).setPin('#trakt-list-4', {pushFollowers: false})





// METODEN KALDES ........
	var intro3 = new ScrollMagic.Scene({
		triggerElement: '#scene-intro-8 .left .spacer',
		triggerHook: 'onLeave',
		duration: '230%'
	}).setPin('#intro-container-4');

	var intro3Time = new ScrollMagic.Scene({
		triggerElement: '#scene-trkt-list',
		triggerHook: 'onLeave',
		duration: '80%'
	}).setTween(timeLineIntro3);

	controller.addScene([
		intro1,intro1Time,
		intro2, intro2Time, intro2Expl, intro2ExplfadeIn,
		intro3, intro3Time,
		trakt1Pin, trakt2Pin, trakt3Pin, trakt4Pin, traktTxtPin,
		trktList1, trktList2, trktList3, trktList4
	]);

////////////////////////////////// BRIKKER /////////////////////////////////////////////

//SPØRGSMÅLSTEGN BEGYNDER

	//Timeslines
	
	var brick2FadeIn = new TimelineMax();
	brick2FadeIn.to('#brick-2', 1, {opacity: 1});

	var brick3FadeIn = new TimelineMax();
	brick3FadeIn.to('#brick-3', 1, {opacity: 1});

	var brick4FadeIn = new TimelineMax();
	brick4FadeIn.to('#brick-4', 1, {opacity: 1});

	var brick1Parallax = new TimelineMax();
	brick1Parallax.to('#brick-1', 1, {y:'-40%', ease: Linear.easeNone});

	var brick2Parallax = new TimelineMax();
	brick2Parallax.to('#brick-2', 1, {y:'-60%', ease: Linear.easeNone});

	var brickTxtParallax = new TimelineMax();
	brickTxtParallax.to('#brick-txt', 1, {y:'-80%', ease: Linear.easeNone});

	var brick3Parallax = new TimelineMax();
	brick3Parallax.to('#brick-3', 1, {y:'-110%', ease: Linear.easeNone});

	var brick4Parallax = new TimelineMax();
	brick4Parallax.to('#brick-4', 1, {y:'-120%', ease: Linear.easeNone});


	//Scenes
	var brikker1 = new ScrollMagic.Scene({
		triggerElement: '#brick-1',
		triggerHook:'onLeave',
		duration: '500%'
	}).setPin('#brick-1', {pushFollowers: false});

	var brikker1Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-1',
		triggerHook:'onLeave',
		duration: '500%'
	}).setTween(brick1Parallax);

	//Brick layer 2
	var brikker2 = new ScrollMagic.Scene({
		triggerElement: '#brick-2',
		triggerHook:'onLeave',
		duration: '400%'
	}).setPin('#brick-2', {pushFollowers: false});

	var brikker2Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2',
		triggerHook:'onLeave',
		duration: '400%'
	}).setTween(brick2Parallax);

	
	var brikkerTekst = new ScrollMagic.Scene({

		triggerElement: '#brick-txt',
		duration: '360%'
	}).setPin('#brick-txt', {pushFollowers: false});

	var brikkerTxtParallax = new ScrollMagic.Scene({
		triggerElement:'#brick-txt',
		duration: '460%'
	}).setTween(brickTxtParallax);

	//Brick layer 3
	var brikker3 = new ScrollMagic.Scene({
		triggerElement: '#brick-3',
		triggerHook:'onLeave',
		duration: '300%'
	}).setPin('#brick-3', {pushFollowers: false});

	var brikker3Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-3',
		triggerHook:'onLeave',
		duration: '300%'
	}).setTween(brick3Parallax);

	//Brick layer 4
	var brikker4 = new ScrollMagic.Scene({
		triggerElement: '#brick-4',
		triggerHook:'onLeave',
		// offset:'300',
		duration: '200%'
	}).setPin('#brick-4', {pushFollowers: false});

	var brikker4Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-4',
		triggerHook:'onLeave',
		duration: '200%'
	}).setTween(brick4Parallax);


	controller.addScene([
		brikker1, 
		brikker1Parallax,
		
		brikker2,
		brikker2Parallax,

		brikkerTekst,
		brikkerTxtParallax,

		brikker3,
		brikker3Parallax,

		brikker4,
		brikker4Parallax
	]);




//DE 7 TRIN

// 1. HVAD

	//Tweens
	var timeLine1 = new TimelineMax();
	timeLine1.to('#quest-1', 3.7, {opacity : 1, scale: 1.5});
		
	var timeLine2 = new TimelineMax();
	timeLine2.to('#quest-1', 5, {xPercent: -74, delay: 16, ease:Power2.easeOut});
	
	var explFadeIn = new TimelineMax();
	explFadeIn.from('#hvad-txt', 1, {opacity : 0});

	//scenes

	var scene1 = new ScrollMagic.Scene({
		triggerElement: '#no-1',
		offset:'100',
		duration: '30%'
	}).setPin('#no-1');

	var scene1Time = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: '100%'
	}).setTween(timeLine1);

	var scene1Time2 = new ScrollMagic.Scene({
		triggerElement: '#scene-2',
	 	duration: '100%'
	}).setTween(timeLine2);

	var scene1Quest = new ScrollMagic.Scene({
		triggerElement: '#quest-1',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-1');

	var scene1Time3 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(explFadeIn);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: '#scene-3',
		offset:'95',
		duration: '164%'
	}).setPin('#expl-container-1');

//scener tilføjes til controller
	controller.addScene([
		scene1, scene1Quest, scene1Time, scene1Time2,scene1Time3, scene2
	]);



	

// 2. HVEM

	//Tweens
	var hvemFadeGrow = new TimelineMax();
	hvemFadeGrow.to('#quest-2', 3.7, {opacity : 1, scale: 1.5});
		
	var hvemMoveX = new TimelineMax();
	hvemMoveX.to('#quest-2', 5, {xPercent: -74, delay: 16, ease:Power2.easeOut});
	
	var hvemFadeIn1 = new TimelineMax();
	hvemFadeIn1
	.from('#hvem-txt-1', 1, {opacity : 0})
	.from('#hvem-txt-2', 1, {opacity : 0, delay:2});

	//scenes

	var hvem1 = new ScrollMagic.Scene({
		triggerElement: '#no-2',
		offset:'100',
		duration: '30%'
	}).setPin('#no-2');

	var hvemTime = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
	 	duration: '100%'
	}).setTween(hvemFadeGrow);

	var hvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#scene-4',
	 	duration: '100%'
	}).setTween(hvemMoveX);

	var hvemQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-2',
		offset:'100',
	 	duration: '255%'
	}).setPin('#quest-2');

	var hvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvemExpl = new ScrollMagic.Scene({
		triggerElement: '#scene-5',
		offset:'95',
		duration: '159%'
	}).setPin('#expl-container-2');

//scener tilføjes til controller
controller.addScene([
		hvem1, hvemTime, hvemTime2, hvemTime3, hvemQuest, hvemExpl
	]);


// 3. HVORNÅR

	//Tweens
	var hvornaarFadeGrow = new TimelineMax();
	hvornaarFadeGrow.to('#quest-3', 3.7, {opacity : 1, scale: 1.5});
		
	var hvornaarMoveX = new TimelineMax();
	hvornaarMoveX.to('#quest-3', 5, {xPercent: -74, delay: 16, ease:Power2.easeOut});
	
	var hvornaarFadeIn1 = new TimelineMax();
	hvornaarFadeIn1
	.from('#hvornaar-txt-1', 1, {opacity : 0})
	.from('#hvornaar-txt-2', 1, {opacity : 0, delay:2});

	//scenes

	var hvornaar1 = new ScrollMagic.Scene({
		triggerElement: '#no-3',
		offset:'100',
		duration: '30%'
	}).setPin('#no-3');

	var hvornaarTime = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1',
	 	duration: '100%'
	}).setTween(hvornaarFadeGrow);

	var hvornaarTime2 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-1',
	 	duration: '100%'
	}).setTween(hvornaarMoveX);

	var hvornaarQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-3',
		offset:'100',
	 	duration: '255%'
	}).setPin('#quest-3');

	var hvornaarTime3 = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(hvornaarFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var hvornaarExpl = new ScrollMagic.Scene({
		triggerElement: '#hvornaar-2',
		offset:'95',
		duration: '156%'
	}).setPin('#expl-container-3');

//scener tilføjes til controller
controller.addScene([
		hvornaar1, hvornaarTime, hvornaarTime2, hvornaarTime3, hvornaarQuest, hvornaarExpl
	]);

// 4. TIL HVEM

	//Tweens
	//spørgsmålet fader ind og vokser
	var tilHvemFadeGrow = new TimelineMax();
	tilHvemFadeGrow.to('#quest-4', 3.7, {opacity : 1, scale: 1.5});
	
	//bevæg spørgsmål mod venstre
	var tilHvemMoveX = new TimelineMax();
	tilHvemMoveX.to('#quest-4', 5, {xPercent: -74, delay: 16, ease:Power2.easeOut});
	
	//fade den forklarende tekst ind
	var tilHvemFadeIn1 = new TimelineMax();
	tilHvemFadeIn1
	.from('#til-hvem-txt-1', 1, {opacity : 0});

	//scenes

	var tilHvem1 = new ScrollMagic.Scene({
		triggerElement: '#no-4',
		offset:'100',
		duration: '30%'
	}).setPin('#no-4');

	var tilHvemTime = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1',
	 	duration: '100%'
	}).setTween(tilHvemFadeGrow);

	var tilHvemTime2 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-1',
	 	duration: '100%'
	}).setTween(tilHvemMoveX);

	var tilHvemQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-4',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-4');

	var tilHvemTime3 = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(tilHvemFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var tilHvemExpl = new ScrollMagic.Scene({
		triggerElement: '#til-hvem-2',
		offset:'130',
		duration: '153%'
	}).setPin('#expl-container-4');

//scener tilføjes til controller
controller.addScene([
		tilHvem1, tilHvemTime, tilHvemTime2, tilHvemTime3, tilHvemQuest, tilHvemExpl
	]);

// 5. OM HVAD

	//Tweens
	var omHvadFadeGrow = new TimelineMax();
	omHvadFadeGrow.to('#quest-5', 3.7, {opacity : 1, scale: 1.5});
		
	var omHvadMoveX = new TimelineMax();
	omHvadMoveX.to('#quest-5', 5, {xPercent: -74, delay: 16, ease:Power2.easeOut});
	
	var omHvadFadeIn1 = new TimelineMax();
	omHvadFadeIn1
	.from('#om-hvad-txt-1', 1, {opacity : 0});

	//scenes

	var omHvad1 = new ScrollMagic.Scene({
		triggerElement: '#no-5',
		offset:'100',
		duration: '30%'
	}).setPin('#no-5');

	var omHvadTime = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-1',
	 	duration: '100%'
	}).setTween(omHvadFadeGrow);

	var omHvadTime2 = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-1',
	 	duration: '100%'
	}).setTween(omHvadMoveX);

	var omHvadQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-5',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-5');

	var omHvadTime3 = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(omHvadFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var omHvadExpl = new ScrollMagic.Scene({
		triggerElement: '#om-hvad-2',
		offset:'130',
		duration: '163%'
	}).setPin('#expl-container-5');

//scener tilføjes til controller
controller.addScene([
		omHvad1, omHvadTime, omHvadTime2, omHvadTime3, omHvadQuest, omHvadExpl
	]);

// 6. HVILKE VIRKEMIDLER

	//Tweens
	var virkemidlerFadeGrow = new TimelineMax();
	virkemidlerFadeGrow.to('#quest-6', 3.7, {opacity : 1, scale: 1.5});
		
	var virkemidlerMoveX = new TimelineMax();
	virkemidlerMoveX.to('#quest-6', 5, {xPercent: -74, delay: 45, ease:Power2.easeOut});
	
	var virkemidlerFadeIn1 = new TimelineMax();
	virkemidlerFadeIn1.from('#virkemidler-txt-1', 1, {opacity : 0});

	//scenes

	var virkemidler1 = new ScrollMagic.Scene({
		triggerElement: '#no-6',
		offset:'100',
		duration: '30%'
	}).setPin('#no-6');

	var virkemidlerTime = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-1',
	 	duration: '100%'
	}).setTween(virkemidlerFadeGrow);

	var virkemidlerTime2 = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-1',
	 	duration: '100%'
	}).setTween(virkemidlerMoveX);

	var virkemidlerQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-6',
		offset:'100',
	 	duration: '260%'
	}).setPin('#quest-6');

	var virkemidlerTime3 = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-2',
		triggerHook: 'onLeave',
	 	duration: '100%'
	}).setTween(virkemidlerFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var virkemidlerExpl = new ScrollMagic.Scene({
		triggerElement: '#virkemidler-2',
		offset:'120',
		duration: '134%'
	}).setPin('#expl-container-6');

//scener tilføjes til controller
controller.addScene([
		virkemidler1, virkemidlerTime, virkemidlerTime2, virkemidlerTime3, virkemidlerQuest, virkemidlerExpl
	]);

// 7. HVILKE KONSEKVENSER?

	//Tweens
	var konsekvenserFadeGrow = new TimelineMax();
	konsekvenserFadeGrow.to('#quest-7', 3.7, {opacity : 1, scale: 1.5});
		
	var konsekvenserMoveX = new TimelineMax();
	konsekvenserMoveX.to('#quest-7', 5, {xPercent: -74, delay: 25, ease:Power2.easeOut});
	
	var konsekvenserFadeIn1 = new TimelineMax();
	konsekvenserFadeIn1
		.from('#konsekvenser-txt-1', 2, {opacity : 0})
		.from('#konsekvenser-txt-2', 2, {opacity : 0, delay:4})
		.from('#konsekvenser-txt-3', 2, {opacity : 0, delay:4});

	//scenes

	var konsekvenser1 = new ScrollMagic.Scene({
		triggerElement: '#no-7',
		offset:'100',
		duration: '30%'
	}).setPin('#no-7');

	var konsekvenserTime = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-1',
	 	duration: '100%'
	}).setTween(konsekvenserFadeGrow);

	var konsekvenserTime2 = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-1',
	 	duration: '100%'
	}).setTween(konsekvenserMoveX);

	var konsekvenserQuest = new ScrollMagic.Scene({
		triggerElement: '#quest-7',
		offset:'100',
	 	duration: '410%'
	}).setPin('#quest-7');

	var konsekvenserTime3 = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-2',
		triggerHook: 'onLeave',
	 	duration: '200%'
	}).setTween(konsekvenserFadeIn1);

	//SEKTION 2 - uddybning pinnes og fades ind

	var konsekvenserExpl = new ScrollMagic.Scene({
		triggerElement: '#konsekvenser-2',
		offset:'150',
		duration: '283%'
	}).setPin('#expl-container-7');

//scener tilføjes til controller
controller.addScene([
		konsekvenser1, konsekvenserTime, konsekvenserTime2, konsekvenserTime3, konsekvenserQuest, konsekvenserExpl
	]);


//SPØRGSMÅLSTEGN BEGYNDER IGEN

	//Timeslines
	
	var brick22FadeIn = new TimelineMax();
	brick22FadeIn.to('#brick-2-2', 1, {opacity: 1});

	var brick23FadeIn = new TimelineMax();
	brick23FadeIn.to('#brick-2-3', 1, {opacity: 1});

	var brick24FadeIn = new TimelineMax();
	brick24FadeIn.to('#brick-2-4', 1, {opacity: 1});

	var brick21Parallax = new TimelineMax();
	brick21Parallax.to('#brick-2-1', 1, {y:'-40%', ease: Linear.easeNone});

	var brick22Parallax = new TimelineMax();
	brick22Parallax.to('#brick-2-2', 1, {y:'-60%', ease: Linear.easeNone});

	var brick2TxtParallax = new TimelineMax();
	brick2TxtParallax.to('#brick-2-txt', 1, {y:'-50%', ease: Linear.easeNone});

	var brick23Parallax = new TimelineMax();
	brick23Parallax.to('#brick-2-3', 1, {y:'-120%', ease: Linear.easeNone});

	var brick24Parallax = new TimelineMax();
	brick24Parallax.to('#brick-2-4', 1, {y:'-140%', ease: Linear.easeNone});

	// var brick2hide = new TimelineMax();
	// brick2hide.


	//Scenes
	var brikker21 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-1',
		triggerHook:'onLeave',
		duration: '660%'
	}).setPin('#brick-2-1', {pushFollowers: false});

	var brikker21Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-1',
		triggerHook:'onLeave',
		duration: '860%'
	}).setTween(brick21Parallax);

	//Brick layer 2
	var brikker22 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-2',
		triggerHook:'onLeave',
		duration: '560%'
	}).setPin('#brick-2-2', {pushFollowers: false});

	var brikker22Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-2',
		triggerHook:'onLeave',
		duration: '660%'
	}).setTween(brick22Parallax);

	
	var brikker2Tekst = new ScrollMagic.Scene({
		triggerElement: '#brick-2-txt',
		//triggerHook:'onLeave',
		// offset:'-75',
		duration: '1360%'
	}).setPin('#brick-2-txt', {pushFollowers: false});

	var brikker2TxtParallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-txt',
		duration: '160%'
	}).setTween(brick2TxtParallax);

	//Brick layer 3
	var brikker23 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-3',
		triggerHook:'onLeave',
		duration: '660%'
	}).setPin('#brick-2-3', {pushFollowers: false});

	var brikker23Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-3',
		triggerHook:'onLeave',
		duration: '560%'
	}).setTween(brick23Parallax);

	//Brick layer 4
	var brikker24 = new ScrollMagic.Scene({
		triggerElement: '#brick-2-4',
		triggerHook:'onLeave',
		// offset:'300',
		duration: '460%'
	}).setPin('#brick-2-4', {pushFollowers: false});

	var brikker24Parallax = new ScrollMagic.Scene({
		triggerElement:'#brick-2-4',
		triggerHook:'onLeave',
		duration: '360%'
	}).setTween(brick24Parallax);

	

	// var gemBrikker = new ScrollMagic.Scene({
	// 	triggerElement:'brick-2-clear',
	// 	triggerHook:'onLeave',
	// 	duration:'100%'
	// });

	// gemBrikker.on('leave', function (event) {
	// 	$('#brick-2-txt').css('padding' , 'none');
	// 	// $('#brick-2-3').css('display' , 'none');
	// });

	controller.addScene([
		brikker21, 
		brikker21Parallax,
		
		brikker22,
		brikker22Parallax,

		brikker2Tekst,
		brikker2TxtParallax,

		brikker23,
		brikker23Parallax,

		brikker24,
		brikker24Parallax
		//,gemBrikker
	]);


// 8. OUTRO

	
	var outroFadeIn = new TimelineMax();
	outroFadeIn
	.from('#outro-txt', 1, {opacity : 0});

	var outro2FadeIn = new TimelineMax();
	outro2FadeIn
	.from('#outro-2-txt', 1, {opacity : 0});

	var outro2FadeOut = new TimelineMax(); 
	outro2FadeOut
	.to('#expl-container-9, #brick-2-txt',1,{opacity : 0})
	//.to('#brick-2-txt',1,{opacity:0, delay:-2})
	;

	//scenes

	var outroFade = new ScrollMagic.Scene({
		triggerElement: '#outro-1',
		triggerHook: 'onLeave',
		offset:'500',
	 	duration: '100%'
	}).setTween(outroFadeIn);

	var outro2Fade = new ScrollMagic.Scene({
		triggerElement: '#outro-2',
		triggerHook: 'onLeave',
		offset:'500',
	 	duration: '100%'
	}).setTween(outro2FadeIn);

	var outro2FadeAway = new ScrollMagic.Scene({
		triggerElement: '#outro-fadeOut',
		triggerHook: 'onLeave',
	 	duration: '200%'
	}).setTween(outro2FadeOut);

	//SEKTION 2 - uddybning pinnes og fades ind

	var outroExpl = new ScrollMagic.Scene({
		triggerElement: '#outro-1 .right .spacer3',
		triggerHook:'onLeave',
		// offset:'145',
		duration: '159%'
	}).setPin('#expl-container-8', {pushFollowers: false});

	var outro2Expl = new ScrollMagic.Scene({
		triggerElement: '#outro-2 .right .spacer3',
		triggerHook:'onLeave',
		// offset:'145',
		duration: '459%'
	}).setPin('#expl-container-9');

//scener tilføjes til controller
controller.addScene([
		outroFade, outroExpl, outro2Fade, outro2Expl, outro2FadeAway
	]);

	// var scene3 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-4',
	// 	duration: $(window).height() - 200
	// }).setPin('#brick1');//pinner første brik saa den flyder med videre ned naar vi scroller

	// //sectionX
	// var scene4 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-5',
	// 	duration: '170%'
	// }).setPin('#no-2');

	// var scene5 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-6',
	// 	duration: $(window).height() - 400
	// }).setPin('#expl-container-2');

	// var scene6 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7',
	// 	duration: $(window).height() - 200
	// }).setPin('#brick-container-no-2');

	// var scene7 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7', 
	// 	duration: $(window).height() - 400
	// }).setTween(horizontalTweenB22);

	// var scene8 = new ScrollMagic.Scene({
	// 	triggerElement: '#scene-7', duration: $(window).height() - 400
	// }).setTween(colorTween);

	

});	
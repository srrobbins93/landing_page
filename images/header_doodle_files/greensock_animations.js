// GET21134-Daniel-Administration-728x90
gsap.registerPlugin([ScrollToPlugin]);
// gsap.set([animation], {visibility:"visible"});
// gsap.set([photo], {rotation:0.001, force3D: false});
//
//
var tl = gsap.timeline({});
	tl
	.set(anim, {visibility:"visible"})

	//logo appears
	.from(logoKO1, {duration: 0.8, opacity:0, ease:"power2.out"}, "anim+=.3")
	//copy in from left and right
	.from(fr1CopyA, {duration: 0.8, x:"-=400", ease:"power2.out"}, "anim+=0")
	.from(fr1CopyB, {duration: 0.8, x:"+=300", ease:"power2.out"}, "anim+=.3")

	//logo fades out
	.to(logoKO1, {duration: 0.5, opacity:0, ease:"power2.out"}, "anim+=2.5")
	//copy slides out opposite directions
	.to(fr1CopyA, {duration: 0.5, x:"+=400", ease:"power2.out"}, "anim+=2.5")
	.to(fr1CopyB, {duration: 0.5, x:"-=400", ease:"power2.out"}, "anim+=2.5")
	//popcorn falls
	.from([pop4, pop1, pop5], {duration: 3.5, y:"-=200", rotation:"+=357", ease:"none", stagger: .06}, "anim+=2.9")
	.from([pop2, pop6, pop3], {duration: 3.5, y:"-=185", rotation:"-=260", ease:"none", stagger: .05}, "anim+=3")
	//copy in above ISI
	.from(fr2Copy, {duration: 0.8, opacity:0, ease:"power2.out"}, "anim+=3.5")


	//elements fade out
	.to([fr2Copy, popDiv], {duration: 0.5,  opacity:0, ease:"power2.out"}, "anim+=6")
	//brush in from left -- jiggles at stop?
	.from(brush, {duration: 0.8, x:"+=430", ease:"back.out(1.5)"}, "anim+=6.5")
	//copy in over ISI
	.from(fr3Copy, {duration: 0.8, opacity:0, ease:"power2.out"}, "anim+=7")


	//elements fade out, brush out to the right
	.to(fr3Copy, {duration: 0.5,  opacity:0, ease:"power2.out"}, "anim+=9.5")
	.to(brush, {duration: 0.8, x:"+=430", ease:"back.out(1.5)"}, "anim+=9.5")
	//administering in from left
	.from(fr4CopyA, {duration: 0.5, x:"-=300", ease:"power2.out"}, "anim+=9.7")
	//hemlbira in from right
	.from(fr4CopyB, {duration: 0.5, x:"+=300", ease:"power2.out"}, "anim+=9.9")
	//now we're talking fades in
	.from(fr4CopyC, {duration: 0.8, opacity:0, ease:"power2.out"}, "anim+=10.1")
	//disc fades in above ISI
	.from(disclaim, {duration: 0.8, opacity:0, ease:"power2.out"}, "anim+=10.3")


	//main copy slides out in opposite directions, and other copy fades out
	.to(fr4CopyA, {duration: 0.5, x:"-=400", ease:"power2.out"}, "anim+=13.8")
	.to(fr4CopyB, {duration: 0.5, x:"+=300", ease:"power2.out"}, "anim+=13.8")
	.to([fr4CopyC, disclaim], {duration: 0.5,  opacity:0, ease:"power2.out"}, "anim+=13.8")
	//logo appears
	.from(logoKO2, {duration: 0.5,  opacity:0, ease:"power2.out"}, "anim+=14")
	//CTA pops up
	.from(cta, {duration: 0.5,  opacity:0, y:"+=10px", ease:"power2.out"}, "anim+=14.5")

	.from(isi, {duration:.5, autoAlpha:0, ease:"linear"}, "anim")

;


// //SUPREME TIMELINE delays
var supremeTL = new TimelineMax({});
    supremeTL.add(tl, .1)
;        
// supremeTL.timeScale(1.5);
// supremeTL.duration(15);


//// cta rollover action
// var ctaTL = new gsap.timeline({paused:true});
// 	ctaTL
// 	 .to([cta_txt], {duration:.3, color:"#ffffff", ease:"linear"}, "cta")
// 	 .to([cta_arrow], {duration:.3, fill:"#ffffff", ease:"linear"}, "cta")
// 	 .to(cta_bg, {duration:.3, backgroundColor:"#009bd3", ease:"linear"}, "cta")
// 	 // .from([cta_arrow_b], {duration:.3, autoAlpha:0, ease:"linear"}, "cta")
// 	 ;
// // play cta timeline
// bigButton.onmouseover = function() {
//   ctaTL.play();
// }
// // reverse cta timeline
// bigButton.onmouseout = function() {
//   ctaTL.reverse();
// }

// isi
var tlisi = gsap.timeline({delay:15});
tlisi 
 .to(isi, {duration:90, scrollTo:{y:"max", autoKill: true}, ease:"linear"})
 .to(isi, {duration:.5, scrollTo:{y:0}}, "+=4")
;

isi.addEventListener('mouseenter', function() { 
     tlisi.pause();
});
isi.addEventListener('touchstart', function() {
     tlisi.pause();
});


isi.addEventListener('mouseleave', function() { 
     tlisi.resume();
});
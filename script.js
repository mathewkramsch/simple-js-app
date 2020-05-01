// script.js

function displayHidden() {
	document.getElementById("countDownButton").style.display = 'block';
}

function countDown() {
	var currentVal = document.getElementById("countDownButton").innerHTML;
	if (--currentVal > 0)
		document.getElementById("countDownButton").innerHTML = currentVal;
	else {
		document.getElementById("countDownButton").innerHTML = 'DANGER';
		var count = document.getElementById("countDownButton").value++;
		if (count!=0) outputLyrics(--count);
	}
}

function outputLyrics(count) {
	var song = "somebody once told me the world is gonna roll me i aint the sharpest tool in the shed she was looking kind of dumb with her finger and her thumb in the shape of an l on her forehead well the years start coming and they dont stop coming fed to the rules and i hit the ground running didnt make sense not to live for fun your brain gets smart but your head gets dumb so much to do so much to see so whats wrong with taking the back streets youll never know if you dont go youll never shine if you dont glow hey now youre an allstar get your game on go play hey now youre a rock star get the show on get paid and all that glitters is gold only shooting stars break the mold its a cool place and they say it gets colder youre bundled up now wait till you get older but the meteor men beg to differ judging by the hole in the satellite picture the ice we skate is getting pretty thin the waters getting warm so you might as well swim my worlds on fire how about yours thats the way i like it and i never get bored hey now youre an allstar get your game on go play hey now youre a rock star get the show on get paid all that glitters is gold only shooting stars break the mold hey now youre an allstar get your game on go play hey now youre a rock star get the show on get paid and all that glitters is gold only shooting stars somebody once asked could i spare some change for gas i need to get myself away from this place i said yep what a concept i could use a little fuel myself and we could all use a little change well the years start coming and they dont stop coming fed to the rules and i hit the ground running didnt make sense not to live for fun your brain gets smart but your head gets dumb so much to do so much to see so whats wrong with taking the back streets youll never know if you dont go go youll never shine if you dont glow hey now youre an allstar get your game on go play hey now youre a rock star get the show on get paid and all that glitters is gold only shooting stars break the mold and all that glitters is gold only shooting stars break the mold";
	var words = song.split(' ');
	if (count >= words.length) { document.getElementById("countDownButton").value=2; count=0; }
	var lyric = words[count];
	document.getElementById("lyrics").innerHTML += lyric;
}

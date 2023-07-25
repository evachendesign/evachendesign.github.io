var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


// play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volumeupdate.textContent = volume.value + "%";
});

//pause button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});

//slower button
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= 0.05;
	console.log("New Video speed is" + video.playbackRate);
});

//faster button
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += 0.05;
	console.log("New Video speed is" + video.playbackRate);
});

//skip button
document.querySelector("#skip").addEventListener("click", function(){
	if((video.duration - video.currentTime) > 15){
		video.currentTime = video.currentTime +15;
		console.log("Current video time" + video.currentTime);
	}

	else {
		video.currentTime = 0;
		console.log("The video has started over");
	}
})

//mute
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").textContent = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").textContent = "Mute";
	}
})


//volume slider
const volume = document.querySelector("#slider");
const volumeupdate = document.querySelector("#volume");

volume.addEventListener("change", function(){
	video.volume = volume.value / 100;
	volumeupdate.textContent = volume.value + "%";
});


//old school style
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

//original style
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
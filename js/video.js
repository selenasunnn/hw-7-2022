let video = document.querySelector('#player1');

window.addEventListener("load", function()
{
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function()
{
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function()
{
	console.log("Pause Video");
	video.pause();
});
let slowdownCount = 0;

document.querySelector('#faster').addEventListener('click', function()
{
  let newSpeed;
  if (video.playbackRate < 1) {
    newSpeed = video.playbackRate * 1.05;
    slowdownCount--;
  } else {
    newSpeed = video.playbackRate * 1.1;
  }

  video.playbackRate = newSpeed;
  console.log(`New speed: ${newSpeed}`);

  if (slowdownCount === 3) {
    slowdownCount = 0;
  }
});

 document.querySelector("#slower").addEventListener('click', function()
 {
   const newSpeed = video.playbackRate * 0.9;
   video.playbackRate = newSpeed;
   console.log(`New speed: ${newSpeed}`);
 });

 document.querySelector("#skip").addEventListener("click", function(){
	const newTime = video.currentTime * 1.1;
  if (newTime >= video.duration) {
    video.currentTime = 0;
  } else {
    video.currentTime = newTime;
  }
  console.log(`Current time: ${video.currentTime}`);
});

const slider = document.getElementById('slider');
const volumeDisplay = document.getElementById('volume');
video.volume = slider.value / 100;
volumeDisplay.textContent = slider.value + '%';
slider.oninput = function(){
   video.volume = slider.value / 100;
   volumeDisplay.textContent = slider.value + '%';
};

document.getElementById("mute").addEventListener("click", function()
{
	video.muted = !video.muted; 
	button.textContent = video.muted ? 'Unmute' : 'Mute'; 
  });


document.getElementById("vintage").addEventListener("click", function ()
{
  video.classList.add('oldSchool');
})

document.getElementById("orig").addEventListener("click", function ()
{
  video.classList.remove('oldSchool');
})


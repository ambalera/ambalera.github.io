const funny = document.getElementById('funnytext');

var textArray = [
    `i'll never finish this`,
    `lol`,
    `<video width="320" height="240" controls autoplay muted id="videoId">
  <source src="procrastination.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video><br>you have been cursed to watch this because of your actions`
];
var randomNumber = Math.floor(Math.random()*textArray.length);

function toggleMute() {

  var video=document.getElementById("videoId");

  if(video.muted){
    video.muted = false;
  } else {
    debugger;
    video.muted = true;
    video.play()
  }

}

function lol() {
	funny.innerHTML = textArray[randomNumber]
	toggleMute()
}

lol()
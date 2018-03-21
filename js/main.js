(() => {
  console.log ('video stuff fired!')
  const vidPlayer = document.querySelector('video'),
  playButton = document.querySelectorAll('button')[0],
  pauseButton = document.querySelectorAll('button')[1],
  rewindButton = document.querySelectorAll('button')[2];

  function volOn() {
    vidPlayer.muted = false;
}
    function volOff() {
      vidPlayer.muted = true;
  }

  function rewindVideo() {
    vidPlayer.currentTime -= 5;
  }

  function playVideo() {
    vidPlayer.play();
  }

  function pauseVideo() {
    vidPlayer.pause();
}
  vidPlayer.addEventListener('mouseover', volOn);
  vidPlayer.addEventListener('mouseout', volOff);

  rewindButton.addEventListener('click', rewindVideo);
  pauseButton.addEventListener('click', pauseVideo);
  playButton.addEventListener('click', playVideo);
})();

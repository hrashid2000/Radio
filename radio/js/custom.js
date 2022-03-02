function playAudio(btn) {
    var stream = btn.parentElement.querySelector('audio');
    var playorpause = btn.getAttribute('class');

    if (playorpause === 'play') {
        stream.load();
		stream.play();
		btn.innerHTML = "Pause &#9208;";
        btn.setAttribute('class', 'pause');
    } else {
        stream.pause();
		btn.innerHTML = "Play &#9205;";
        btn.setAttribute('class', 'play');
    }

    stream.onended = function () {
        btn.setAttribute('class', 'play');
    }
}


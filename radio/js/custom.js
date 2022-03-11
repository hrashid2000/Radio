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
function addstream(name,url){ 
    var newDiv = document.createElement("div")
    
    newDiv.innerHTML += name;
    
    const audio = new Audio();
    audio.id = "player";
    audio.src = url;
    newDiv.appendChild(audio);
    
    btn = document.createElement("button");
    btn.innerHTML += "Play &#9205;";
    btn.setAttribute('class', 'play');
    btn.setAttribute('onclick', 'playAudio(this)');
    newDiv.appendChild(btn);
    
    document.body.appendChild(newDiv);
}
/*
const Http = new XMLHttpRequest();
//const url='http://ssh.noglider.com:8081/user1.csv';
const url='https://jsonplaceholder.typicode.com/posts';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}
*/
async function getData(){
    const response = await fetch('http://ssh.noglider.com:8081/user1.csv');
    //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.text();
    console.log(data);

}
getData();
/*function addstream(img,name,url){ 
var newDiv = document.createElement("div")

const image = new Image();
image.src = "media/icon.jpg";
image.width = 100;
image.height = 100;
newDiv.appendChild(image);

newDiv.innerHTML += name;

const audio = new Audio();
audio.id = "player";
audio.src = url;
newDiv.appendChild(audio);

btn = document.createElement("button");
btn.innerHTML += "Play &#9205;";
btn.setAttribute('class', 'play');
btn.type = "button";
btn.setAttribute('onclick', 'playAudio(this)');
newDiv.appendChild(btn);

document.body.appendChild(newDiv);
}*/

//loadstream
//for length(8) of csv do addstream
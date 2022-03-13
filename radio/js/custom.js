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
const CSVToArray = (data, delimiter = ",", omitFirstRow = false) =>
    data
        .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
        .split("\n")
        .map(v => v.split(delimiter));
*/        
function csvToArray(str, delimiter = ",") {
  
  //const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  //console.log(headers);
  const headers = ['Name','Url'];

  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  return arr;
}
async function getData(){
    const response = await fetch('http://ssh.noglider.com:8081/user1.csv');
    var data = await response.text();
    console.log(data);
    var final = csvToArray(data);
    for (let i = 0; i< (final.length)-1; i++) {
      addstream(final[i].Name, final[i].Url);
    }
  return;
}
getData();






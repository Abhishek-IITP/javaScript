var intervalId;

function change() {
    var doc = document.getElementById("background");

    var randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' 
                           + Math.floor(Math.random() * 256) + ',' 
                           + Math.floor(Math.random() * 256) + ')';
    
    doc.style.backgroundColor = randomColor;
}

document.getElementById("startBtn").addEventListener("click", function() {
    if (!intervalId) {
        intervalId = setInterval(change, 800);
    }
});

document.getElementById("stopBtn").addEventListener("click", function() {
    clearInterval(intervalId);
    intervalId = null;
});

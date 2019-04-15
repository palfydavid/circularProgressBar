var canvas = document.querySelector('#progressBar');
var context = canvas.getContext('2d');

canvas.width = 100;
canvas.height = 100;

var start = 1.5 * Math.PI;
var loaded = 0;
var percent = 75;

var radius = 45;
var lineWidth = 10;
var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
               gradient.addColorStop(0, "#673AB7");
               gradient.addColorStop(1, "#9C27B0");

function ProgressSim() {
     let end = (2 / 100 * loaded + 1.5) * Math.PI;
     context.clearRect(0, 0, canvas.width, canvas.height);

     context.beginPath();
     context.arc(canvas.width / 2, canvas.height / 2, radius, start, (1.5 + 2) * Math.PI);
     context.lineWidth = lineWidth;
     context.strokeStyle = 'rgba(0, 0, 0, 0.1)';
     context.stroke();

     context.beginPath();
     context.arc(canvas.width / 2, canvas.height / 2, radius, start, end);
     context.lineWidth = lineWidth;
     context.strokeStyle = gradient;
     context.lineCap = 'round';
     context.stroke();

     context.font = '20px Nunito';
     context.textAlign = 'center';
     context.textBaseline = 'middle';
     context.fillText(loaded, canvas.width / 2, canvas.height / 2);

     if(loaded >= percent) {
          clearInterval(progress);
     }
     loaded++;
}

var progress = setInterval(ProgressSim, 10);
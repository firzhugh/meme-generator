
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var image = new Image();
image.onload = function() {
    console.log("Loaded Image");
//            context.fillRect(100, 100, 100, 100);
//            context.strokeRect(50, 50,50,50);

    context.strokeRect(50, 50, 100, 100);
    context.beginPath();
    context.moveTo(75, 75);
    context.lineTo(125, 125);
    context.lineTo(125, 75);
    context.lineTo(75, 75);
    context.fill();
    //context.stroke();

    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.font = "36pt Impact";
    context.lineWidth = 3;
    context.strokeText("CANVAS MEMES!", 50, 40);
    context.fillText();
    };
image.src = "images/bird.jpg";
/**
 * Created by cornelia on 4/11/14.
 */
function textChangeListener(evt) {
    var id = evt.target.id;
    var text = evt.target.value;

    if(id == "topLineText") {
        window.topLineText = text;
    }
    else {
        window.bottomLineText = text;
    }
    redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
}

function redrawMeme(image, topLine, bottomLine) {
    //Get Canvas2DContext
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.textAlign = 'center';
    context.strokeStyle = "black";
    context.fillStyle = "white";
    context.font = "30pt Impact";
    context.lineWidth = 3;

    context.drawImage(image,0,0, canvas.width, canvas.height);

    if(topLine !== null) {
        context.strokeText(topLine, canvas.width/2, 40);
        context.fillText(topLine, canvas.width/2, 40);
    }
    if(bottomLine !== null) {
        context.strokeText(bottomLine, canvas.width/2, canvas.height-20);
        context.fillText(bottomLine, canvas.width/2, canvas.height-20);
    }
}

function saveFile() {
    window.open(document.getElementById("canvas").toDataURL());
}

function handleFileSelect(evt) {

    var file = evt.target.files[0];


    var reader = new FileReader();
    reader.onload = function(fileObject) {
        var data = fileObject.target.result;

        //create an image object
        var image = new Image();
        image.onload = function(imageEvent) {
            window.imageSrc = this;
            var max_width = 500;
            var max_height = 500;
            var width = image.width;
            var height = image.height;
            if(width>height) {
                if(width > max_width) {
                    height *= max_width/width;
                    width = max_width;
                }
            }
            else {
                if(height > max_height) {
                    width *= max_height/height;
                    height = max_height;
                }
            }
            canvas.width = width;
            canvas.height = height;
            redrawMeme(window.imageSrc, null, null);
        };

        //set image data to background image
        image.src = data;
        console.log(fileObject.target.result);
    };
    reader.readAsDataURL(file);
}


window.topLineText = "";
window.bottomLineText = "";
$("#topLineText").keyup(textChangeListener);
$("#bottomLineText").keyup(textChangeListener);

$("#file").change(handleFileSelect);
$("#saveBtn").click(function() {
    saveFile();
});
function getFile(){
    document.getElementById("file").click();
}
$("#chooseBtn").click(function() {
    getFile();
});

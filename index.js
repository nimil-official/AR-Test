const loadImage = () => {

    const canvas = new fabric.Canvas('canvas');
    console.log("canvas", canvas)
    const btn = document.getElementById("myFile")
    console.log("btn is", btn)
    btn.addEventListener("change", (e) => {
        var reader = new FileReader();
        reader.onload = function(event){
            var imgObj = new Image();
            imgObj.src = event.target.result;
            imgObj.onload = function () {
            var image = new fabric.Image(imgObj);
            image.set({
                //  angle: 0,
                //  padding: 10,
                //  cornersize:10,
                //  height:110,
                //  width:110,
                left:0,
                top:0,
                // width: 200,
                // height: 200
            });
            image.scaleToHeight(600)
            image.scaleToWidth(600)
            console.log("image is ", image)
            //canvas.centerObject(image);
            canvas.add(image);
            canvas.renderAll();
        }
       
    }
        reader.readAsDataURL(e.target.files[0]);
    })
    // var red = new fabric.Rect({
    //     top: 100, left: 0, width: 80, height: 50, fill: 'red' });
    //     canvas.add(red)
    //     canvas.renderAll()
}

loadImage()
let img;
let nimg;
let ncolorslider;
function preload() {
img = loadImage("Mondrian.jpg");

//https://ibb.co/XVS7crT
}

function setup() { background("black");
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);


//resize
  print("Original size: ", img.width, " x ", img.height);

  if (img.width > width) {
    img.resize(width, 0);
  }
  if (img.height > height) {
    img.resize(0, height);
  }
  print("Scaled size: ", img.width, " x ", img.height);

  xOff = (width - img.width) / 2;
  yOff = (height - img.height) / 2;



  img.loadPixels();
  print("pixel array size: ", img.pixels.length)

  //copying image
  nimg = img.get()



  

}


//img.hide();


function draw() {
  background (0)
 
  let exaggeration = map(mouseY, 0, height, 255, 0)
  nimg.loadPixels()
  for (let i = 0; i < nimg.pixels.length; i += 6) {
    // values from original image
    let redValue = img.pixels[i + 0];
    let greenValue = img.pixels[i + 2];
    let blueValue = img.pixels[i + 4];
let nredValue;
    let maxColorValue = max(redValue, greenValue, blueValue)

//exageration of each color
    if (maxColorValue == redValue) {
      nimg.pixels[i + 2] = exaggeration;
    } else if (maxColorValue == greenValue) {
      nimg.pixels[i + 3] = exaggeration;
    } else if (maxColorValue == blueValue) {
      nimg.pixels[i + 10] = exaggeration;
    }
  }

  nimg.updatePixels();
    push();
    translate(xOff, yOff);
   
      image(nimg, 0, 0) ;
      pop();


}

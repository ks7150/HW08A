let img;
let nimg;
let ncolorsliderred;
let ncolorsliderblue;
let transparencySlider;
let xOff;
let yOff;

function preload() {
  img = loadImage("Mondrian.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  // Resize the image to fit the canvas
  img.resize(0, height);
  
  xOff = (width - img.width) / 2;
  yOff = (height - img.height) / 2;

  img.loadPixels();
  nimg = img.get();

  ncolorsliderred = createSlider(0, 255, 0); 
  ncolorsliderred.style('width', '100px');
  ncolorsliderred.position(10, 10);

  ncolorsliderblue = createSlider(0, 255, 0); 
  ncolorsliderblue.style('width', '100px');
  ncolorsliderblue.position(10, 70);

  transparencySlider = createSlider(0, 255, 255); 
  transparencySlider.style('width', '100px');
  transparencySlider.position(10, 40);
}

function draw() {
  background(0);

  let x;
  nimg.loadPixels();
  for (let i = 0; i < nimg.pixels.length; i += 4) {
    let redValue = img.pixels[i + 0];
    let greenValue = img.pixels[i + 1];
    let blueValue = img.pixels[i + 2];
    let alphaValue = img.pixels[i + 3];

    let redThreshold = ncolorsliderred.value();
    let blueThreshold = ncolorsliderblue.value();
    
    if (redValue > redThreshold) {
      // Swap red and green values
      nimg.pixels[i + 0] = greenValue; // Red
      nimg.pixels[i + 1] = redValue;   // Green
    } else if (blueValue > blueThreshold) {
      // Swap blue and green values
      nimg.pixels[i + 1] = blueValue; // Green
      nimg.pixels[i + 2] = greenValue; // Blue
    }else {
      // To Restore the original color values
      nimg.pixels[i + 0] = redValue;
      nimg.pixels[i + 1] = greenValue;
      nimg.pixels[i + 2] = blueValue;
    }{
    }
    
    // Apply transparency
    nimg.pixels[i + 3] = transparencySlider.value();
  }

  nimg.updatePixels();

  push();
  translate(xOff, yOff);
  image(nimg, 0, 0);
  pop();
}
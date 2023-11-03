let img;
let nimg;
let ncolorsliderred;

function preload() {
img = loadImage("Mondrian2.jpg");

//https://ibb.co/XVS7crT
}

function setup() { background(255,255,255);
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


  nimg = img.get()


  ncolorsliderred= createSlider(0, 255,255)
  //ncolorsliderred.position(10, 10)
  ncolorsliderred.style('width', '100px')



}



function draw() {
  background (255,255,255)

  
   let x;
  nimg.loadPixels()
  for (let i = 0; i < nimg.pixels.length; i += 4) {
  
    
    let redValue = img.pixels[i + 0]= x;
    let greenValue = img.pixels[i + 1];
    let blueValue = img.pixels[i + 2];
    let alphaValue = img.pixels[i+3];
let alphaChannel = ncolorsliderred.value();
    let maxColorValue = max(redValue, greenValue, blueValue)
    x = map(mouseY, 0, height, 255, 0)


nimg.pixels[i+1] = alphaChannel;
    if (maxColorValue == redValue) {
      nimg.pixels[i + 0] = 0;
    } else if (maxColorValue == greenValue) {
      nimg.pixels[i + 1] = 0;
    } else if (maxColorValue == blueValue) {
      nimg.pixels[i + 2] = 0;
    }
  }

  nimg.updatePixels();
    push();
    translate(xOff, yOff);
   
      image(nimg, 0, 0) ;
      pop();


 nred= color(205,54,44)

  
}

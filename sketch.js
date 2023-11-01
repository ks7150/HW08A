let img;
let nimg;
let ncolorsliderred;
let ncolorslidergreen;
let ncolorsliderblue;

let rdiff;
let gdiff;
let bdiff;

let val;
let val2;
let val3;
let nred; 

function preload() {
img = loadImage("Mondrian.jpg");

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

  //copying image
  nimg = img.get()


  ncolorsliderred= createSlider(0, 255,255)
  //ncolorsliderred.position(10, 10)
  ncolorsliderred.style('width', '100px')

//   ncolorslidergreen= createSlider(0, 255,0)
//  // ncolorslidergreen.position(10, 30)
//   ncolorslidergreen.style('width', '100px')
  

//   ncolorsliderblue= createSlider(0, 255,0 )
//  // ncolorsliderblue.position(10, 50)
//   ncolorsliderblue.style('width', '100px')

}

//img.hide();
// function isSimilar(nred) {

//   rdiff= abs(255-red(nred))
//   gdiff= abs(255-green(nred))
//   bdiff= abs(255-blue(nred))

//   let val = ncolorsliderred.value(rdiff);
// let val2 = ncolorslidergreen.value(gdiff);
// let val3 = ncolorsliderblue.value(bdiff);

  
//   if (rdiff <val && gdiff < val2 && bdiff < val3) {
//     return true
//   }
//   }


function draw() {
  background (255,255,255)

  
  let exaggeration = map(mouseY, 0, height, 255, 0)
  nimg.loadPixels()
  for (let i = 0; i < nimg.pixels.length; i += 4) {
    // values from original image
    let redValue = img.pixels[i + 0];
    let greenValue = img.pixels[i + 1];
    let blueValue = img.pixels[i + 2];
    let alphaValue = img.pixels[i+3];
let alphaChannel = ncolorsliderred.value();
    let maxColorValue = max(redValue, greenValue, blueValue)

//exageration of each color
nimg.pixels[i+3] = alphaChannel;
    if (maxColorValue == redValue) {
      nimg.pixels[i + 0] = exaggeration;
    } else if (maxColorValue == greenValue) {
      nimg.pixels[i + 1] = exaggeration;
    } else if (maxColorValue == blueValue) {
      nimg.pixels[i + 2] = exaggeration;
    }
  }

  nimg.updatePixels();
    push();
    translate(xOff, yOff);
   
      image(nimg, 0, 0) ;
      pop();


 nred= color(205,54,44)

 //let val = ncolorsliderred.value(rdiff);
 //let val2 = ncolorslidergreen.value(gdiff);
 //let val3 = ncolorsliderblue.value(bdiff);
  
}

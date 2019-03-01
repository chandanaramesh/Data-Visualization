function setup() {
	createCanvas(1500, 1500);
	angleMode(DEGREES);
}

function draw() {
  
  //Heading

  
  
	points = 12;
	angle = TWO_PI / points;
	radius = 500
	background(70);

  
  fill(255);
  textFont('Cinzel');
  textAlign(CENTER);
  textSize(15);
  text('DIAGRAM OF THE CAUSES OF MORALITY 1855', 500, 250);
  textFont("Cabin");
  strokeWeight(3);
  textAlign(LEFT);
  textSize(12);
  text('The Areas of the blue, pink, & brown wedges are each measured from the centre as the common vertex', 300, 300)
  text('The blue wedges measured from the centre of the circle represent area for area the deaths from ', 300, 320); 
  text('Preventible or Mitigable Zymotic Diseases, the pink wedges measured from the center the deaths ', 300, 340);
  text('from wounds, & the brown wedges measured from the center the deaths from all other causes. ', 300, 360);
  text('The entire areas may be compared by following the blue, the brown & the pink lines enclosing them.', 300, 380);
  
	fill('#a5a5af')
  arc(800, 600, 280, 280, 0, 30); //Oct
	arc(800, 600, 350, 350, 30, 60); //Nov
	arc(800, 600, 460, 460, 60, 90); //Dec
	arc(800, 600, 650, 650, 90, 120); //Jan
	arc(800, 600, 560, 560, 120, 150); //Feb
	arc(800, 600, 430, 430, 150, 180); //Mar
	arc(800, 600, 70, 70, 180, 210); //Apr
	arc(800, 600, 80, 80, 210, 240); //May
	arc(800, 600, 70, 70, 240, 270); //Jun
	arc(800, 600, 270, 270, 270, 300); //Jul
	arc(800, 600, 375, 375, 300, 330); //Aug
	arc(800, 600, 350, 350, 330, 360); //Sep
	//Other diseases
	fill('#7a4f56');
  arc(800, 600, 150, 150, 0, 30); //Oct
  arc(800, 600, 140, 140, 30, 60); //Nov
	arc(800, 600, 160, 160, 60, 90); //Dec
	arc(800, 600, 220, 220, 90, 120); //Jan
	arc(800, 600, 250, 250, 120, 150); //Feb
	arc(800, 600, 180, 180, 150, 180); //Mar
	arc(800, 600, 70, 70, 180, 210); //Apr
	arc(800, 600, 60, 60, 210, 240); //May
	arc(800, 600, 50, 50, 240, 270); //Jun
	arc(800, 600, 63, 63, 270, 300); //Jul
	arc(800, 600, 65, 65, 300, 330); //Aug
	arc(800, 600, 90, 90, 330, 360); //Sep
  
  fill('#febea8')
  arc(800, 600, 150, 150, 0, 30); //Oct
  arc(800, 600, 220, 220, 30, 60); //Nov
  arc(800, 600, 145, 145, 60, 90); //Dec
  arc(800, 600, 120, 120, 90, 120); //Jan
  arc(800, 600, 90, 90, 120, 150); //Feb
  arc(800, 600, 80, 80, 150, 180); //Mar
  arc(800, 600, 75, 75, 330, 360); //Sep
	

  

  scale(0.7);
  translate(900, 10);
  rotate(80);
  //translate(20, 20);
  fill('#a5a5af')
	arc(800, 600, 280, 280, 0, 30); //Oct
	arc(800, 600, 350, 350, 30, 60); //Nov
	arc(800, 600, 460, 460, 60, 90); //Dec
	arc(800, 600, 650, 650, 90, 120); //Jan
	arc(800, 600, 560, 560, 120, 150); //Feb
	arc(800, 600, 430, 430, 150, 180); //Mar
	arc(800, 600, 70, 70, 180, 210); //Apr
	arc(800, 600, 80, 80, 210, 240); //May
	arc(800, 600, 70, 70, 240, 270); //Jun
	arc(800, 600, 270, 270, 270, 300); //Jul
	arc(800, 600, 375, 375, 300, 330); //Aug
	arc(800, 600, 350, 350, 330, 360); //Sep
	//Other diseases
	fill('#7a4f56');
  arc(800, 600, 150, 150, 0, 30); //Oct
  arc(800, 600, 140, 140, 30, 60); //Nov
	arc(800, 600, 160, 160, 60, 90); //Dec
	arc(800, 600, 220, 220, 90, 120); //Jan
	arc(800, 600, 250, 250, 120, 150); //Feb
	arc(800, 600, 180, 180, 150, 180); //Mar
	arc(800, 600, 70, 70, 180, 210); //Apr
	arc(800, 600, 60, 60, 210, 240); //May
	arc(800, 600, 50, 50, 240, 270); //Jun
	arc(800, 600, 63, 63, 270, 300); //Jul
	arc(800, 600, 65, 65, 300, 330); //Aug
	arc(800, 600, 90, 90, 330, 360); //Sep
  
  fill('#febea8')
  arc(800, 600, 150, 150, 0, 30); //Oct
  arc(800, 600, 220, 220, 30, 60); //Nov
  arc(800, 600, 145, 145, 60, 90); //Dec
  arc(800, 600, 120, 120, 90, 120); //Jan
  arc(800, 600, 90, 90, 120, 150); //Feb
  arc(800, 600, 80, 80, 150, 180); //Mar
  arc(800, 600, 75, 75, 330, 360); //Sep
  
}


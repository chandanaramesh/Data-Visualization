var x, y = 0
var a = 50;
var b = 21;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(240);
  fill(200);
  stroke(255);
  strokeWeight(2);
  x = 50;
  while (x < width) {
    line(x, 0, x, height);
    x = x + 50;
  }
  y = 50;
  while (y < height) {
    line(0, y, width, y);
    y = y + 50;
  }
  //Draw lines
  //Division 1 Arrival
  strokeWeight(30);
  stroke('#3a464a');
  line(200, 215, 225, 200);
  line(225, 200, 275, 300);
  strokeWeight(28);
  stroke('#4d5e63');
  line(275, 300, 295, 250)
  strokeWeight(26);
  line(295, 250, 345, 240)
  strokeWeight(24);

  line(345, 240, 395, 230);
  strokeWeight(22);
  stroke('#749098');
  line(395, 230, 420, 220);
  strokeWeight(21);
  line(420, 220, 445, 190);
  strokeWeight(20);
  line(445, 190, 495, 140);
  line(495, 140, 520, 125);
  strokeWeight(17);

  line(520, 125, 595, 225);
  line(595, 225, 645, 205);
  strokeWeight(15);
  
  line(645, 205, 730, 100);
  strokeWeight(13);
  line(730, 100, 780, 125);
  line(780, 125, 800, 100);
  line(800, 100, 880, 10);
  //Division 1 Return
  stroke('#b8c6ca');
  line(880, 10, 880, 10);
  line(880, 10, 880, 50);
  line(880, 50, 900, 100);
  line(900, 100, 820, 200);
  line(820, 200, 760, 140);
  strokeWeight(9);
  line(760, 140, 720, 160);
  line(720, 160, 655, 220);
  line(655, 220, 595, 260);
  line(595, 260, 520, 310);
  line(520, 310, 470, 315);
  line(470, 315, 415, 350);
  line(415, 350, 400, 330);


  //Division 2 Arrival 
  strokeWeight(8);
  stroke('#854442');
  line(200, 190, 235, 170);
  line(235, 170, 275, 240);
  line(275, 240, 320, 140);
  line(320, 140, 370, 50);
  strokeWeight(6);
  line(370, 50, 420, 85);
  //Divison 2 Return
  strokeWeight(5);
  stroke('#a66866')
  line(420, 85, 430, 100);
  line(430, 100, 470, 315);
  line(470, 315, 420, 360);
  line(420, 360, 400, 340);
  strokeWeight(3);
  line(400, 340, 380, 300);
  line(380, 300, 330, 340);
  strokeWeight(2);
  line(330, 340, 320, 325);
  line(320, 325, 230, 300);
  line(230, 300, 220, 310);
  line(220, 310, 215, 310);
  line(215, 310, 210, 330);


  //Division 3 Arrival
  strokeWeight(4);
  stroke('#94848f');
  line(200, 180, 225, 165);
  line(225, 165, 235, 80);
  line(235, 80, 220, 305);
  line(220, 305, 210, 330);


  //Temperature
  strokeWeight(4);
  stroke('#d3212d');
  text('0', 865, 480);
  text('0', 780, 490);
  line(875, 500, 800, 500);
  text('-9', 645, 575);
  line(800, 500, 665, 585);
  text('-21', 580, 690);
  line(665, 585, 600, 710);
  line(600, 710, 460, 600);
  text('-11', 440, 590)
  line(460, 600, 415, 700);
  text('-20', 395, 690);
  line(415, 700, 370, 740);
  text('-24', 350, 730);
  line(370, 740, 340, 800);
  text('-30', 320, 780);
  line(340, 800, 270, 740);
  text('-26',270, 730);

  //line(800, 400, 750, 450);
	
  strokeWeight(2);
  stroke('#C0C0C0')
	line(270, 738, 270, 315)
  line(340, 798, 340, 330);
  line(368, 740, 370, 310);
  line(413, 700, 415, 360);
  line(460, 600, 458, 330);
  line(665, 585, 663, 218);
  line(800, 500, 800, 180);
  line(875, 500, 875, 145);
  
  stroke(25);
  strokeWeight(5);
  text('55.5', 0, 100);
  text('55.0', 0, 200);
  text('54.5', 0, 300);
  text('24.0', 200, 400);
  text('28.0', 400, 400);
  text('32.0', 600, 400);
  text('36.0', 800, 400);

  text('55.5', 0, 100);
  text('55.0', 0, 200);
  text('54.5', 0, 300);
  text('24.0', 200, 400);
  text('28.0', 400, 400);
  text('32.0', 600, 400);
  text('36.0', 800, 400);
  text('0', 0, 500);
  text('-5', 0, 550);
  text('-10', 0, 600);
  text('-15', 0, 650);
  text('-20', 0, 700);
  text('-25', 0, 750);
  text('-30', 0, 800);
  text('-35', 0, 850)
  text('-40', 0, 900);


  //Mark points
  point(200, 200); //Kowno
  point(270, 240); //Wilna
  point(320, 325); //Smorgoni
  point(330, 340); //Molodexno
  point(340, 180); //Gloubokoe
  point(380, 390); // Minsk
  point(420, 330); //Studienska
  point(430, 100); //Polotzk
  point(470, 315); //Bobr
  point(510, 125); //Witebsk
  point(520, 300); //Orcha
  point(500, 390); // Mohilow
  point(595, 225); // Smolensk
  point(650, 210); //Dorogobouge
  point(720, 160); // Wixma
  point(730, 100); //Chjat
  point(800, 100); //Mojaisk
  point(880, 10); //Moscou
  point(820, 130); //Tarantino
  point(810, 200); //Malo-jarosewl

  //Label places 
  //X - 20; Y - 10 
  fill(10);
  strokeWeight(1);
  text('Kowno', 180, 190);
  text('Wilna', 250, 230);
  text('Smorgoni', 300, 315)
  text('Molodexno', 325, 335)
  text('Gloubokoe', 320, 170);
  text('Minsk', 360, 380);
  text('Studienska', 400, 320);
  text('Polotzk', 410, 90);
  text('Bobr', 450, 305);
  text('Witebsk', 470, 120);
  text('Orcha', 500, 290);
  text('Mohilow', 480, 380);
  text('Smolensk', 575, 215);
  text('Dorogobouge', 630, 200);
  text('Wixma', 700, 150);
  text('Chjat', 710, 90);
  text('Mojaisk', 780, 90);
  text('Moscou', 890, 20);
  text('Tarantino', 800, 120);
  text('Malo-jarosewl', 790, 190)


}


/*
let data;
function preload(){
	data = loadTable('minard-data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(400, 400);
  console.log(data.getRowCount());
  console.log(data.columns);
	for (var i = 0; i <= data.getRowCount(); i++ ) {
		var test = data.getString(i, 0);
  }

}

function draw() {
  background(220);
	fill(187);
  line(1,0,4,5);
}
*/
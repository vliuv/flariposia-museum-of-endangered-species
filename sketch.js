let stage = 1; //setting stage to title page
let sticker1 = 0;
let sticker2 = 0;
let sticker3 = 0; //variables to check if each species had been viewed
let notif = 1; //variable to determine whether to put red notification symbol for card
let click1 = -1;
let click2 = -1;
let click3 = -1; //variables to determine if the image of the species has been clicked
let time1 = 0;
let time2 = 0;
let time3 = 0;
let titlepage;
let instructionspage;
let intropage;
let mainroom;
let room1;
let room2;
let room3;
let videoplayer;
let cardpage;
let font;
let footsteps;
let backgroundmusic;
let stulensia;
let anafausia;
let plomisia;
let stars;
let hearts;
let drops; //variables for assets

function preload() {
  titlepage = loadImage("titlepage.png");
  intropage = loadImage("intropage.png");
  instructionspage = loadImage("instructionspage.png");
  mainroom = loadImage("mainroom.png");
  room1 = loadImage("room1.png");
  room2 = loadImage("room2.png");
  room3 = loadImage("room3.png");
  videoplayer = loadImage("videoplayer.png");
  cardpage = loadImage("cardpage.png");
  font = loadFont("MADE Sunflower.otf");
  footsteps = loadSound("footsteps.mp3");
  backgroundmusic = loadSound("background.mp3");
  stulensia = createVideo("stulensiaanimation.mp4");
  anafausia = createVideo("anafausiaanimation.mp4");
  plomisia = createVideo("plomisiaanimation.mp4");
  stulensia.hide();
  anafausia.hide();
  plomisia.hide();
  stulensia.stop();
  anafausia.stop();
  plomisia.stop();
  stars = loadImage("stars.png");
  hearts = loadImage("hearts.png");
  drops = loadImage("drops.png"); //loading all the assets, hiding/stopping videos from playing
}

function setup() {
  createCanvas(1440, 900);
  stulensia.position(120, 20);
  anafausia.position(120, 20);
  plomisia.position(120, 20); //setting position of the videos
}

function draw() {
  console.log(stage, sticker1, sticker2, sticker3, notif, click1, click2, click3);
  time1 = map(stulensia.time(), 0, 27, 0, 800);
  time2 = map(anafausia.time(), 0, 27, 0, 800);
  time3 = map(plomisia.time(), 0, 27, 0, 800); //mapping video time to show video progress
  if (stage == 1) {
    title();
  } else if (stage == 2) {
    introduction();
  } else if (stage == 3) {
    instructions();
  } else if (stage == 4) {
    mainRoom();
  } else if (stage == 5) {
    room1A();
  } else if (stage == 6) {
    room1B();
  } else if (stage == 7) {
    room2A();
  } else if (stage == 8) {
    room2B();
  } else if (stage == 9) {
    room3A();
  } else if (stage == 10) {
    room3B();
  } else if (stage == 11) {
    end();
  } //setting the functions for each page to a stage number
}

function mousePressed() {
  if (stage == 1) {
    backgroundmusic.loop();
    if (
      mouseX > width / 2 - 65 &&
      mouseX < width / 2 + 65 &&
      mouseY > height / 2 + 140 - 25 &&
      mouseY < height / 2 + 140 + 25
    ) {
      stage = 2; //introduction
    }
  } else if (stage == 2) {
    if (
      mouseX > width / 2 + 600 - 65 &&
      mouseX < width / 2 + 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25
    ) {
      stage = 3; //instructions
    }
  } else if (stage == 3) {
    if (
      mouseX > width / 2 + 600 - 140 &&
      mouseX < width / 2 + 600 + 140 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25
    ) {
      stage = 4; //mainroom
      footsteps.play();
    }
  } else if (stage == 4) {
    if (
      mouseX > width / 2 - 590 - 75 &&
      mouseX < width / 2 - 590 + 75 &&
      mouseY > height / 2 - 100 - 150 &&
      mouseY < height / 2 - 100 + 150
    ) {
      stage = 5; //room1A
      footsteps.stop();
      footsteps.play();
    }
    if (
      mouseX > width / 2 - 65 &&
      mouseX < width / 2 + 65 &&
      mouseY > height / 2 - 155 - 125 &&
      mouseY < height / 2 - 155 + 125
    ) {
      stage = 7; //room2A
      footsteps.stop();
      footsteps.play();
    }
    if (
      mouseX > width / 2 + 590 - 75 &&
      mouseX < width / 2 + 590 + 75 &&
      mouseY > height / 2 - 100 - 150 &&
      mouseY < height / 2 - 100 + 150
    ) {
      stage = 9; //room3A
      footsteps.stop();
      footsteps.play();
    }
    if (sticker1 == 1) {
      if (sticker2 == 1) {
        if (sticker3 == 1) {
          if (
            mouseX > width / 2 - 65 &&
            mouseX < width / 2 + 65 &&
            mouseY > height / 2 + 130 - 25 &&
            mouseY < height / 2 + 130 + 25
          ) {
            stage = 11; //end
            notif = 0;
          } else if (
            mouseX > width / 2 + 575 - 90 &&
            mouseX < width / 2 + 575 + 90 &&
            mouseY > height / 2 + 340 - 25 &&
            mouseY < height / 2 + 340 + 25
          ) {
            stage = 1; //restarting back to title, resetting the variables
            sticker1 = 0;
            sticker2 = 0;
            sticker3 = 0;
            notif = 1;
            click1 = -1;
            click2 = -1;
            click3 = -1;
            footsteps.stop();
            footsteps.play();
            backgroundmusic.stop();
          }
        }
      }
    }
  } else if (stage == 5) {
    if (
      mouseX > width / 2 + 260 - 95 &&
      mouseX < width / 2 + 260 + 95 &&
      mouseY > height / 2 - 50 - 85 &&
      mouseY < height / 2 - 50 + 85
    ) {
      stage = 6; //room1B
      sticker1 = 1;
      backgroundmusic.pause();
    } else if (
      mouseX > width / 2 - 155 - 200 &&
      mouseX < width / 2 - 155 + 200 &&
      mouseY > height / 2 - 150 - 190 &&
      mouseY < height / 2 - 150 + 190
    ) {
      click1 = -click1;
    } else if (sticker1 == 1) {
      if (
        mouseX > width / 2 + 600 - 65 &&
        mouseX < width / 2 + 600 + 65 &&
        mouseY > height / 2 + 340 - 25 &&
        mouseY < height / 2 + 340 + 25
      ) {
        stage = 4; //back to mainroom
        footsteps.stop();
        footsteps.play();
      }
    }
  } else if (stage == 7) {
    if (
      mouseX > width / 2 + 260 - 95 &&
      mouseX < width / 2 + 260 + 95 &&
      mouseY > height / 2 - 50 - 85 &&
      mouseY < height / 2 - 50 + 85
    ) {
      stage = 8; //room2B
      sticker2 = 1;
      backgroundmusic.pause();
    } else if (
      mouseX > width / 2 - 155 - 200 &&
      mouseX < width / 2 - 155 + 200 &&
      mouseY > height / 2 - 150 - 190 &&
      mouseY < height / 2 - 150 + 190
    ) {
      click2 = -click2;
    } else if (sticker2 == 1) {
      if (
        mouseX > width / 2 + 600 - 65 &&
        mouseX < width / 2 + 600 + 65 &&
        mouseY > height / 2 + 340 - 25 &&
        mouseY < height / 2 + 340 + 25
      ) {
        stage = 4; //back to mainroom
        footsteps.stop();
        footsteps.play();
      }
    }
  } else if (stage == 9) {
    if (
      mouseX > width / 2 + 260 - 95 &&
      mouseX < width / 2 + 260 + 95 &&
      mouseY > height / 2 - 50 - 85 &&
      mouseY < height / 2 - 50 + 85
    ) {
      stage = 10; //room3B
      sticker3 = 1;
      backgroundmusic.pause();
    } else if (
      mouseX > width / 2 - 155 - 200 &&
      mouseX < width / 2 - 155 + 200 &&
      mouseY > height / 2 - 150 - 190 &&
      mouseY < height / 2 - 150 + 190
    ) {
      click3 = -click3;
    } else if (sticker3 == 1) {
      if (
        mouseX > width / 2 + 600 - 65 &&
        mouseX < width / 2 + 600 + 65 &&
        mouseY > height / 2 + 340 - 25 &&
        mouseY < height / 2 + 340 + 25
      ) {
        stage = 4; //back to mainroom
        footsteps.stop();
        footsteps.play();
      }
    }
  } else if (stage == 6) {
    if (
      mouseX > width / 2 + 600 - 65 &&
      mouseX < width / 2 + 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25
    ) {
      stage = 5; //back to room1A
      backgroundmusic.play();
      stulensia.hide();
      stulensia.stop();
    }
  } else if (stage == 8) {
    if (
      mouseX > width / 2 + 600 - 65 &&
      mouseX < width / 2 + 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25
    ) {
      stage = 7; //back to room2A
      backgroundmusic.play();
      anafausia.hide();
      anafausia.stop();
    }
  } else if (stage == 10) {
    if (
      mouseX > width / 2 + 600 - 65 &&
      mouseX < width / 2 + 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25
    ) {
      stage = 9; //back to room3A
      backgroundmusic.play();
      plomisia.hide();
      plomisia.stop();
    }
  } else if (stage == 11) {
    if (mouseX > width / 2 + 600 - 65 &&
      mouseX < width / 2 + 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25) {
      stage = 4; //back to mainroom
      notif = 0;
    } else if (mouseX > width / 2 - 600 - 65 &&
      mouseX < width / 2 - 600 + 65 &&
      mouseY > height / 2 + 340 - 25 &&
      mouseY < height / 2 + 340 + 25) {
      saveCanvas("mymuseumcard", "jpg"); //saving jpg of card
    } //using mousePressed function to create "buttons" to go through the experience
  }
}

function title() {
  noStroke();
  background(titlepage);
  fill(255, 150, 145);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 140, 130, 50);
  fill(255);
  textAlign(CENTER);
  textFont(font);
  textSize(30);
  text("START", width / 2 - 3, height / 2 + 150);
}

function introduction() {
  noStroke();
  background(intropage);
  fill(255, 150, 145);
  rectMode(CENTER);
  rect(width / 2 + 600, height / 2 + 340, 130, 50);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("NEXT", width / 2 + 600, height / 2 + 350);
}

function instructions() {
  noStroke();
  background(instructionspage);
  fill(255, 150, 145);
  rectMode(CENTER);
  rect(width / 2 + 530, height / 2 + 340, 280, 50);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("ENTER MUSEUM", width / 2 + 530, height / 2 + 350);
}

function mainRoom() {
  background(mainroom);
  fill(255);
  textAlign(CENTER);
  fill(255, 100);
  // rect(width / 2, height / 2 - 155, 130, 250);
  if (sticker1 == 1) {
    if (sticker2 == 1) {
      if (sticker3 == 1) {
        fill(255, 150, 145);
        rect(width / 2, height / 2 + 130, 130, 50);
        fill(255);
        textAlign(CENTER);
        textSize(30);
        text("END!", width / 2, height / 2 + 140);
        if (notif == 1) {
          fill("red");
          circle(width / 2 + 65, height / 2 + 130 - 25, 18);
        } else if (notif == 0) {
          fill(255, 150, 145);
          rectMode(CENTER);
          rect(width / 2 + 575, height / 2 + 340, 180, 50);
          fill(255);
          textAlign(CENTER);
          textSize(30);
          text("RESTART", width / 2 + 575 - 3, height / 2 + 350);
        }
      }
    }
  }
}

function room1A() {
  noStroke();
  background(room1);
  fill(255);
  // rect(width / 2 + 260, height / 2 - 50, 190, 170);
  // rect(width / 2 - 155, height / 2 - 150, 400, 380);
  if (click1 == 1) {
    angleMode(DEGREES);
    push();
    translate(width / 2 - 350, height / 2 - 150);
    rotate(10);
    image(stars, 0, 0, 192, 120);
    pop();

    push();
    translate(width / 2 - 75, height / 2 - 325);
    rotate(25);
    image(stars, 0, 0, 128, 80);
    pop();
  }
  if (sticker1 == 1) {
    fill(255, 150, 145);
    rect(width / 2 + 600, height / 2 + 340, 130, 50);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("BACK", width / 2 + 600, height / 2 + 350);
  }
}

function room2A() {
  noStroke();
  background(room2);
  fill(255);
  if (click2 == 1) {
    angleMode(DEGREES);
    push();
    translate(width / 2 - 375, height / 2 - 350);
    rotate(10);
    image(hearts, 0, 0, 192, 120);
    pop();

    push();
    translate(width / 2 - 50, height / 2 - 100);
    rotate(30);
    image(hearts, 0, 0, 128, 80);
    pop();
  }
  if (sticker2 == 1) {
    fill(255, 150, 145);
    rect(width / 2 + 600, height / 2 + 340, 130, 50);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("BACK", width / 2 + 600, height / 2 + 350);
  }
}

function room3A() {
  noStroke();
  background(room3);
  fill(255);
  if (click3 == 1) {
    angleMode(DEGREES);
    push();
    translate(width / 2 - 375, height / 2 - 75);
    rotate(-10);
    image(drops, 0, 0, 176, 110);
    pop();

    push();
    translate(width / 2 - 50, height / 2 - 325);
    rotate(25);
    image(drops, 0, 0, 128, 80);
    pop();
  }
  if (sticker3 == 1) {
    fill(255, 150, 145);
    rect(width / 2 + 600, height / 2 + 340, 130, 50);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("BACK", width / 2 + 600, height / 2 + 350);
  }
}

function room1B() {
  noStroke();
  background(videoplayer);
  rectMode(CENTER);

  fill(255);
  rect(width / 2, height / 2 + 325, 800, 20);
  fill(40, 115, 115);
  rect(width / 2 - 900 + time1, height / 2 + 325, 1000, 20);
  fill(51, 178, 170);
  rect(width / 2 - 720, height / 2 + 325, 640, 20);
  rect(width / 2 + 720, height / 2 + 325, 640, 20);

  fill(255, 150, 145);
  rect(width / 2 + 600, height / 2 + 340, 130, 50);
  textSize(15);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("BACK", width / 2 + 600, height / 2 + 350);
  stulensia.show();
  stulensia.loop();
  stulensia.size(1200, 750);
}

function room2B() {
  noStroke();
  background(videoplayer);
  rectMode(CENTER);

  fill(255);
  rect(width / 2, height / 2 + 325, 800, 20);
  fill(40, 115, 115);
  rect(width / 2 - 900 + time2, height / 2 + 325, 1000, 20);
  fill(51, 178, 170);
  rect(width / 2 - 720, height / 2 + 325, 640, 20);
  rect(width / 2 + 720, height / 2 + 325, 640, 20);

  fill(255, 150, 145);
  rect(width / 2 + 600, height / 2 + 340, 130, 50);
  textSize(15);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("BACK", width / 2 + 600, height / 2 + 350);
  anafausia.show();
  anafausia.loop();
  anafausia.size(1200, 750);
}

function room3B() {
  noStroke();
  background(videoplayer);
  rectMode(CENTER);

  fill(255);
  rect(width / 2, height / 2 + 325, 800, 20);
  fill(40, 115, 115);
  rect(width / 2 - 900 + time3, height / 2 + 325, 1000, 20);
  fill(51, 178, 170);
  rect(width / 2 - 720, height / 2 + 325, 640, 20);
  rect(width / 2 + 720, height / 2 + 325, 640, 20);

  fill(255, 150, 145);
  rect(width / 2 + 600, height / 2 + 340, 130, 50);
  textSize(15);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("BACK", width / 2 + 600, height / 2 + 350);
  plomisia.show();
  plomisia.loop();
  plomisia.size(1200, 750);
}

function end() {
  noStroke();
  background(cardpage);
  fill(255, 150, 145);
  rectMode(CENTER);
  rect(width / 2 + 600, height / 2 + 340, 130, 50);
  rect(width / 2 - 600, height / 2 + 340, 130, 50);
  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("BACK", width / 2 + 600, height / 2 + 350);
  text("SAVE", width / 2 - 600 - 3, height / 2 + 350);
}

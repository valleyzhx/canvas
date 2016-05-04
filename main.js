var myPicture;
var yearNumber;
var json;
void preload() {
  myPicture = loadImage("china-blank-map5.jpg");
  yearNumber = 1990;
  // var reader = new FileReader();
  // reader.readAsText("data.json");
  // reader.onload=function(f){
  // json=JSON.parse(this.result);
  //   }
}

void setup() {
  size(800, 655);
  imageMode(CORNER);
  noStroke();
  background(125);
}

void draw() {
  var yearStr = yearNumber.toString();
  image(myPicture,0,0);
  textSize(50);
  text(yearStr, 380,80);

  textSize(20);
  // var array = json.yearStr;
  // for (var dic in array) {
  //   var city = dic.city;
  //   var cirle = dic.cirle;
  //   drawEllipse(city,cirle);
  // }

  fill('red');
}

void touchStarted(){
  yearNumber += 5;
  redraw();
}

function drawEllipse(city,cirle){
var wid = 10;
if (cirle>500) {
  wid = 60;
}else if (cirle>400) {
  wid = 50;
}if (cirle > 200) {
  wid = 40;
}else if (cirle > 100) {
  wid = 30;
}else if (cirle > 20) {
  wid = 20;
}

  switch (city) {
    case "Beijing":
    ellipse(590,255,wid,wid);//Beijing
    text("Beijing", 595,255);
      break;
    case "Hong Kong":
    ellipse(580,560,wid,wid);//Hong Kong
    text("Hong Kong", 595,580);
      break;
    case "Kaohsiung":
    ellipse(682,545,wid,wid);//Kaohsiung
    text("Kaohsiung", 687,545);
        break;
      case "Shanghai":
      ellipse(672,392,wid,wid);//Shanghai
      text("Shanghai", 677,392);
        break;
        case "Shaoguan":
        ellipse(570,540,wid,wid);//Shaoguan
        text("Shaoguan", 575,540);
          break;
        case "Taipei":
        ellipse(695,510,wid,wid);//Taipei
        text("Taipei", 705,510);
          break;
    default:

  }

}

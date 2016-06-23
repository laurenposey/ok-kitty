var kitties = [];
var catnames = ["Chairman Meow", "Lulu", "June", "Penny", "Queen Gwendolyn", "Hazel", "Huxley", "Meow Ming", "Buffy", "Mittens", "Keith", "Todd", "Chad", "Goober", "Randy", "Kat"];
var catpictures = ["img/lordweber.jpg", "img/lulu.jpg", "img/otto.jpg", "img/face-paw.jpg", "img/fluffybutt.jpg", "img/crosseyedcat.jpg", "img/huxley.jpg", "img/meowming.jpg"];

function kittyCat() {
  for(var i=0; i<=1; i++) {
    for(var j=0; j<=1; j++) {
      for(var k=0; k<=1; k++) {
        for(var l=0; l<=1; l++) {
          var kittyName = catnames[i+(2*j)+(4*k)+(8*l)]
          var cats=true;
          var kids=true;
          var indoor=true;
          var health=true;
          if(i===0) {
            cats=false;
          }
          if(j===0) {
            kids=false;
          }
          if(k===0) {
            indoor=false;
          }
          if(l===0) {
            health=false;
          }
          var age = 1+(4*l)+Math.floor((5*Math.random())+1);
          var img = catpictures[Math.floor(8*Math.random())]
          var Kitten = new Kitty(kittyName, cats, kids, indoor, age, health, img);
          kitties.push(Kitten);
        }
      }
    }
  }
}

function Kitty(kittyName, canBeWithCats, canBeWithKids, kittyIsIndoor, kittyAge, kittyHealth, kittyImg) {
  this.kittyName = kittyName;
  this.canBeWithCats = canBeWithCats;
  this.canBeWithKids = canBeWithKids;
  this.isIndoor = kittyIsIndoor;
  this.age = kittyAge;
  this.healthIssues = kittyHealth;
  this.img = kittyImg;
}

Kitty.prototype.beWithCatsString = function() {
  if(this.canBeWithCats) {
    var canBeWithCatsString= "gets along well with other kitties"
  } else {
    canBeWithCatsString= "needs to be the only kitty in the house"
  }
  return canBeWithCatsString;
}

Kitty.prototype.beWithKidsString = function() {
  if(this.canBeWithKids) {
    var canBeWithKidsString= "can live with children"
  } else {
    canBeWithKidsString= "does not do well with children"
  }
  return canBeWithKidsString;
}

Kitty.prototype.indoorString = function() {
  if(this.isIndoor) {
    var indoorString= "the indoors"
  } else {
    indoorString= "the great outdoors"
  }
  return indoorString;
}

Kitty.prototype.healthString = function() {
  if(this.healthIssues) {
    var hasHealthIssuesString = "has some health issues and will need regular visits with the vet"
  } else {
    hasHealthIssuesString = "doesn't have any major health issues but should still be taken to the vet to stay healthy"
  }
  return hasHealthIssuesString
}

function kittiesDisplay (catarray) {
  for (i=0; i<catarray.length; i++) {
    var catName=kitties[i].kittyName;
    var catImg=kitties[i].img;
    var catAge=kitties[i].age;
    var catString = (catName + " is a precious " + catAge + " year old and " + kitties[i].beWithCatsString()) + ".  " + catName + " " + (kitties[i].beWithKidsString()) + ".  " + "They prefer " + (kitties[i].indoorString()) + ".  " + catName + " " +  (kitties[i].healthString()) + ".";

    // (yourCat[index][0].age);
    // (yourCat[index][0].beWithCatsString());
    // (yourCat[index][0].beWithKidsString());
    // (yourCat[index][0].indoorString());
    // (yourCat[index][0].healthString());
    // (yourCat[index][0].disposition);
    // (yourCat[index][0].fluff);

    $(".browsecats").append("<div class='col-sm-6 col-md-4'> <div class='thumbnail'> <img class='.img-responsive' src=" + catImg + " alt='a kitty'> <div class='caption'> <h3>" +catName+ "</h3> <div class='adopt-display'>" + catString + "  </div> <a href='index.html'>Adopt Me!</a> </div> </div> </div>");
  };
};

$(document).ready(function() {
  event.preventDefault();
  kitties=[];
  kittyCat();
  kittiesDisplay(kitties);

  $("a#adopt-me").last().click(function() {
    event.preventDefault();
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);


    var index = ".adopt-display" + ($(this).attr("choice"));

    $("index").append(kittiesDisplay());
  });
});

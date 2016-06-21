var kitties = [];
var catnames = ["Chairman Meow", "Lulu", "June", "Penny", "Queen Gwendolyn", "Hazel", "Huxley", "Meow Ming", "Buffy", "Mittens", "Keith", "Todd", "Chad", "Goober", "Randy", "Kat"];
var catpictures = ["img/lordweber.jpg", "img/lulu.jpg", "img/otto.jpg", "img/face-paw.jpg", "img/fluffybutt.jpg", "img/crosseyedcat.jpg", "img/huxley.jpg", "img/meowming.jpg"]
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
          var age = 1+(4*l)*Math.floor((5*Math.random())+1);

          var img = catpictures[Math.floor(8*Math.random())]

          var Kitten = new Kitty(kittyName, cats, kids, indoor, age, health, img);

          kitties.push(Kitten);
        }
      }
    }
  }
}

//refactor this into prototype. create a matchScore protoype that we run on each kitty object
function match (user, catArr) {
  matchedKitties=[];
  for(var i=0; i<catArr.length; i++) {
    var matchScore=0;
    if(catArr[i].isOnlyKitty === (user.haveCats==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].isOnlyChild === (user.haveKids==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].isIndoor === (user.isIndoor==="indoors")) {
      matchScore+=1;
    }
    if(catArr[i].health === (user.health==="Yes")) {
      matchScore+=1
    }
    if(Math.pow(catArr[i].age-user.age,2)<=16) {
      matchScore+=1;
    }
    if(matchScore>=4) {
      matchedKitties.push([catArr[i],matchScore]);
    }

  };
  matchedKitties.sort(function (a,b) {
    if(a[1]-b[1]<0) {
      return -1;
    } else if (a[1]-b[1]>0) {
      return 1;
    } else {
      return 0;
    }
  });
  return matchedKitties;
}

function User(firstName, lastName, haveCats, haveKids, userDOB, isIndoor, age, health) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.haveCats = haveCats;
  this.haveKids = haveKids;
  this.dob = userDOB;
  this.isIndoor = isIndoor;
  this.health = health;
  this.age = age;
}

function Kitty(kittyName, isOnlyKitty, isOnlyChild, kittyIsIndoor, kittyAge, kittyHealth, kittyImg) {
  this.kittyName = kittyName;
  this.isOnlyKitty = isOnlyKitty;
  this.isOnlyChild = isOnlyChild;
  this.isIndoor = kittyIsIndoor;
  this.age = kittyAge;
  this.health = kittyHealth;
  this.img = kittyImg;
}

User.prototype.fullName = function() {
  fullName=this.firstName+" "+this.lastName;
  return fullName;
}

$(document).ready(function() {
  $("#adopter-input").submit(function(event){
    event.preventDefault();
    kittyCat();
    userFirstName=$("input#firstName").val();
    userLastName=$("input#lastName").val();
    userDOB=$("input#userBirthDate").val();
    userHaveCats=$("#userHaveCats").val();
    userHaveKids=$("#userHaveKids").val();
    userIsIndoor=$("input:radio[name=indoorOutdoor]:checked").val();
    userCatAge=parseInt($("input#userCatAge").val());
    userCatHealth=$("#userCatHealth").val();

    var User1=new User(userFirstName, userLastName, userHaveCats, userHaveKids, userDOB, userIsIndoor, userCatAge, userCatHealth);
    $("#profile-display").show();
    $(".user-full-name").text(User1.fullName());
    $(".user-has-kids").text(User1.haveKids);
    $(".user-has-cats").text(User1.haveCats);
    $(".user-DOB").text(User1.dob);
    $(".cat-indoor").text(User1.isIndoor);
    $(".catHealthOutput").text(User1.health);
    $(".catAgeOutput").text(User1.age);
    yourCat=match(User1, kitties);
    $(".test-cat").text(yourCat[0][0].kittyName);
    $(".test-cat-img").html('<img src="'+yourCat[0][0].img+'" alt=your cat>');
  });
});

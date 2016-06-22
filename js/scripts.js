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
          var age = 1+(4*l)+Math.floor((5*Math.random())+1);
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
    if(catArr[i].canBeWithCats === (user.haveCats==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].canBeWithKids === (user.haveKids==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].isIndoor === (user.isIndoor==="indoors")) {
      matchScore+=1;
    }
    if(catArr[i].healthIssues === (user.healthIssues==="Yes")) {
      matchScore+=1
    }
    if(Math.pow(catArr[i].age-user.age,2)<=16) {
      matchScore+=0.5;
    }
    if(matchScore>=3.5) {
      matchedKitties.push([catArr[i],matchScore]);
    }
  };
  matchedKitties.sort(function (a,b) {
    if(a[1]-b[1]<0) {
      return 1;
    } else if (a[1]-b[1]>0) {
      return -1;
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

User.prototype.fullName = function() {
  var fullName=this.firstName+" "+this.lastName;
  return fullName;
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

function altKitties(list, remainingCats) {
  for (var i=1 ; i<remainingCats.length ; i++) {
    list.append("<li><span class=altcat choice="+i+">"+remainingCats[i][0].kittyName+"</span></li>");
  }
}

$(document).ready(function() {
  $("#adopter-input").submit(function(event){
    event.preventDefault();
    $("ol#other-cats li").remove();
    kitties=[];
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
    $(".user-indoor-pref").text(User1.isIndoor);
    $(".user-health-pref").text(User1.health);
    $(".user-age-pref").text(User1.age);
    var yourCat=match(User1, kitties);
    var bestCat=yourCat[0][0];
    $(".best-cat-name").text(bestCat.kittyName);
    $(".best-cat-picture").html('<img src="'+bestCat.img+'" class="img-thumbnail" width="304" height="236" alt=your cat>');
    altKitties($("ol#other-cats"),yourCat)
    $(".best-cat-name").click(function(event) {
      $(".cat-name").text(bestCat.kittyName)
      $(".cat-picture").html('<img src="'+bestCat.img+'" alt=your cat>')
      event.preventDefault();
      $("#cat-display").show();
      $(".cat-age").text(bestCat.age);
      $(".cat-other-cats").text(bestCat.beWithCatsString());
      $(".cat-kids").text(bestCat.beWithKidsString());
      $(".cat-indoor-pref").text(bestCat.indoorString());
      $(".cat-health").text(bestCat.healthString());
    });
    $(".altcat").click(function(event) {
      event.preventDefault();
      var index = $(this).attr("choice");
      $("#cat-display").show();
      console.log(index);
      $(".cat-name").text(yourCat[index][0].kittyName)
      $(".cat-picture").html('<img src="'+yourCat[index][0].img+'" alt=your cat>')
      $(".cat-age").text(yourCat[index][0].age);
      $(".cat-other-cats").text(yourCat[index][0].beWithCatsString());
      $(".cat-kids").text(yourCat[index][0].beWithKidsString());
      $(".cat-indoor-pref").text(yourCat[index][0].indoorString());
      $(".cat-health").text(yourCat[index][0].healthString());
    });
  });
  $("button#user-to-basic").click(function(event) {
    event.preventDefault();
    $("#user-info").hide()
    $("#basic-cat-info").show()
  });
  $("button#basic-to-user").click(function(event) {
    event.preventDefault();
    $("#user-info").show()
    $("#basic-cat-info").hide()
  });
  $("button#basic-to-advanced").click(function(event) {
    event.preventDefault();
    $("#advanced-cat-questions").show()
    $("#basic-cat-info").hide()
  });
  $("button#advanced-to-basic").click(function(event) {
    event.preventDefault();
    $("#advanced-cat-questions").hide()
    $("#basic-cat-info").show()
  });
});

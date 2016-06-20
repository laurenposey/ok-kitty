var kitties = [];
var catnames = [["Chairman Meow","img/lordweber.jpg"], ["Lulu","img/lulu.jpg"], ["June","img/otto.jpg"], ["Penny","img/face-paw.jpg"], ["Queen Gwendolyn","img/fluffybutt.jpg"], ["Hazel","img/crosseyedcat.jpg"], ["Huxley","img/huxley.jpg"], ["Meow Ming","img/meowming.jpg"]];
function kittyCat() {
  for(var i=0; i<=1; i++) {
    for(var j=0; j<=1; j++) {
      for(var k=0; k<=1; k++) {
        var kittyName = catnames[i+(2*j)+(4*k)]
        var cats=true;
        var kids=true;
        var indoor=true;
        if(i===0) {
          cats=false;
        }
        if(j===0) {
          kids=false;
        }
        if(k===0) {
          indoor=false;
        }
        var Kitten = new Kitty(kittyName, cats, kids, indoor, "01011990");
        kitties.push(Kitten);
      }
    }
  }
}

//refactor this into prototype. create a matchScore protoype that we run on each kitty object
function match (catArr, userCats, userKids, userIndoors) {
  matchedKitties=[];
  for(var i=0; i<catArr.length; i++) {
    var matchScore=0;
    if(catArr[i].isOnlyKitty === (userCats==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].isOnlyChild === (userKids==="Yes")) {
      matchScore+=1;
    }
    if(catArr[i].kittyIsIndoor === (userIndoors==="indoors")) {
      matchScore+=1;
    }
    if(matchScore>=3) {
      matchedKitties.push(catArr[i]);
    }
  };
  return matchedKitties;
}

function User(firstName, lastName, haveCats, haveKids, userDOB, isIndoor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.haveCats = haveCats;
  this.haveKids = haveKids;
  this.userDOB = userDOB;
  this.isIndoor = isIndoor;
}

function Kitty(kittyName, isOnlyKitty, isOnlyChild, kittyIsIndoor, kittyDOB) {
  this.kittyName = kittyName;
  this.isOnlyKitty = isOnlyKitty;
  this.isOnlyChild = isOnlyChild;
  this.kittyIsIndoor = kittyIsIndoor;
  this.kittyDOB = kittyDOB;
}

User.prototype.fullName = function() {
  fullName=this.firstName+" "+this.lastName;
  return fullName;
}

$(document).ready(function(){
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

    var User1=new User(userFirstName, userLastName, userHaveCats, userHaveKids, userDOB, userIsIndoor);
    $("#profile-display").show();
    $(".user-full-name").text(User1.fullName());
    $(".user-has-kids").text(User1.haveKids);
    $(".user-has-cats").text(User1.haveCats);
    $(".user-DOB").text(User1.userDOB);
    $(".cat-indoor").text(User1.isIndoor);
    yourCat=match(kitties,User1.haveCats, User1.haveKids, User1.isIndoor);
    $(".test-cat").text(yourCat[0].kittyName[0]);
    $(".test-cat-img").html('<img src="'+yourCat[0].kittyName[1]+'" alt=your cat>');
  });
});

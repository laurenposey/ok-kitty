var kitties = [];
var catnames = ["Chairman Meow", "Lulu", "June", "Penny", "Queen Gwendolyn", "Hazel", "Huxley", "Lady Meowingtons", "Meow Ming", "Todd", "Chad", "Steve", "Keith", "Mrs Little Piddles"];
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

function match (catArr, userCats, userKids, userIndoors) {
  matchedKitties=[];
  for(var i=0; i<catArr.length; i++) {
    var matchScore=0;
    debugger;
    if(catArr[i].isOnlyKitty === (userCats==="true")) {
      matchScore+=1;
    }
    if(catArr[i].isOnlyChild === (userKids==="true")) {
      matchScore+=1;
    }
    if(catArr[i].kittyIsIndoor === (userIndoors==="true")) {
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

User.prototype.haveKidsWritten = function() {
  if(this.haveKids) {
    return "have kids in the home";
  } else {
    return "do not have kids in the home";
  }
}
// User.prototype.haveCatsWritten = function() {
//   if(this.haveCats===0) {
//     return "do not have other cats at the moment";
//   } else if(this.haveCats===1) {
//     return "have one other cat";
//   } else {
//     return "have multiple cats";
//   }
// }

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
    // $(".user-full-name")=User1.fullName();
    // $(".user-has-kids")=User1.haveKidsWritten();
    // $(".user-has-cats")=User1.haveCatsWritten();
    // $(".user-DOB")=User1.userDOB;
    // $(".cat-indoor")=User1.isIndoor;
    yourCat=match(kitties,User1.haveCats, User1.haveKids, User1.isIndoor);
    console.log(yourCat)
    $(".test-cat").text(yourCat[0].kittyName)
  });
});

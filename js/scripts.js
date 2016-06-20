function User(firstName, lastName, haveCats, haveKids, userDOB, isIndoor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.haveCats = haveCats;
  this.haveKids = haveKids;
  this.userDOB = userDOB;
  this.isIndoor = isIndoor;
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
User.prototype.haveCatsWritten = function() {
  if(this.haveCats===0) {
    return "do not have other cats at the moment";
  } else if(this.haveCats===1) {
    return "have one other cat";
  } else {
    return "have multiple cats";
  }
}

$(document).ready(function(){
  $("#adopter-input").submit(function(event){
    event.preventDefault();
    userFirstName=$("input#firstName").val();
    userLastName=$("input#lastName").val();
    userDOB=$("input#userBirthDate").val();
    userHaveKids=$("#userHaveCats").val();
    userHaveKids=$("#userHaveKids").val();
    userIsIndoor=$("input:radio[name=indoorOutdoor]:checked").val();
    userCatAge=parseInt($("input#userCatAge").val());
    userCatHealth=$("#userCatHealth").val();

    var User1=new User(userFirstName, userLastName, userHaveCats, userHaveKids, userDOB, userIsIndoor);
    // $("profile-display").show();
    // $(".user-full-name")=User1.fullName();
    // $(".user-has-kids")=User1.haveKidsWritten();
    // $(".user-has-cats")=User1.haveCatsWritten();
    // $(".user-DOB")=User1.userDOB;
    // $(".cat-indoor")=User1.isIndoor;
    console.log(User1);
  });
});

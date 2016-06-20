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

$(document).ready(function(){
  $("#adopter-input").submit(function(){
    userFirstName=$("input#firstName").val();
    userLastName=$("input#lastName").val();
    userDOB=$("input#userBirthDate").val();
    userHaveKids=$("#userHaveCats").val();
    userHaveKids=$("#userHaveKids").val();
    userIsIndoor=$("input:radio[name=indoorOutdoor]:checked").val();
    userCatAge=parseInt($("input#userCatAge").val());
    userCatHealth=$("#userCatHealth").val();

    var User1=new User(userFirstName, userLastName, userHaveKids, userHaveKids, userDOB, userIsIndoor);

    $("profile-display").text("Hi "+User1.fullName()+", our records show you")
  });
});

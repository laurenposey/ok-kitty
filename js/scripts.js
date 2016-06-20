function User(firstName, lastName, haveCats, haveKids, dob, isIndoor) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.haveCats = haveCats;
  this.haveKids = haveKids;
  this.dob = dob;
  this.isIndoor = isIndoor;
}

User.prototype.fullName = function() {
  fullName=this.firstName+" "+this.lastName;
  return fullName;
}

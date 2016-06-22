$(document).ready(function(){
  $("form#rehome-input").submit(function(event){
    event.preventDefault();
    var catName=$("input#catName").val();
    var catAge=parseInt($("input#catAge").val());
    var catHealth=$("#catHealth").val();
    var otherCatsGood=$("#otherCatsGood").val();
    var humorsKids=$("#humorsKids").val();
    var catDeClawed=$("#catDeClawed").val();
    var moreInfo=$("#moreInfo").val();

    $("#kittyCatName").text(catName);
    $("#kittyCatAge").text(catAge);
    $("#kittyCatHealth").text(catHealth);
    $("#kittyOtherCatsGood").text(otherCatsGood);
    $("#kittyHumorsKids").text(humorsKids);
    $("#kittyDeClawed").text(catDeClawed);
    $("#kittyMoreInfo").text(moreInfo);
    $("#rehome-output").show();
    $(".rehome").toggle();
  });
});

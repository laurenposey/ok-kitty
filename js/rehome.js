$(document).ready(function(){
  $("form#rehome-input").submit(function(event){
    event.preventDefault();
    var catName=$("input#catName").val();
    var catAge=parseInt($("input#catAge").val());
    var catHealth=$("#catHealth").val();

    var otherCatsGood=$("#otherCatsGood").val();
    var humorsKids=$("#humorsKids").val();
    var catDeClawed=$("#catDeClawed").val();


    $("#rehome-output").show();
    $(".rehome").toggle();
  });
});

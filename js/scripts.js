$(document).ready(function() {

console.log("step one")

$("form#radios").submit(function(event) {

var weather = $("input:radio[name=weatherRadio]:checked").val();
var travel = $("input:radio[name=travelRadio]:checked").val();
var appealing = $("input:radio[name=appealingRadio]:checked").val();
var fun = $("input:radio[name=funRadio]:checked").val();
var vacation = $("input:radio[name=vacationRadio]:checked").val();
var insertname = $("input#name").val();

console.log("step two")

if (weather === "one" && travel === "two" && appealing === "three" && fun === "three" && vacation === "one"){
$(".showme").removeClass("showme");
$(".Hawaii").addClass("showme");
$(".insname").text(insertname);
}
else if (weather === "three" && travel === "two" && appealing === "three" && fun === "two" && vacation === "three"){
$(".showme").removeClass("showme");
$(".Disney").addClass("showme");
$(".insname").text(insertname);
}
else if (weather === "three" && travel === "one" && appealing === "two" && fun === "one" && vacation === "one"){
$(".showme").removeClass("showme");
$(".Grand").addClass("showme");
$(".insname").text(insertname);
}
else if (weather === "two" && travel === "two" && appealing === "three" && fun === "one" && vacation === "two"){
$(".showme").removeClass("showme");
$(".Italy").addClass("showme");
$(".insname").text(insertname);
}
else if (weather === "one" && travel === "three" && appealing === "one" && fun === "two" && vacation === "two"){
$(".showme").removeClass("showme");
$(".Gamboa").addClass("showme");
$(".insname").text(insertname);
}else {
$(".showme").removeClass("showme");
$(".Disney").addClass("showme");
$(".insname").text(insertname);
}


event.preventDefault();
  });
});

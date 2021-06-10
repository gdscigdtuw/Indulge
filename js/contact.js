
function mybutton1() {
  var x = document.getElementById("form1");
  if (x.style.display === "none") {
    x.style.display = "block";

  } else {
    x.style.display = "none";
  }
}

function mybutton2() {
  var x = document.getElementById("form2");
  var b=document.getElementById("formButton2");
  if (x.style.display === "none") {
    x.style.display = "block";
    b.color="red";
  } else {
    x.style.display = "none";
  }
}




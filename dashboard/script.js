function subTxtForm() {
  if ($("#txtEditorArea").val() !== "") {
    document.forms["txtForm"].submit();
  }
}
function subImgForm() {
  document.forms["imgForm"].submit();
}
$(document).ready(function(){
  $("#txtEditorArea").keyup(function(){
    $("#add_program").css("animationFillMode","none");
    $("#add_program").css("animation","none");
    $("#inputType").remove();
    $("#add_program").css("paddingBottom","70px");
    if($(this).val() == "") {
      $("#add_program").css("backgroundColor","rgb(60,60,60)");
      $("#add_program").css("color","rgb(150,160,160)");
      $("#add_program").unwrap();
    } else {
      $("#add_program").css("backgroundColor","rgb(50,140,50)");
      $("#add_program").css("color","rgb(170,210,180)");
      $("#add_program").wrap("<span onclick='subTxtForm();' />");
    }
  });
});
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#preview').attr('src', e.target.result)
      document.getElementById("preview").style.visibility = "visible";
      $("#add_program").css("animationFillMode","none");
      $("#add_program").css("animation","none");
      $("#inputType").remove();
      $("#add_program").css("paddingBottom","70px");
      $("#add_program").css("backgroundColor","rgb(50,140,50)");
      $("#add_program").css("color","rgb(170,210,180)");
      $("#add_program").wrap("<span onclick='subImgForm();' />");
    };
    reader.readAsDataURL(input.files[0]);
  }
}
var AddProgramState = 0;
function ajouteruncours() {
  if (AddProgramState === 0) {
    AddProgramState = 1;
    document.getElementById('inputType').className = 'triggerInputType';
    document.getElementById('add_program').style.animationPlayState = 'running';
    setTimeout(function() {document.getElementById('add_program').style.animationPlayState = 'paused'}, 250);
    $("#unwrapMe1").wrap("<a href='#' onclick='startTXT()' style='color: #FFFFFF;' />");
    $("#unwrapMe2").wrap("<a href='#' onclick='startIMG()' style='color: #FFFFFF;' />");
  }
}
function startTXT() {
  document.getElementById('add_program').style.animationPlayState = 'running';
  document.getElementById('inputType').style.animationFillMode = "none";
  document.getElementById('inputType').style.opacity = 0;
  document.getElementById('ajouteruncours').innerHTML = "<h1>valider</h1>"
  document.getElementById('txtEditor').className = 'triggerTxtEditor';
  document.getElementById('txtEditorSubDiv').style.opacity = "0";
  document.getElementById('add_program').style.float = "left";
  document.getElementById('bottomContainer').style.opacity = "0";
  $('#unwrapMe1').unwrap();$('#unwrapMe2').unwrap();
  $('#bottomContainer').remove();
  $('#txtForm').unwrap();
  $('#imgEditor').remove();
  setTimeout(function() {document.getElementById('txtEditorArea').style.visibility = 'visible'}, 400);
}
function startIMG() {
  document.getElementById('add_program').style.animationPlayState = 'running';
  document.getElementById('add_program').style.float = "right";
  document.getElementById('inputType').style.animationFillMode = "none";
  document.getElementById('inputType').style.opacity = 0;
  document.getElementById('ajouteruncours').innerHTML = "<h1>valider</h1>"
  document.getElementById('imgEditor').className = 'triggerImgEditor';
  document.getElementById('imgEditorSubDiv').style.opacity = "1";
  document.getElementById('bottomContainer').style.opacity = "0";
  $('#unwrapMe1').unwrap();$('#unwrapMe2').unwrap();
  $('#bottomContainer').remove();
  $('#txtEditor').remove();
}

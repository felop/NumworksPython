window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if (window.mobileAndTabletCheck() === true) {
  //window.location.replace("mobile.html");
}

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}

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
    var cssVars = getComputedStyle(document.body);
    if($(this).val() == "") {
      $("#add_program").css("backgroundColor",cssVars.getPropertyValue("--add_program-bg-color-reveal"));
      $("#add_program").css("color",cssVars.getPropertyValue("--add_program-text-color-reveal"));
      $("#add_program").unwrap();
    } else {
      $("#add_program").css("backgroundColor",cssVars.getPropertyValue("--add_program-bg-color-green"));
      $("#add_program").css("color",cssVars.getPropertyValue("--add_program-text-color-green"));
      $("#add_program").wrap("<span onclick='subTxtForm();' />");
    }
  });
});
function readURL(input) {
  var cssVars = getComputedStyle(document.body);
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#preview').attr('src', e.target.result)
      document.getElementById("preview").style.visibility = "visible";
      $("#add_program").css("animationFillMode","none");
      $("#add_program").css("animation","none");
      $("#inputType").remove();
      $("#add_program").css("paddingBottom","70px");
      $("#add_program").css("backgroundColor",cssVars.getPropertyValue("--add_program-bg-color-green"));
      $("#add_program").css("color",cssVars.getPropertyValue("--add_program-text-color-green"));
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
  setTimeout(function() {$('#bottomContainer').remove();}, 200);
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
  setTimeout(function() {$('#bottomContainer').remove();}, 200);
  $('#txtEditor').remove();
}

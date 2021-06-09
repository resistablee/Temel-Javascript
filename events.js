function btnClick(){
    alert("Tıklandı!");
}

function getInfo(element){
    alert(element.innerHTML);
}

function changeText(){
    var element = document.getElementById('etiket');
    element.style.color = "red";
}

function mouseover(element){
    element.classList.remove('btn-dark');
    element.classList.add("btn-danger");
}

function mouseout(element){
    element.classList.remove('btn-danger', 'btn-success');
    element.classList.add("btn-dark");
}

function mouseclick(element){
    element.classList.remove('btn-danger');
    element.classList.add("btn-success");
}

function frmControl() {
    var frm = document.forms['form1'];

    var mail = frm['inputEmail3'].value;
    var pass = frm['inputPassword3'].value;

    if (mail != "" && pass != "") {
        return true;
    }

    alert("Mail ve şifre alanları boş geçilemez.")
    return false;
}
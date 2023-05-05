//Lucas Monstes e Ruan Mendes
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = (slider.value + "m");

var bombaAtivada = document.getElementById("bombOn");
var bombaDesativada = document.getElementById("bombOff");
var bombStatus = [indicator = document.getElementById("bombAlert"), bombLabel = document.getElementById("statusBomb")];

var activate = true;
var trava = false;
indicator.style.backgroundColor = "#07E02A";
bombLabel.innerHTML = "ARMADO";


//SEU CÓDIGO AQUI
bombaDesativada.addEventListener('click',  function()  {
    bombLabel.innerHTML = "DESATIVADA";
    indicator.style.backgroundColor = "#FF0000";
    activate = false;
});

bombaAtivada.addEventListener('click', function() {
    bombLabel.innerHTML = 'ATIVADA';
    indicator.style.backgroundColor = "#07E02A";
    activate = true;

    if (slider.value > 20){
        alert('volte!!');
        trava = true;
        console.log('trava ligada');
    }
});
//SEU CÓDIGO AQUI

slider.oninput = function () {
    output.innerHTML = (this.value + "m");

    if (activate === true) {

        if (this.value <= 20) {
            trava = false;
        }
        else if (this.value > 20 && (trava === false && activate === true)){
            document.getElementById("bombImg").style.display = "block";
            document.getElementById("headerBomb").style.display = "block";
            document.getElementById("restart").style.display = "block";
        }
    }
};
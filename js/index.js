const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijerasBtn = document.getElementById("tijeras");
const resultText = document.getElementById("resultado");
const machineImg = document.getElementById("machine-img");
const userImg = document.getElementById("user-img");
const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";
const empate = 0;
const ganaste = 1;
const perdiste = 2;

piedraBtn.addEventListener("click", ()=>{
    play(piedra);
});
papelBtn.addEventListener("click", ()=>{
    play(papel);
});
tijerasBtn.addEventListener("click", ()=>{
    play(tijeras);
});

function play(userOption){
    userImg.src = "img/"+userOption+".png";
    resultText.innerHTML = "Pensando"
    machineImg.src = "img/pensando.png";
    setTimeout(function () {
        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);
    
        machineImg.src = "img/"+machineOption+".png";
    
        switch(result){
            case empate:
                resultText.innerHTML = "Empate 😅";
                break;
            case ganaste:
                resultText.innerHTML = "Ganaste! 😎"
                break;
            case perdiste:
                resultText.innerHTML = "Perdiste 😭";
                break;
        }
    }, 1500)
}
function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijeras;
    }
}
function calcResult(userOption, machineOption){
    if(userOption == machineOption){
        return empate;
    }
    else if(userOption == piedra){
        if(machineOption == tijeras) return ganaste;
        if(machineOption == papel) return perdiste;
    }
    else if(userOption == papel){
        if(machineOption == piedra) return ganaste;
        if(machineOption == tijeras) return perdiste;
    }
    else if(userOption == tijeras){
        if(machineOption == papel) return ganaste;
        if(machineOption == piedra) return perdiste;
    }
}
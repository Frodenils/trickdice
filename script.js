let trick1 = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];

let trick2 = ["dice2-01.svg",
"dice2-02.svg",
"dice2-03.svg",
"dice2-04.svg",
"dice2-05.svg",
"dice2-06.svg",
"dice2-07.svg",
"dice2-08.svg",
"dice2-09.svg"];

let trick3 = ["dice3-01.svg",
"dice3-02.svg",
"dice3-03.svg",
"dice3-04.svg",
"dice3-05.svg",
"dice3-06.svg"];
let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*9);
        let dieThreeValue = Math.floor(Math.random()*6);
        console.log(dieOneValue,dieTwoValue,dieThreeValue);
        document.querySelector("#die-1").setAttribute("src", trick1[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", trick2[dieTwoValue]);
        document.querySelector("#die-3").setAttribute("src", trick3[dieThreeValue]);



        let stancenb = Math.floor(Math.random()*5);
        switch (stancenb) {
            case (stancenb = 0):
                document.getElementById('stance').innerText = 'Regular';
                console.log(stance)
                break;
            case (stancenb = 1):
                document.getElementById('stance').innerText = 'Fakie';
                console.log(stance);
                break;
            case (stancenb = 2):
                document.getElementById('stance').innerText = 'Switch';
                console.log(stance);
                break;
            case (stancenb = 3):
                document.getElementById('stance').innerText = 'Nollie';
                console.log(stance);
                break;
            case (stancenb = 4):
                document.getElementById('stance').innerText = "N'importe";
                console.log(stance);
                break;
            default:
                console.log('Veuillez choisir un nombre entre 0 et 5 !');
          }
    },
    1000
    );
}
roll();
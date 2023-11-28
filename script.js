document.getElementById("btn").addEventListener("click", showMad)

function showMad () {

    let mad1 = document.getElementById("mad-1").value;
    let mad2 = document.getElementById("mad-2").value;
    let mad3 = document.getElementById("mad-3").value;


    let madLib = `My ${mad1} loves to eat ${mad2} and then ${mad3}`;

    document.getElementById("target").innerHTML = madLib;

}
const xpos = prompt("Sett X-aksen")
const ypos = prompt("Sett Y-aksen")
const abs = document.getElementById("pos")

abs.style.backgroundColor ="red";
abs.style.width = "50px";
abs.style.height = "50px";
abs.style.left = `${xpos}px`;
abs.style.top = `${ypos}px`;

/*

function leggSammen(tall1, tall2) {
    console.log(tall1 + tall2)
}

function flytt() {
    pos.style.left = inpTall1 + "px"
    pos.style.top = inpTall2 + "px"
}

inpTall1.oninput.flytt;
*/
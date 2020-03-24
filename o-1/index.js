/*const inpNavn = document.
querySelector("#inpNavn");
const btn = document.querySelector("#btn");

function visNavn() {
    document.body.innerHTML +=
    `<h3>Hallo ${inpNavn.value} Granrud</h3>`
}

btn.addEventListener("click",visNavn)


let navn = "Nini";
// navn + " Granrud";
navn = navn + " Granrud";

console.log(navn);*/

const navnliste = document.querySelector("#navnliste");

const inpNavn = document.querySelector("#inpNavn");

function leggTilNavn() {
    navnliste.innerHTML += `<li>${inpNavn.value}</li>`;
}


inpNavn.onchange = leggTilNavn;
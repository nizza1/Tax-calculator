


const singelPerson = document.getElementById("singelPerson")

const paar = document.getElementById("paar")

const gesamtEinkommen = document.getElementById("gesamtEinkommen")

const einkommensteuerOutput = document.querySelector("#einkommensteuerOutput")

function berechnen() {
    let gesamtEinkommenLocal = Number(gesamtEinkommen.value)
    let singelPersonLocal = singelPerson.checked
    let gesamtEinkommenPaar = Number(gesamtEinkommen.value) /2 
    let einkommenZuBerechnen = ""
    if (singelPerson.checked) {
        einkommenZuBerechnen = gesamtEinkommenLocal
    } else { einkommenZuBerechnen = gesamtEinkommenPaar
    }

    ESt= ""
    if (einkommenZuBerechnen <=10347) {
        ESt = 0
    } else if (einkommenZuBerechnen > 10347 && einkommenZuBerechnen <= 14926 ) {
        y = (einkommenZuBerechnen - 10347) /10000
        ESt = (1088.67 * y + 1400)* y
    } else if (einkommenZuBerechnen > 14926 && einkommenZuBerechnen <= 58596) {
        z = (einkommenZuBerechnen - 14926) /10000
        ESt = (206.34 * z + 2.397)* z + 869.32
    } else if (einkommenZuBerechnen > 58596 && einkommenZuBerechnen <= 277825) {
        ESt = 0.45 * einkommenZuBerechnen - 9336.45
    } else {
        ESt = 0.45 * einkommenZuBerechnen - 17671.20
    }

    einkommensteuerOutput.innerHTML = ESt.toFixed(2)


}
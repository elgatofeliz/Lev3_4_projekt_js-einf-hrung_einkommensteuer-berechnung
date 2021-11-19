let check = () => {
    let single = document.getElementById("single")
    let dual = document.getElementById("dual")
    let incomeX = document.getElementById("income").value
    let year = document.getElementById("year")
    let ausgabe = document.getElementById("ergebnis")
    let church = document.getElementById("kirche").value
    let kirche = document.getElementById("ergebnisKirche")
    let gesamt = document.getElementById("gesamt")

    // Hier wird zwischen einem oder zwei Menschen unterschieden

    let income2 = () => {
        let incomeXYZ
        if (single.checked) {
            incomeXYZ = incomeX
        } else if (dual.checked) {
            incomeXYZ = incomeX / 2
        }
        return incomeXYZ;
    }
    let income = income2()

    // Hier findet die eigentliche Berechnung Statt, das Ergebnis wird in der Variable "ergebnis" zwischengespeichert

    let calc = () => {
        let ergebnis
        switch (year.value) {
            case "2019":
                if (income < 9168) {
                    ergebnis = income * 0
                } else if (income >= 9169 && income <= 14254) {
                    let y = ((income - 9168) / 10000)
                    let est = (980.14 * y + 1400) * y
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 14255 && income <= 55960) {
                    let z = ((income - 14253) / 10000)
                    let est = (216.16 * z + 2397) * z + 965.58
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 55961 && income <= 265326) {
                    let est = income * 0.42 - 8780.90
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 265327) {
                    let est = income * 0.45 - 16740.68
                    ergebnis = Math.floor(est).toFixed(2)
                }
                break;
            case "2020":
                console.log("single_2020")
                if (income < 9408) {
                    ergebnis = income * 0
                } else if (income >= 9409 && income <= 14532) {
                    let y = ((income - 9408) / 10000)
                    let est = (972.87 * y + 1400) * y
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 14533 && income <= 57051) {
                    let z = ((income - 14532) / 10000)
                    let est = (212.02 * z + 2397) * z + 972.79
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 57052 && income <= 270500) {
                    let est = income * 0.42 - 8963.74
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 270.501) {
                    let est = income * 0.45 - 17078.74
                    ergebnis = Math.floor(est).toFixed(2)
                }
                break;
            case "2021":
                console.log("single_2021")
                if (income < 9744) {
                    ergebnis = income * 0
                } else if (income >= 9745 && income <= 14753) {
                    let y = ((income - 9744) / 10000)
                    let est = (995.21 * y + 1400) * y
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 14754 && income <= 57918) {
                    let z = ((income - 14753) / 10000)
                    let est = (208.85 * z + 2397) * z + 950.96
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 57919 && income <= 274612) {
                    let est = income * 0.42 - 9136.63
                    ergebnis = Math.floor(est).toFixed(2)
                } else if (income >= 274613) {
                    let est = income * 0.45 - 17374.99
                    ergebnis = Math.floor(est).toFixed(2)
                }
                break;
        }

        // Hier kommt die Kirchensteuer ins Spiel und wird in "kirchensteuerX" gespeichert

        let churchCrisis = () => {
            let kirchensteuerX
            if (church == 8) {
                kirchensteuerX = (ergebnis * 0.08).toFixed(2)
                console.log("kirche8")
            } else if (church == 9) {
                kirchensteuerX = (ergebnis * 0.09).toFixed(2)
                console.log("kirche9")
            } else if (church == 0) {
                kirchensteuerX = (ergebnis * 0.00).toFixed(2)
                console.log("kirche0")
            }
            return kirchensteuerX;
        }
        let kirchensteuer = churchCrisis()

        // Hier werden am ende die Ergebnisse ausgegeben

        ausgabe.innerHTML = ergebnis + "€"
        kirche.innerHTML = kirchensteuer + "€"
        gesamt.innerHTML = (ergebnis * 1) + (kirchensteuer * 1) + "€"
    }

    // Hier wird ermittelt ob die Berechnung gestartet werden kann, oder ob noch Eingaben fehlen

    if (single.checked == false && dual.checked == false || year.value == "" || income.value == "") {
        document.getElementById("nope").innerHTML = "fehlt noch was.."
    } else {
        document.getElementById("nope").innerHTML = ""
        calc()
    }
}
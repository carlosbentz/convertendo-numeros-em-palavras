const unidades = ["", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"]
const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
const centenas = ["cem", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]
const otherNumbers = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
const allNumbers = [unidades, dezenas, centenas, otherNumbers]


const showNumbers = (n) => {
    let createNumber = document.createElement("p")
    createNumber.innerHTML = n
    document.body.appendChild(createNumber)
}


const numbersToWords = () => {
    let arrNumbers = []
    for (let i = 1; i < 1000; i++) {
        let stringIndex = i.toString()
        stringIndex = stringIndex.split("").reverse().join("")
        let actualNumber = ""

        if (stringIndex.length > 2) {

            actualNumber += " " + allNumbers[2][stringIndex[2] - 1]

            if (Number(stringIndex[0]) !== 0 || Number(stringIndex[1]) !== 0) {
                actualNumber += " e "
            }
        }


        if (stringIndex.length > 1) {
            if (Number(stringIndex[1]) !== 1) {
                if (Number(stringIndex[1]) === 0) {
                    actualNumber += ""
                }
                else {
                    actualNumber += " " + allNumbers[1][stringIndex[1] - 1]
                    if (Number(stringIndex[0]) !== 0) {
                        actualNumber += " e "
                    }
                }
            }
            if (stringIndex[1] == 1) {
                if (stringIndex[1] == 1) {
                    actualNumber += " " + allNumbers[3][stringIndex[0]]
                }
            }
        }

        if (Number(stringIndex[1]) !== 1) {
            actualNumber += " " + allNumbers[0][stringIndex[0]]
        }
        showNumbers(actualNumber)
        arrNumbers.push(actualNumber)
    }
    return arrNumbers
}

console.log(numbersToWords())
const inputHex = document.querySelector('input')
const inputRed = document.querySelectorAll('input')[1]
const inputGreen = document.querySelectorAll('input')[2]
const inputBlue = document.querySelectorAll('input')[3]
const inputCSS = document.querySelectorAll('input')[4]
const colorBox = document.querySelector('.color-box')

const convertBtn = document.querySelector('button')
const resetBtn = document.querySelectorAll('button')[1]

let [red, green, blue] = [0,0,0]

function rgb(num) {
    if (num == 'A'){
        return 10
    } else if (num == 'B'){
        return 11
    } else if (num == 'C'){
        return 12
    } else if (num == 'D'){
        return 13
    } else if (num == 'E'){
        return 14
    } else if (num == 'F'){
        return 15
    } else{
        return num
    }
}

function convert() {
    // Remove '#' if present
    let hex = inputHex.value.replace('#', '')

    if (hex.length !== 6) {
        // handle invalid hex input
        alert('Please enter a valid six-digit hex color code')
        return;
    }

    // Split the hex values into red, green and blue components
    let redHex = hex.substring(0, 2)
    let greenHex = hex.substring(2, 4)
    let blueHex = hex.substring(4, 6)

    // Convert hex to decimal
    let redDec = parseInt(redHex, 16)
    let greenDec = parseInt(greenHex, 16)
    let blueDec = parseInt(blueHex, 16)

    // Update RGB input fields
    inputRed.value = redDec
    inputGreen.value = greenDec
    inputBlue.value = blueDec

    let colorVal = `rgb(${redDec}, ${greenDec}, ${blueDec})`

    // Update CSS color field
    inputCSS.value = colorVal
    colorBox.style.background = `${colorVal}`
}

function reset() {
    inputHex.value = ""
    inputRed.value = ""
    inputGreen.value = ""
    inputBlue.value = ""
    inputCSS.value = ""
    colorBox.style.background = `white`
}

resetBtn.addEventListener('click', reset)
convertBtn.addEventListener('click', convert)
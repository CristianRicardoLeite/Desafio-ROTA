

export function convertToRoman(arabicNumber) {
    const romanNumerals = [
        { roman: 'M', number: 1000 },
        { roman: 'CM', number: 900 },
        { roman: 'D', number: 500 },
        { roman: 'CD', number: 400 },
        { roman: 'C', number: 100 },
        { roman: 'XC', number: 90 },
        { roman: 'L', number: 50 },
        { roman: 'XL', number: 40 },
        { roman: 'X', number: 10 },
        { roman: 'IX', number: 9 },
        { roman: 'V', number: 5 },
        { roman: 'IV', number: 4 },
        { roman: 'I', number: 1 }
    ]

    let romanLetter = ''
    let number = arabicNumber;

    for (let i = 0; i < romanNumerals.length; i++) {
        if (romanNumerals[i].number <= number) {
            number = number - romanNumerals[i].number;
            romanLetter = romanLetter + romanNumerals[i].roman

            i--
        }
    }

    return `O numero arábico que você digitou é ${arabicNumber} e em numeros romanos é representado por ${romanLetter}`
}

export function convertToArabic(romanNumber) {
    const romanNumerals = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let arabicNumber = 0;
    let prevValue = 0;

    for (let i = romanNumber.length - 1; i >= 0; i--) {
        const numeral = romanNumber[i];
        const value = romanNumerals[numeral];

        if (value >= prevValue) {
            arabicNumber += value;
        } else {
            arabicNumber -= value;
        }

        prevValue = value;
    }

    return `O numero que você digitou representados pelas letras ${romanNumber} em numeros arábicos é ${arabicNumber}`
}



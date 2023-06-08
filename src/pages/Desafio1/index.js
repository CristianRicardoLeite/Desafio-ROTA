import React, { useEffect, useState } from 'react'
import { convertToArabic, convertToRoman } from './utils'

import { Container, InputContainer, UpperContainer, DownContainer, ButtonResult, Button } from './styles'

export function Desafio1() {

    const [number, setNumber] = useState();
    const [RomanNumeral, setRomanNumeral] = useState();
    const [convertedValue, setConvertedValue] = useState();

    const inputNumberValue = document.querySelector('.numberInput')
    const inputTextValue = document.querySelector('.textInput')

    console.log(inputNumberValue)

    const handleChangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const handleChangeLetter = (e) => {
        setRomanNumeral(e.target.value)
    }

    const inputValue = () => {
        if (inputNumberValue.value > 0) {

            setConvertedValue(convertToRoman(inputNumberValue.value))

        } else if (inputTextValue.value !== '') {

            setConvertedValue(convertToArabic(inputTextValue.value))
        }

        inputTextValue.value = ''
        inputNumberValue.value = ''
    }

    useEffect(() => {

    }, [convertedValue, RomanNumeral, number])


    return (
        <Container>
            <img src='https://parceiro.rotadasoficinas.com.br/assets/images/home-logo-large.633a2c7a.png' alt='Logo-Rota-das-Oficinas' />
            <InputContainer>
                <UpperContainer>
                    <div>
                        <label> Numero Arábico </label>
                        <input className='numberInput' type="number" onChange={handleChangeNumber} placeholder='Ex: 25'></input>
                    </div>
                    <div>
                        <label> Numero Romano </label>
                        <input className='textInput' type="text" onChange={handleChangeLetter} placeholder='Ex: XXV'></input>
                    </div>
                </UpperContainer>
                <DownContainer>
                    <Button onClick={inputValue}>Converter</Button>
                    <ButtonResult>
                        {convertedValue}
                    </ButtonResult>
                </DownContainer>


            </InputContainer>
        </Container>
    )
}

import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
margin: 0;
background: #171717;
display: flex;
width: 100%;
height: 98vh;

    img{
        margin: 3rem 3rem;
        width: 250px;
        height: 250px;
    }
`

export const InputContainer = styled.div`
    background-image: url(https://www.rotadasoficinas.com.br/assets/images/background-planos-rota.9730b3e6.jpg);
    background-color: rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-position: -600px 3px;
    justify-content: center;
    width: 40%;
    height: 69%;
    margin: 10px auto;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    padding: 8rem;
    gap:1rem;

`

export const UpperContainer = styled.div`
    display:flex;
    justify-content: center ;
    gap: 2rem;

    div{
        display: flex;
        flex-direction: column;
    }

    label{
        margin-left: 20px;
        margin-bottom: 10px;
        font-weight: 900;
        font-size: 1.5rem;
    }

    input{
        font-size: 1.2rem;
        width: 80%;
        opacity: 0.7;
        height: 30px;
        border-radius: 20px;
        padding: 10px;
        border: 2px solid #FFA400;
    }
`

export const DownContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:5rem;

`

export const Button = styled.button`
  width: 30%;
  height: 60px;
  background: linear-gradient(90.06deg,#258B2B -4.45%,#09BC04 57.06%);
  border-radius: 1.25rem;
  cursor: pointer;
  border: none;
  margin-top: 25px;
  font-style: bold;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`

export const ButtonResult = styled.button`
width: 80%;
height: 75%;
padding: 5px;
border-radius: 30px;
font-size: 2rem;
color: black;
font-weight: bold;
font-style: bold;
background-color: rgba(0, 0, 0, 0.5);
`


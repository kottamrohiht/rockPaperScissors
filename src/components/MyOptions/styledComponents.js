import styled from 'styled-components'

export const ItemsButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  margin-top: 70px;
  @media (min-width: 768px) {
    width: 50%;
    margin-top: 40px;
  }
`

export const Button = styled.button`
  border: 0px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  width: 175px;

  @media (min-width: 768px) {
    width: 200px;
    margin-right: 30px;
    margin-top: 10px;
  }
`

export const Img = styled.img`
  width: 100%;
  cursor: pointer;
`

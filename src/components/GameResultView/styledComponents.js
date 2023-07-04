import styled from 'styled-components'

export const Heading = styled.h1`
  color: white;
  padding: 0px;
  margin: 0px;
  margin-top: 10px;
`

export const MainContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid white;
  margin-top: 5px;

  width: 95%;
  @media (min-width: 768px) {
    width: 60%;
    margin-top: 20px;
  }
  padding: 15px;
  border-radius: 10px;
`

export const ItemHeadingContainer = styled.div`
  width: 30%;
`

export const Item = styled.p`
  color: white;
  margin: 0px;
  margin-bottom: 2px;
  font-family: 'Bree Serif';
  font-weight: 500;
`

export const Score = styled(Item)`
  color: #223a5f;
  font-size: 20px;
`

export const Result = styled.p`
    font-size : 30px;
  color: #223a5f;
  margin: 0px;
  font-family : "Roboto"
  font-weight: 900;
`

export const ResultContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  align-self: stretch;
  width: 30%;
  @media (min-width: 768px) {
    width: 15%;
  }
`

export const ItemsButtonContainer = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  margin-top: 70px;
  padding-left: 0px;
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

export const PopupContainer = styled.div`
  width: 90%;
  text-align: right;
  margin-top: auto;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 60%;
  }
`

export const PopupButton = styled.button`
  color: #223a5f;
  background-color: white;
  cursor: pointer;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  font-size: 15px;
`

export const RulesImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 16px 0px black;
  width: 320px;
  height: 320px;
  background-color: white;
  padding-bottom: 20px;
  border-radius: 10px;
  padding-top: 20px;

  @media (min-width: 768px) {
    width: 800px;
    height: 550px;
    background-color: white;
    padding-bottom: 20px;
    border-radius: 10px;
    padding-top: 20px;
  }
`

export const RulesImg = styled.img`
  width: 90%;
  @media (min-width: 768px) {
    width: 70%;
  }
`

export const CloseButtonContainer = styled.div`
  width: 90%;
  margin-bottom: 20px;
  text-align: right;

  @media (min-width: 768px) {
    margin-bottom: auto;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px;
  font-size: 25px;
`

export const ResultImgMainContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: 'column';
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 70px;
  height: 40%;
  @media (min-width: 768px) {
    width: 40%;
    margin-top: 70px;
  }
`

export const ResultImgContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: 'row';
  align-items: center;
  justify-content: space-between;
`

export const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (min-width: 768px) {
    width: 40%;
  }
`
export const Text = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Bree Serif';
  width: 100%;
  text-align: center;
  margin: 0px;
  margin-bottom: 5px;
`

export const ResultImg = styled.img`
  width: 80%;
`

export const PlayAgainButton = styled.button`
  background-color: white;
  font-size: 15px;
  font-family: 'Bree Serif';
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 0px;
  border: 0px;
  border-radius: 7px;
  cursor: pointer;
`

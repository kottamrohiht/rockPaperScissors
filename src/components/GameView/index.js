import {Component} from 'react'

import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

import MyOptions from '../MyOptions'
import GameResultView from '../GameResultView'

import {
  MainContainer,
  Heading,
  ScoreContainer,
  ItemHeadingContainer,
  Item,
  ItemsButtonContainer,
  ResultContainer,
  Score,
  Result,
  PopupContainer,
  PopupButton,
  RulesImgContainer,
  RulesImg,
  CloseButtonContainer,
  CloseButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameView extends Component {
  state = {
    showResult: false,
    userImg: '',
    opponentImg: '',
    totalScore: 0,
    gameResult: '',
  }

  myOption = id => {
    const userOptions = choicesList.filter(each => each.id === id)

    const opponentOption =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const myId = userOptions[0].id
    const opponentId = opponentOption.id

    if (
      (myId === 'ROCK' && opponentId === 'SCISSORS') ||
      (myId === 'SCISSORS' && opponentId === 'PAPER') ||
      (myId === 'PAPER' && opponentId === 'ROCK')
    ) {
      this.setState(prevState => ({
        showResult: true,
        userImg: userOptions[0].imageUrl,
        opponentImg: opponentOption.imageUrl,
        totalScore: parseInt(prevState.totalScore) + 1,
        gameResult: 'YOU WON',
      }))
    } else if (myId === opponentId) {
      this.setState(prevState => ({
        showResult: true,
        userImg: userOptions[0].imageUrl,
        opponentImg: opponentOption.imageUrl,
        totalScore: prevState.totalScore,
        gameResult: 'IT IS DRAW',
      }))
    } else if (
      (myId === 'SCISSORS' && opponentId === 'ROCK') ||
      (myId === 'PAPER' && opponentId === 'SCISSORS') ||
      (myId === 'ROCK' && opponentId === 'PAPER')
    ) {
      this.setState(prevState => ({
        showResult: true,
        userImg: userOptions[0].imageUrl,
        opponentImg: opponentOption.imageUrl,
        totalScore: prevState.totalScore - 1,
        gameResult: 'YOU LOSE',
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      showResult: false,
      userImg: '',
      opponentImg: '',
      gameResult: '',
    })
  }

  render() {
    const {
      showResult,
      userImg,
      opponentImg,
      totalScore,
      gameResult,
    } = this.state
    return (
      <MainContainer>
        <Heading> Rock Paper Scissors </Heading>
        <ScoreContainer>
          <ItemHeadingContainer>
            <Item> ROCK </Item>
            <Item> PAPER </Item>
            <Item> SCISSORS </Item>
          </ItemHeadingContainer>
          <ResultContainer>
            <Score> Score </Score>
            <Result> {totalScore} </Result>
          </ResultContainer>
        </ScoreContainer>

        {showResult ? (
          <GameResultView
            userImg={userImg}
            opponentImg={opponentImg}
            gameResult={gameResult}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        ) : (
          <ItemsButtonContainer>
            {choicesList.map(each => (
              <MyOptions myOption={this.myOption} key={each.id} item={each} />
            ))}
          </ItemsButtonContainer>
        )}

        <PopupContainer>
          <Popup
            modal
            trigger={<PopupButton type="button"> Rules </PopupButton>}
          >
            {close => (
              <RulesImgContainer>
                <CloseButtonContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseButtonContainer>
                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="Rules"
                />
              </RulesImgContainer>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default GameView

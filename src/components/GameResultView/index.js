import {
  ResultImgMainContainer,
  ResultImgContainer,
  YouContainer,
  Text,
  ResultImg,
  PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
  const {userImg, opponentImg, gameResult, onClickPlayAgain} = props

  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <ResultImgMainContainer>
      <ResultImgContainer>
        <YouContainer>
          <Text> YOU </Text>
          <ResultImg src={userImg} alt="your choice" />
        </YouContainer>

        <YouContainer>
          <Text> OPPONENT </Text>
          <ResultImg src={opponentImg} alt="opponent choice" />
        </YouContainer>
      </ResultImgContainer>

      <Text> {gameResult} </Text>
      <PlayAgainButton onClick={playAgain} type="button">
        PLAY AGAIN
      </PlayAgainButton>
    </ResultImgMainContainer>
  )
}

export default GameResultView

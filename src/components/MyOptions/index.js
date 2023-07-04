import {Button, Img} from './styledComponents'

const MyOptions = props => {
  const {item, myOption} = props
  const {id, imageUrl} = item

  const onClickUser = () => {
    myOption(id)
  }

  const buttonId = () => {
    let dataTestid = ''
    switch (id) {
      case 'ROCK':
        dataTestid = 'rockButton'
        break
      case 'SCISSORS':
        dataTestid = 'scissorsButton'
        break
      case 'PAPER':
        dataTestid = 'paperButton'
        break

      default:
        break
    }

    return dataTestid
  }

  const pageButtonId = buttonId()

  return (
    <Button data-testid={pageButtonId} onClick={onClickUser} type="button">
      <Img src={imageUrl} alt={id} />
    </Button>
  )
}

export default MyOptions

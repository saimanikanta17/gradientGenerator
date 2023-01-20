import {DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirection, changeDirection, direction} = props
  const {displayText, value} = gradientDirection
  const clickButton = () => {
    changeDirection(value)
  }
  const isActive = direction === value
  return (
    <li>
      <DirectionButton isActive={isActive} type="button" onClick={clickButton}>
        {displayText}
      </DirectionButton>
    </li>
  )
}

export default GradientDirectionItem

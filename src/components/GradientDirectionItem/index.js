const GradientDirectionItem = props => {
  const {gradientDirection, changeDirection} = props
  const {displayText, value} = gradientDirection
  const clickButton = () => {
    changeDirection(value)
  }
  return (
    <button type="button" onClick={clickButton}>
      {displayText}
    </button>
  )
}

export default GradientDirectionItem

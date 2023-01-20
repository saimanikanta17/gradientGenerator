import {Component} from 'react'

import {GradientContainer} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    generate: false,
    direction: gradientDirectionsList[0].value,
  }

  changeColorOne = event => {
    this.setState({colorOne: event.target.value, generate: false})
  }

  changeColorTwo = event => {
    this.setState({colorTwo: event.target.value, generate: false})
  }

  generateGradients = () => {
    this.setState({generate: true})
  }

  changeDirection = value => {
    this.setState({direction: value})
  }

  render() {
    const {colorOne, colorTwo, generate, direction} = this.state

    return (
      <GradientContainer
        data-testid="gradientGenerator"
        generate={generate}
        colorOne={colorOne}
        colorTwo={colorTwo}
        direction={`to ${direction}`}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <ul>
          {gradientDirectionsList.map(gradientDirection => (
            <GradientDirectionItem
              gradientDirection={gradientDirection}
              key={gradientDirection.directionId}
              changeDirection={this.changeDirection}
              direction={direction}
            />
          ))}
        </ul>
        <p>Pick the Colors</p>
        <div>
          <label>
            <p>{colorOne}</p>
            <input
              type="color"
              value={colorOne}
              onChange={this.changeColorOne}
            />
          </label>
          <label>
            <p>{colorTwo}</p>
            <input
              type="color"
              value={colorTwo}
              onChange={this.changeColorTwo}
            />
          </label>
        </div>
        <button type="button" onClick={this.generateGradients}>
          Generate
        </button>
      </GradientContainer>
    )
  }
}

export default GradientGenerator

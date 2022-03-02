import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  createRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementCount = () => {
    const randomNumber = this.createRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="counter-container">
          <h1 className="heading">Count {count}</h1>
          <p className="category-check">Count is {displayText}</p>
          <button
            type="button"
            className="evenodd-button"
            onClick={this.onIncrementCount}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

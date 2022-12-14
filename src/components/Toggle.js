
import React from 'react'


class Toggle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({isToggleOn: !state.isToggleOn}))
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.isToggleOn ? 'active' : null}>
      </button>
    )
  }
}


export default Toggle
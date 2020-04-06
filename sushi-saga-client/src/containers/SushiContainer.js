import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {
  state = {
    sushis: [], 
    beginIndex: 0,
    endIndex: 4
  }

  componentDidMount() {
    fetch(this.props.api)
    .then(response => response.json())
    .then(data => this.setState({sushis: data}))
  }

  handleNext = () => {
    this.setState((prevState) => ({
      beginIndex: prevState.beginIndex + 4,
      endIndex: prevState.endIndex + 4
    }))
  }

  handleAteSushi = (sushi) => {
    const sushiIndex = this.state.sushis.indexOf(sushi)
    console.log((this.state.sushis.slice(0, sushiIndex))(this.state.sushis.slice(sushiIndex + 1)))
    // const newSushisArray = 

    // console.log(this.state.sushis.slice(0, sushiIndex))
    // console.log(this.state.sushis.slice(0, sushiIndex) + this.state.sushis.slice(sushiIndex + 1, this.state.sushis.length - 1))


    // was trying to get the index of the sushi then do a slice that would take out the sushi and setState of the new array 
  }

  render() {
    // console.log()

    return (
      <Fragment>
        <div className="belt">
          {
            this.state.sushis.slice(this.state.beginIndex, this.state.endIndex).map((sushi, index) => <Sushi key={index} sushi={sushi} handleAteSushi={this.handleAteSushi}/>)
          }
          <MoreButton handleNext={this.handleNext} {...this.state}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer

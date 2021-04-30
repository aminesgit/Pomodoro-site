import React, { Component } from 'react'

import Home from "../src/components/Home"

import CountingPage from "../src/components/CountingPage"

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      pageDisplay : {
        home : true,
        countingPage : false,
      }
    }
  }


  goToCountingPage = () => {
    this.setState({
      pageDisplay : {
        home : false,
        countingPage: true,
      }
    })
  }

  render() {
    return (
      <>
      
        {this.state.pageDisplay.home && <Home 
            startBtnClicked={this.goToCountingPage}/>}

<CountingPage />

        {this.state.pageDisplay.countingPage && <CountingPage />}
      </>
    )
  }
}


import React, { Component } from 'react'

import styles from "./CountingPage.module.scss"

import bellSound from "../bellSound.m4a"

export default class CountingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            CounterText : "",
            minutesValue :  25 - 1,
            secondsValue : 60,
            turnOf : "Working",
            bellAudio : new Audio(bellSound)
        }
    }

    colorOfBackground () {
        return (this.state.turnOf == "Working") ? "#e16161" : "#28bb63"
    }

    formatTime(i) {
        return i < 10 ? `0${i}` : i
    }

    switchMode() {
        this.setState({
                CounterText : "",
                minutesValue :  (this.state.turnOf = "Working" ? 5 : 25) - 1,
                secondsValue : 60 - 1,
                turnOf : this.state.turnOf = "Working" ? "Rest" : "Working"
        })
    }

    componentDidMount() {
        const counting = () => {
            this.setState({
                secondsValue : this.state.secondsValue - 1
            })

            if (this.state.secondsValue == 0 && this.state.minutesValue == 0) {
                this.state.bellAudio.play()
                intervalManager()
            } else {
                this.state.secondsValue == 0 && this.setState({
                    minutesValue : this.state.minutesValue - 1,
                    secondsValue : 60
                })
            }

            this.setState({
                CounterText : `${this.formatTime(this.state.minutesValue)}:${this.formatTime(this.state.secondsValue)}`
            }, () => {
                document.title = this.state.CounterText
            })
        }

        let interval = setInterval(counting, 1000);

        const intervalManager = () => {
            clearInterval(interval)
            setTimeout(() => {
                this.switchMode()
                interval = setInterval(counting, 1000);
            },2000);
        }
    }
    
    render() {
        return (
            <div id="CountingPage" className={styles.container} 
                style={{backgroundColor: this.colorOfBackground()}}>
                <span className={styles.title} >{this.state.turnOf}</span>
                <span className={styles.time} >
                    {this.state.CounterText}
                </span>
            </div>
        )
    }
}
import React, { Component } from 'react'

import styles from './Home.module.scss'

export default class Home extends Component {
    render() {
        return (
            <div id="home" className={styles.container}>
                <span className={styles.title} >Pomodoro</span>
                <div className={styles.menu} >
                    <img src="../favicon.svg" alt="tomato" />
                    <ul>
                        <li className="startBtn" 
                            onClick={this.props.startBtnClicked}>
                            Start
                        </li>
                        <li className="settingBtn">
                            Setting
                        </li>
                        <li className="helpBtn">
                            Help
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import './app.css'
import Center from './components/Center'
import Cinema from './components/Cinema'
import Film from './components/Film'
export default class App extends Component {

    state = {
        menu: [
            {
                id: 1,
                title: '电影'
            },
            {
                id: 2,
                title: '影院'
            },
            {
                id: 3,
                title: '我的'
            }
        ],
        active: 0
    }
    which(){
        switch(this.state.active){
            case 0:
                return <Film />
            case 1:
                return <Cinema />
            default:
                return <Center />
        }
    }
    render() {
        return (
            <div>
                    {
                        this.which()
                    }
                <ul>
                    {
                        this.state.menu.map((item, index) =>
                            <li className={this.state.active === index ? 'active' : null} 
                            onClick={() => this.chooseMenu(index)} 
                            key={item.id}>{item.title}</li>)
                    }
                </ul>
            </div>
        )
    }

    chooseMenu(index) {
        this.setState({
            active: index
        })
    }
}

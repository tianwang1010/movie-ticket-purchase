import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {

    constructor() {
        super()
        // axios请求数据 第三方库
        // axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7700517').then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        this.state = {
            copyList: [],
            cinemasList: []
        }
    }

    componentDidMount() {
        this.getCineamList()
    }
    getCineamList() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7700517',
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"16553865511505051029798913"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            let { status } = res.data
            console.log(status)
            if (status === 0) {
                this.setState({
                    cinemasList: res.data.data.cinemas,
                    copyList:res.data.data.cinemas
                })
            }
        })
    }
    render() {
        return (
            <div className='cineam'>
                <input onInput={this.handleClick} />
                <div>
                    {
                        this.state.cinemasList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>)
                    }
                </div>
            </div>
        )
    }
    handleClick = (event) => {
        console.log('input', event.target.value)
        let newList = this.state.copyList.filter(item => {
            console.log(item.name, item.name.toUpperCase())
            console.log(event.target.value, event.target.value.toUpperCase())
           return item.name.toUpperCase().includes(event.target.value.toUpperCase())
            || item.address.toUpperCase().includes(event.target.value.toUpperCase())})

        this.setState({
            cinemasList: newList
        })
    }
}

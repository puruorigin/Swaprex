import React, { Component } from 'react'
import check from './check'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default class AboutUs extends Component {

    constructor(props){
        super(props);
        this.state={
            title:''
        }
    }

    componentDidMount (){
        const { state } = this.props.location
        this.setState({
            title: state.title
        })
    }

    render() {
        return (
            <div>
                 <Link to='/'>About</Link>
                 <h1>{this.state.title}</h1>
            </div>
        )
    }
}

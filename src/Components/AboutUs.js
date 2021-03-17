import React, { Component } from 'react'
import check from './check'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                 <Link to='/'>About</Link>
            </div>
        )
    }
}

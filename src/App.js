import React, { Component } from 'react'
const data = require('./data')

console.log(data)

class Ap  extends Component {
    state = {dir: data}
    handleFirstAZ = _ => {
        let dir = JSON.parse(JSON.stringify(this.state.dir))
        dir.sort((a, b) => a.first_name.localeCompare(b.first_name))
        this.setState({ dir: dir})
    }

    handleFirstAZ = _ => {
        let dir = JSON.parse(JSON.stringify(this.state.dir))
        dir.sort((b, a) => a.first_name.localeCompare(b.first_name))
        this.setState({dir : dir })
    }

    handleLastAZ = _ => {
        let dir = JSON.parse(JSON.stringify(this.state.dir))
        dir.sort((a, b) => a.last_name.localeCompare(b.last_name))
        this.setState({ dir:dir })
    }

    handleLastAZ = _ => {
        let dir = JSON.parse(JSON.stringify(this.state.dir))
        dir.sort((b, a) => a.last_name.localeCompare(b.last_name))
        this.setState({ dir:dir })
    }

    handleStateFilter = ({target}) => {
        let dir 
        switch(target.value) {
            case 'CA':
                dir = data.filter((a) => (a.state === 'California'))
                break
            case 'AZ':
                dir = data.filter((a) => (a.state === 'Arizona'))
                break
            case 'NV':
                dir = data.filter((a) => (a.state === 'Nevada'))
                break
            case 'WA':
                dir = data.filter((a) => (a.state === 'Washington'))
                break
            case 'OR':
                dir = data.filter((a) => (a.state === 'Oregon'))
                break
            default:
                dir = data
                break
        }
        this.setState({ dir:dir })
    }

    render () {
        return (
            <>
            <div className = 'uk-padding-large uk-background-primary'><h1 className = 'uk-heading-medium uk-text-center'>Employee Directory</h1></div>
            <div className = 'uk-container'>
                <p className = 'uk-padding'>
                    Sort by First Name:
                    <button className = 'uk-button uk-button-default uk-button-small' onClick = {this.handleFirstAZ}> A to Z</button>
                    <button className = 'uk-button uk-button-default uk-button-small' onClick = {this.handleFirstAZ}> Z to A</button>
                </p>
            </div>
        )
    }
}
import React, { Component } from 'react'
import {FormControl} from 'react-bootstrap'
import './search-panel.css'

export default class SearchPannel extends Component {

    state = {
        searchText : ''
    }

    onSearchChange = (event) => {
        const searchText = event.target.value
        this.setState({
            searchText
        })
        this.props.onSearchChange(searchText)
    }
    render() {
        const{searchText} = this.state
        return (
            
            <FormControl type="text" value={searchText} placeholder="Search" className="mr-sm-2 search" onChange={this.onSearchChange}/>
            //<input type="text" value={searchText} placeholder="search" onChange={this.onSearchChange}/>
        )
    }
}
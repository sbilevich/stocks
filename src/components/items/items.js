import React, { Component } from 'react';
import './items.css'

export default class Items extends Component {

    

    renderItems(arr) {
        return arr.map((item) => {
            const {ticker, currency} = item
            const label = this.props.renderItem(item)
            return (
                <li className="list-group-item"
                    key={ticker ? ticker : currency}
                    title={ticker}
                    onClick={() => this.props.onItemSelected(item)}>
                        {label}    
                </li>
            )
        })
    }

    render() {
        const items = this.renderItems(this.props.positions)
        return (
            <>
                <ul className="item-list list-group">
                    {items}
                </ul>
                <br/>
            </>
        )
    }

}
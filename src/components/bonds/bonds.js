import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import ItemsTable from '../itemsTable'
import SearchPannel from '../search-panel'
import './bonds.css'

/*
    props:
        bonds: []
*/

class Bonds extends Component {

    state = {
        searchText: ''
    }
    search(arr, text) {
        if (text === '') {
            return arr
        }
        return arr.filter((item) => item.symbol.showName.toLowerCase().includes(text.toLowerCase()) ||
            item.symbol.ticker.toLowerCase().includes(text.toLowerCase()))
    }

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        })
    }

    renderItemLabel = (item) => {
        const { 
            ticker, 
            showName, 
            logoName = 'http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png',
        } = item.symbol;
        return (
            <div className="d-flex justify-content-between">
                <div>
                    {(
                        <Image
                            className="smallLogo"
                            src={`http://static.tinkoff.ru/brands/traiding/${logoName.replace('.png', 'x160.png')}`}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "http://static.tinkoff.ru/brands/traiding/US87238U2033x160.png";
                            }}
                            roundedCircle
                        />
                    )}
                    {showName} ({ticker})
            </div>

            </div>
        );
    }
    render() {
        const { bonds } = this.props
        const { searchText } = this.state
        return (
            <>
                <SearchPannel onSearchChange={this.onSearchChange} />
                <ItemsTable
                    items={this.search(bonds, searchText)}
                    renderRow={(item) => {
                        const { symbol, price = {}, yieldToClient, dateToClient } = item
                        const { ticker } = symbol
                        const { value, currency } = price
                        const label = this.renderItemLabel(item)
                        return (

                            <tr key={ticker}>
                                <td>{label}</td>
                                <td>{value} {currency}</td>
                                <td>{yieldToClient}%</td>
                                <td>{new Date(dateToClient).toLocaleDateString()}</td>
                            </tr>
                        )
                    }}
                    // renderItemLabel={this.renderItemLabel}
                    renderHeader={() => (
                        <tr>
                            <td>Bond</td>
                            <td>Price</td>
                            <td>Profit</td>
                            <td>Date</td>
                        </tr>)}
                />

            </>
        )
    }


}

export default Bonds;
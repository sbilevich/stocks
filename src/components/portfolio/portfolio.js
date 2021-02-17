import React, { Component }  from 'react'
import Page from '../page';
import Items from '../items';
import ItemDetails from '../item-details'
import {Image} from 'react-bootstrap'
import SearchPannel from '../search-panel';
import '../portfolio/portfolio.css'
export default class Portfolio extends Component {
    componentDidMount(){
        this.props.onItemSelected(null);
    }

    state = {
        searchText: ''
    }
    search(arr, text) {
        if (text === '') {
            return arr
        }
        return arr.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    }

    onSearchChange = (searchText) => {
        this.setState({
            searchText
        })
    }

    portfolioList = () => {
        const {searchText} = this.state
        const {positions, currencyPositions, onItemSelected} = this.props
        return (
            <>
                <SearchPannel onSearchChange={this.onSearchChange}/>
                    <div className="title">My Stocks</div>
                    <Items 
                        positions={this.search(positions, searchText)} 
                        onItemSelected={onItemSelected}
                        renderItem={({name, lots, isin}) => {
                            return (
                                <div className="d-flex justify-content-between">
                                    <div>
                                    <Image className="smallLogo" src={`http://static.tinkoff.ru/brands/traiding/${isin}x160.png`} roundedCircle />
                                        {name} 
                                    </div>
                                    <div className="lots">{lots}</div>
                                     
                                </div>
                            );
                        }
                        
                        }/>  

                <div className="title">My Currencies</div>
              <Items
                positions={this.search(currencyPositions, searchText)}
                onItemSelected={onItemSelected}
                renderItem={({ currency, balance }) => {
                    
                    return (
                        <div className="d-flex justify-content-between">
                            <div>
                                <Image className="smallLogo" src={`http://static.tinkoff.ru/brands/traiding/${currency}x160.png`} roundedCircle />
                                {currency} 
                            </div>
                            <div className="lots">{balance}</div>

                        </div>
                    );
                }

                } />
            </>
        )
    }

    portfolioDetails = () => {
        const {selectedItem} = this.props
        if (!selectedItem) {
            return <div className="itemSelect">Select an item from a list</div>;
          }

          return (
            <ItemDetails 
                item={selectedItem} 
                submitOrder={this.props.submitOrder}
            />
        )
    }

    
    render() {
        return (
            <Page left={this.portfolioList()} right={this.portfolioDetails()}/>

        )
    }

}
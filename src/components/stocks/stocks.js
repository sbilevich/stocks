import React, { Component }  from 'react'
import Page from '../page';
import Items from '../items';
import ItemDetails from '../item-details'
import {tinkoffService} from '../../services/tinkoff-service'
import { Image } from 'react-bootstrap';
import SearchPannel from '../search-panel/';
import '../stocks/stocks.css'

export default class Stocks extends Component {
    componentDidMount(){
        this.props.onItemSelected(null);
    }
    state={
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

    stocksList = () => {
        const {searchText} = this.state
        const { stonks,  onItemSelected} = this.props
        return (
            <>
                <SearchPannel onSearchChange={this.onSearchChange}/>
                    <Items 
                        positions={this.search(stonks, searchText)} 
                        onItemSelected={onItemSelected}
                        renderItem={({name, isin}) => {
                            return (
                                <>
                                    <Image className="smallLogo" src={`http://static.tinkoff.ru/brands/traiding/${isin}x160.png`}  alt="logo" roundedCircle />
                                    {name}
                                </>
                            );
                        }}/> 
            </>            
        )
    }

    stockDetails = () => {
        const {selectedItem} = this.props
        if (!selectedItem) {
            return <div className="itemSelect" >Select an item from a list</div>;
          }
        return (
            <ItemDetails item={selectedItem} submitOrder={this.props.submitOrder}/>
        )
    }

    
    render() {
        return (
            <Page left={this.stocksList()} right={this.stockDetails()}/>

        )
    }

}
import React, { Component } from 'react';
import {tinkoffService} from '../../services/tinkoff-service'
import './app.css'
import Portfolio from '../portfolio'
import Links from '../links';
import Stocks from '../stocks'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { tinkoffService2 } from '../../services/tinkoff-service2';
import Currencies from '../currencies';
import Bonds from '../bonds';
import Etfs from '../etfs'


export default class App extends Component {

    state = {
        stonks:[],
        positions: [],
        currencies: [],
        currencyPositions: [],
        bonds: [],
        etfs: [],
        selectedItem: null
    }
    async componentDidMount() {
        this.updatePositions()
        this.getStonks()
       
       await this.getCurrencyPortfolio()
        this.getAllCurrencies()
        this.getBonds()
        this.getETFs()
    }

    async getStonks() {
        const stonks = await tinkoffService.getStonks()
        const stocks = await tinkoffService2.getStocks()
        const newStocks = []

        stonks.forEach((stonk) => {
            const foundStock = stocks.find((stock) => {
                return stock.symbol.ticker === stonk.ticker
            });
            if (!foundStock) {
                return;
            }
            const newStock = {
                ...stonk,
                brand: foundStock.symbol.brand,
                price: foundStock.price ? foundStock.price.value : null,
                stockCurrency: foundStock.price ? foundStock.price.currency : null

            }
            
            newStocks.push(newStock);
        })
        this.setState({
            stonks: newStocks.sort((a, b) => a.name > b.name ? 1 : -1)
        })
       
        
    }
    async updatePositions() {
        const positions = await tinkoffService.getPortfolio();
        const stocks = await tinkoffService2.getStocks()
        const newPositions = []
        positions.forEach((position) => {
            const foundPosition = stocks.find((stock) => {
                return stock.symbol.ticker === position.ticker
            })
            if (!foundPosition) {
                return;
            }
            newPositions.push({
                ...position,
                brand: foundPosition.symbol.brand,
                price: foundPosition.price ? foundPosition.price.value : null,
                stockCurrency: foundPosition.price ? foundPosition.price.currency : null
            })

        })
        this.setState({
            positions: newPositions.sort((a, b) => a.name > b.name ? 1 : -1).filter((item) => item.instrumentType==="Stock")
        })
    }
    async getCurrencyPortfolio() {
        const currencies = await tinkoffService.getMarketCurrencies();
        const currencyPositions = await tinkoffService.getCurrencyPortfolio();
        const newCurrencyPortfolio = []
        currencyPositions.forEach((position) => {
            const foundCurrency = currencies.find((currency) => {
                return position.currency === currency.ticker.substring(0, 3)
            }) 
            newCurrencyPortfolio.push({
                ...position,
                properties: foundCurrency,
                name: position.currency,
                figi: foundCurrency ? foundCurrency.figi : '',
                isValidCurrency: foundCurrency ? foundCurrency.figi : false ,
                isCurrency: true
            })
          
        })
        this.setState({
            currencyPositions: newCurrencyPortfolio
        })

    }

    async getAllCurrencies() {
        const allCurrencies = await tinkoffService2.getCurrencyInfo();
        const {currencyPositions} = this.state
        const newAllCurrencies = []

        allCurrencies.forEach((currency) => {
            const foundCurrency = currencyPositions.find((position) => {
                return position.currency === currency.symbol.ticker.replace('RUB', '')
            })
            newAllCurrencies.push({
                ...currency,
                position: foundCurrency,
                isCurrency: true,
                ticker: currency.symbol.ticker,
                price: currency.price.value
            })
           
        })
        
        this.setState({
            currencies: newAllCurrencies
        })
        
    }

    async getBonds() {
        const bonds = await tinkoffService2.getBonds()
        this.setState({
            bonds
        })
    }

    async getETFs() {
        const etfs = await tinkoffService2.getETFs()
        this.setState({
            etfs
        })
    }

    onItemSelected = async (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    submitOrder = async(figi, isCurrency, selectedOperation, lots, lotPrice) => {
        await tinkoffService.postLimitOrder(figi, selectedOperation, lots, lotPrice);
        await this.updatePositions()
    }

    render() {
        const {positions, stonks, currencies, bonds, etfs, currencyPositions, selectedItem} = this.state
        return (
            <>
                <Router>
                    <Links/>
                    <Route path="/" exact render={()=> (
                        <Portfolio 
                            positions={positions} 
                            currencies={currencies}
                            currencyPositions={currencyPositions}
                            selectedItem={selectedItem}
                            onItemSelected={this.onItemSelected} 
                            submitOrder={this.submitOrder}
                        />
                    )}/>
                    <Route path="/stocks" exact render={()=> (
                        <Stocks 
                            stonks={stonks} 
                            selectedItem={selectedItem}
                            onItemSelected={this.onItemSelected} 
                            submitOrder={this.submitOrder}

                        />
                    )}/>
                    <Route path="/currencies" exact render={()=> (
                        <Currencies 
                            currencies={currencies}
                            currencyPositions={currencyPositions}
                            onItemSelected={this.onItemSelected}
                            selectedItem={selectedItem}
                        />
                    )}/>
                    <Route path="/bonds" exact render={()=> (
                        <Bonds 
                            bonds={bonds}
                        />
                    )}/>

                    <Route path="/etfs" exact render={()=> (
                        <Etfs 
                            etfs={etfs}
                        />
                    )}/>
                </Router>
                
            </>
 
        )
    }
}